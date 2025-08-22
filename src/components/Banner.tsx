"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-green-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/BannerImage.jpg"
          alt="Eco-friendly products banner"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-3xl text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Sustainable Choices for a{" "}
          <span className="text-green-400">Greener Future</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover eco-friendly products that make a difference. Shop responsibly and
          support sustainability with{" "}
          <span className="font-semibold text-green-300">Greenora</span>.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/products">
            <button className="btn bg-green-600 text-white hover:bg-green-700 rounded-full px-6 shadow-lg">
              Shop Now
            </button>
          </Link>
          <Link href="/about">
            <button className="btn btn-outline border-white text-white hover:bg-green-600 hover:border-green-600 rounded-full px-6">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
