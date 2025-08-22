"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-base-300">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand Section */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-bold tracking-wide text-green-600 hover:text-green-700"
                    >
                        <Image src="/logo.png" alt="Greenora Logo" width={40} height={40} />
                        Greenora
                    </Link>
                    <p className="mt-4 text-sm text-base-content/70 leading-relaxed">
                        Sustainable shopping made simple. Discover eco-friendly products that
                        care for you and the planet.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-green-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-green-600 transition-colors">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-green-600 transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-green-600 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/faq" className="hover:text-green-600 transition-colors">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-green-600 transition-colors">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-green-600 transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/shipping" className="hover:text-green-600 transition-colors">
                                Shipping Info
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                    <p className="text-sm text-base-content/70 mb-3">
                        Subscribe to our newsletter for updates on eco-friendly products and special offers.
                    </p>
                    <form className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full max-w-xs rounded-lg"
                        />
                        <button
                            type="submit"
                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                    {/* Socials */}
                    <div className="flex gap-4 mt-5">
                        <Link href="#" aria-label="Facebook" className="hover:text-green-600">
                            <FaFacebookF />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-green-600">
                            <FaInstagram />
                        </Link>
                        <Link href="#" aria-label="Twitter" className="hover:text-green-600">
                            <FaTwitter />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="hover:text-green-600">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/70">
                © {new Date().getFullYear()} Greenora. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
