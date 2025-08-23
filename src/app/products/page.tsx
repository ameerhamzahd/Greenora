"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
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
          <div
            key={product._id}
            className="card bg-white shadow-xl rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <figure className="relative h-80 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover"
              />
            </figure>

            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title text-green-700">{product.name}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <p className="text-green-600 font-semibold text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <Link href={`/products/${product._id}`}>
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
