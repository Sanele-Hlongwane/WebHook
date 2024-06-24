"use client"

// src/app/layout.tsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleToggleBlur = (blur: boolean) => {
    setIsBlurred(blur);
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${isBlurred ? "filter blur-lg" : ""}`}>
          <NavBar handleToggleBlur={handleToggleBlur} />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
