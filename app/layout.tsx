

// src/app/layout.tsx
import { useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  

  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          <NavBar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
