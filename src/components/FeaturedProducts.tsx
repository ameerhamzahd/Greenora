"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    slug: string;
}

const products: Product[] = [
    {
        id: "1",
        name: "Eco-Friendly Bamboo Toothbrush",
        description: "Biodegradable and sustainable dental care.",
        price: "$5",
        image: "/products/bamboo-toothbrush.jpg",
        slug: "eco-bamboo-toothbrush",
    },
    {
        id: "2",
        name: "Reusable Shopping Bag",
        description: "Durable and washable fabric bag for daily use.",
        price: "$12",
        image: "/products/reusable-bag.jpg",
        slug: "reusable-shopping-bag",
    },
    {
        id: "3",
        name: "Solar Powered Charger",
        description: "Charge your devices sustainably with solar energy.",
        price: "$40",
        image: "/products/solar-charger.jpg",
        slug: "solar-powered-charger",
    },
    {
        id: "4",
        name: "Organic Cotton T-Shirt",
        description: "Soft, breathable, and eco-conscious clothing.",
        price: "$25",
        image: "/products/organic-tshirt.jpg",
        slug: "organic-cotton-tshirt",
    },
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
                        Featured <span className="text-green-600">Products</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our hand-picked selection of sustainable products designed to help you live a greener lifestyle.
                    </p>
                </motion.div>

                {/* Product Slider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mt-10"
                >
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 4000 }}
                        navigation
                        pagination={{ clickable: true }}
                        className="pb-12"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="card bg-white shadow-xl rounded-2xl overflow-hidden border border-green-100"
                                >
                                    <figure className="relative h-64 w-full">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </figure>
                                    <div className="card-body text-left p-6">
                                        <h3 className="card-title text-lg font-bold text-gray-800">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{product.description}</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-green-600 font-semibold">
                                                {product.price}
                                            </span>
                                            <Link href={`/products/${product.slug}`}>
                                                <button className="btn btn-sm bg-green-600 text-white rounded-full hover:bg-green-700">
                                                    View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
