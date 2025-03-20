"use client";

import { Container } from "@/components/ui/container";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Container>
        <Hero />
      </Container>

      <Container>
        <Features />
      </Container>

      <Container>
        <CTA />
      </Container>
    </main>
  );
}
