"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.error || "Failed to fetch product");
        }
        const data: Product = await res.json();
        setProduct(data);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-green-600 font-bold text-xl">
        Loading product...
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 font-medium text-lg">
        Product not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="card bg-white shadow-xl rounded-3xl overflow-hidden">
          <figure className="relative h-96 w-full">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover"
            />
          </figure>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-700 mb-4">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>
            <p className="text-3xl font-semibold text-green-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="btn bg-green-600 text-white hover:bg-green-700 rounded-full shadow-lg px-6 py-3"
              onClick={() => toast.success("Added to cart!")}
            >
              Buy Now
            </button>
            <Link href="/products">
              <button className="btn btn-outline border-green-700 text-green-700 hover:bg-green-600 hover:text-white rounded-full px-6 py-3">
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
