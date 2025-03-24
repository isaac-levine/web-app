// app/api/logs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

// Type definitions
interface LLMInteraction {
  prompt: string;
  completion?: string;
  model: string;
  metadata?: Record<string, unknown>;
  timestamp: number;
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const { interactions } = body as { interactions: LLMInteraction[] };

    // Validate request
    if (
      !interactions ||
      !Array.isArray(interactions) ||
      interactions.length === 0
    ) {
      return NextResponse.json(
        { error: "Invalid request. Expected array of interactions." },
        { status: 400 }
      );
    }

    // Enrich interactions with metadata
    const enrichedInteractions = interactions.map((interaction) => ({
      ...interaction,
      receivedAt: new Date(),
      clientIp: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    }));

    // Store in MongoDB
    const collection = await getCollection("llm_interactions");
    const result = await collection.insertMany(enrichedInteractions);

    return NextResponse.json({
      success: true,
      inserted: result.insertedCount,
    });
  } catch (error) {
    console.error("Error processing log request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const collection = await getCollection("llm_interactions");
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const stats = await collection
      .aggregate([
        { $match: { receivedAt: { $gte: oneDayAgo } } },
        {
          $group: {
            _id: null,
            count: { $sum: 1 },
            models: { $addToSet: "$model" },
          },
        },
      ])
      .toArray();

    return NextResponse.json({
      totalLogs24h: stats[0]?.count || 0,
      models: stats[0]?.models || [],
      status: "operational",
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        status: "degraded",
      },
      { status: 500 }
    );
  }
}
