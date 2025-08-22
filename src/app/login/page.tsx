"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if already logged in
  React.useEffect(() => {
    if (session) {
      router.push("/products");
    }
  }, [session, router]);

  const handleGoogleLogin = async () => {
    try {
      await signIn("google");
      toast.success("Redirecting to products...");
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 via-white to-green-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Greenora Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to <span className="text-green-600">Greenora</span>
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Sign in to explore sustainable products
        </p>

        {/* Google Login Button */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-block border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center gap-3"
          >
            <FaGoogle />
            Continue with Google
          </button>

          {/* Optional: Email/Password login placeholder */}
          {/* <button className="btn btn-outline btn-block border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white rounded-full">
            Continue with Email
          </button> */}
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-green-600 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-green-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
