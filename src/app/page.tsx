"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Hours />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
