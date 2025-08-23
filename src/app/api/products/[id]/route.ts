import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // <-- must be Promise
) {
  try {
    const { id } = await context.params; // <-- await here

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid product ID" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("GreenoraDB");

    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    // Always serialize _id to string
    return new Response(
      JSON.stringify({ ...product, _id: product._id.toString() }),
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
