import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ArrowRight, BarChart2, Database, Zap } from "lucide-react";
import Image from "next/image";
import { Waitlist } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <Container className="pt-32 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Monitor performance,
            <br />
            scale with happy users
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Beautiful pre-built dashboards to monitor every LLM metric and
            request log. Integration literally takes 2 minutes.
          </p>
          <div className="flex flex-col items-center gap-6" id="waitlist">
            <div className="w-full max-w-sm">
              <Waitlist />
            </div>
            <p className="text-sm text-zinc-500">
              Join the waitlist to get early access when we launch.
            </p>
          </div>
        </div>
      </Container>

      {/* Dashboard Preview */}
      <Container className="py-16">
        <div className="relative rounded-xl overflow-hidden border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            src="/dashboard-preview.png"
            alt="PromptLens Dashboard"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </Container>

      {/* Features Grid */}
      <Container className="py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <BarChart2 className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">
              Track user sessions and debug
            </h3>
            <p className="text-zinc-400">
              Evaluate outputs for every single conversation, and debug issues.
            </p>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <Database className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">
              Collect data, improve
            </h3>
            <p className="text-zinc-400">
              Curate golden datasets from your production data to improve
              performance.
            </p>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <Zap className="w-12 h-12 mb-6 text-white" />
            <h3 className="text-xl font-semibold mb-3">
              Integrate within minutes
            </h3>
            <p className="text-zinc-400">
              One-click fine-tune on your datasets to improve quality and cut
              costs.
            </p>
          </Card>
        </div>
      </Container>

      {/* Code Integration Section */}
      <Container className="py-24 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Integrate in minutes.
            <br />
            Available today.
          </h2>
          <Card className="bg-zinc-900 border-zinc-800 p-6 text-left">
            <pre className="text-sm text-zinc-400 overflow-x-auto">
              <code>{`import { PromptLens } from '@promptlens/sdk'

const promptlens = new PromptLens({
  apiKey: process.env.PROMPTLENS_API_KEY
})

// Wrap your LLM calls
const response = await promptlens.track({
  provider: 'openai',
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
})`}</code>
            </pre>
          </Card>
        </div>
      </Container>

      {/* Final CTA */}
      <Container className="py-24 border-t border-zinc-800">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join the waitlist today</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Be among the first to experience PromptLens when we launch.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <Waitlist />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
