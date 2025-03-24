// lib/mongodb.ts
import { MongoClient, ObjectId } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 10, // Maintain up to 10 socket connections
};

let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the connection
  // persists between hot-reloads
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise
export { clientPromise };

// Helper functions for common database operations
export async function getDb() {
  const client = await clientPromise;
  return client.db();
}

export async function getCollection(name: string) {
  const db = await getDb();
  return db.collection(name);
}

// Schema types - using MongoDB ObjectId for _id fields
export interface ApiKey {
  _id?: ObjectId; // MongoDB will assign this
  key: string;
  name: string;
  organizationId: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  lastUsed?: Date;
  enabled: boolean;
}

export interface LLMInteraction {
  _id?: ObjectId; // MongoDB will assign this
  prompt: string;
  completion?: string;
  model: string;
  metadata?: Record<string, unknown>;
  timestamp: number;
  receivedAt: Date;
  clientIp?: string;
  userAgent?: string;
  apiKeyId?: string;
  organizationId?: string;
}
