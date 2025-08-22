"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green-600 font-bold text-xl">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 font-medium text-lg">
        No products found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="card bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <figure className="relative h-80 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-green-700">{product.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
              <p className="text-green-600 font-semibold text-lg">${product.price.toFixed(2)}</p>
              <div className="card-actions mt-3">
                <Link href={`/products/${product.slug}`}>
                  <button className="btn btn-sm btn-outline text-green-700 border-green-700 hover:bg-green-600 hover:text-white rounded-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
