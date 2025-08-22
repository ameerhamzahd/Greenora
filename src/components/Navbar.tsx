"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10">
      {/* Left: Brand */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-green-800 transition-colors flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Greenora Logo"
            height={40}
            width={40}
            className="scale-150"
            priority
          />
          Greenora
        </Link>
      </div>

      {/* Center: Navigation (hidden on mobile) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium gap-4">
          <li>
            <Link href="/" className="hover:text-green-800 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-green-800 transition-colors"
            >
              Products
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/dashboard/add-products"
                className="hover:text-green-800 transition-colors"
              >
                Add Product
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MdOutlineDarkMode className="text-xl" />
          ) : (
            <MdOutlineLightMode className="text-xl" />
          )}
        </button>

        {/* Auth */}
        {!session ? (
          <button
            onClick={() => signIn(undefined, { callbackUrl: "/" })}
            className="btn btn-sm rounded-full bg-green-600 text-white hover:bg-green-800 px-4"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="btn btn-sm rounded-full bg-red-500 text-white hover:bg-red-600 px-4"
          >
            Logout
          </button>
        )}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            ☰
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            {session && (
              <li>
                <Link href="/dashboard/add-product">Add Product</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
