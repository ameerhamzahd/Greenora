"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
                <header>
                    <Navbar></Navbar>
                </header>

                <main>
                {children}
                </main>

                <footer>
                    <Footer></Footer>
                </footer>
            </ThemeProvider>
        </SessionProvider>
    );
}
