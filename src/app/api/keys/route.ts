// app/api/keys/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getCollection, ApiKey } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// This is a placeholder auth function - implement proper auth for production
async function isAuthorized(request: NextRequest): Promise<boolean> {
  // In development, allow all requests
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  // For production, implement proper auth check
  // This could verify a session cookie, JWT token, etc.
  const authHeader = request.headers.get("authorization");
  return !!authHeader && authHeader.startsWith("Bearer admin_");
}

// Generate a new API key
export async function POST(request: NextRequest) {
  try {
    // Check authorization
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, organizationId } = body;

    if (!name || !organizationId) {
      return NextResponse.json(
        { error: "Missing required fields: name, organizationId" },
        { status: 400 }
      );
    }

    // Generate API key with prefix
    const randomBytes = crypto.randomBytes(24).toString("hex");
    const key = `pl_${randomBytes}`;

    // Store in database
    const collection = await getCollection("api_keys");
    const apiKey: ApiKey = {
      // Let MongoDB assign the _id with its own ObjectId
      key,
      name,
      organizationId,
      createdAt: new Date(),
      enabled: true,
    };

    await collection.insertOne(apiKey);

    return NextResponse.json({
      _id: apiKey._id,
      key, // Only returned on creation
      name: apiKey.name,
      organizationId: apiKey.organizationId,
      createdAt: apiKey.createdAt,
      enabled: apiKey.enabled,
    });
  } catch (error) {
    console.error("Error creating API key:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// List all API keys for an organization
export async function GET(request: NextRequest) {
  try {
    // Check authorization
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get organization ID from query params
    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId");

    if (!organizationId) {
      return NextResponse.json(
        { error: "Missing required parameter: organizationId" },
        { status: 400 }
      );
    }

    // Get keys from database
    const collection = await getCollection("api_keys");
    const keys = await collection
      .find<ApiKey>(
        { organizationId },
        { projection: { key: 0 } } // Never return the actual key
      )
      .toArray();

    return NextResponse.json({ keys });
  } catch (error) {
    console.error("Error fetching API keys:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Disable an API key
export async function DELETE(request: NextRequest) {
  try {
    // Check authorization
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { keyId } = body;

    if (!keyId) {
      return NextResponse.json(
        { error: "Missing required field: keyId" },
        { status: 400 }
      );
    }

    // Disable key in database (we never actually delete keys)
    const collection = await getCollection("api_keys");
    const result = await collection.updateOne(
      { _id: new ObjectId(keyId) },
      { $set: { enabled: false } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "API key not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "API key disabled",
    });
  } catch (error) {
    console.error("Error disabling API key:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
