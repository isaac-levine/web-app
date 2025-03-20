"use client";

import { Container } from "@/components/ui/container";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DetailedFeature } from "@/components/landing/DetailedFeature";
import { Code, LineChart, Workflow } from "lucide-react";
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
        <div className="py-24 border-t border-zinc-800">
          <DetailedFeature
            title="Simple SDK Integration"
            description="Drop in our SDK with a few lines of code. Start testing prompts in minutes, not days."
            icon={<Code className="h-6 w-6 text-white" />}
          >
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                Python
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                Node.js
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                REST API
              </div>
            </div>
          </DetailedFeature>

          <DetailedFeature
            title="Comprehensive Analytics"
            description="Get deep insights into your prompt performance. Track costs, latency, and custom success metrics."
            icon={<LineChart className="h-6 w-6 text-white" />}
            reverse
          />

          <DetailedFeature
            title="Automated Testing"
            description="Set up automated tests to ensure your prompts maintain quality as you iterate. Catch regressions before they hit production."
            icon={<Workflow className="h-6 w-6 text-white" />}
          />
        </div>
      </Container>

      <Container>
        <CTA />
      </Container>
    </main>
  );
}
