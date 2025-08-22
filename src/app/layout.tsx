import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ scrollBehavior: "smooth" }}>
      <body>
        <header>

        </header>

        <main>
          {children}
        </main>

        <footer>

        </footer>
      </body>
    </html>
  );
}
