import clientPromise from "@/app/lib/mongodb";
import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

interface Product {
  _id?: ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("liteMart");

    const products: Product[] = await db
      .collection<Product>("products")
      .find({})
      .toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: Omit<Product, "_id"> = await req.json(); // exclude _id for insertion
    const client = await clientPromise;
    const db = client.db("liteMart");

    const result = await db.collection<Product>("products").insertOne(body);

    return new Response(JSON.stringify({ insertedId: result.insertedId }), { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
