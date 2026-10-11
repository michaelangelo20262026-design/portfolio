import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

const client = new MongoClient(uri);

let db;

export async function getDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("portfolio");
  }

  return db;
}