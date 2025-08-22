"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ProductForm {
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

const AddProductPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState<ProductForm>({
    name: "",
    description: "",
    price: 0,
    image: "",
    slug: "",
  });
  const [loading, setLoading] = useState(false);

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add product");
      }

      toast.success("Product added successfully!");
      setForm({ name: "", description: "", price: 0, image: "", slug: "" });
      router.push("/products");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Add a New Product
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="input input-bordered w-full rounded-lg"
            required
          />

          {/* Description */}
          <label className="font-semibold text-gray-700">Product Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="textarea textarea-bordered w-full rounded-lg"
            rows={4}
            required
          />

          {/* Price */}
          <label className="font-semibold text-gray-700">Price (USD)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="input input-bordered w-full rounded-lg"
            required
          />

          {/* Image URL */}
          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full rounded-lg"
            required
          />

          {/* Slug */}
          <label className="font-semibold text-gray-700">Product Slug</label>
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Enter product slug for URL"
            className="input input-bordered w-full rounded-lg"
            required
          />

          <button
            type="submit"
            className={`btn bg-green-600 text-white rounded-full hover:bg-green-700 shadow-lg ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
