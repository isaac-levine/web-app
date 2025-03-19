"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRight,
  Terminal,
  Zap,
  GitBranch,
  Code,
  History,
  LineChart,
  Users,
  Sparkles,
  Workflow,
} from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { openWaitlist } = useClerk();

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-24">
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text mb-8">
            Supercharge Your
            <br />
            Prompt Engineering
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
            PromptLens helps you write, test, and optimize your AI prompts.
            Collaborate with your team and track prompt performance over time.
          </p>
          <div className="flex gap-4">
            <SignedIn>
              <Button
                size="lg"
                variant="ghost"
                className="text-lg text-zinc-400 hover:text-white hover:bg-transparent transition-colors"
                asChild
              >
                <Link href="/dashboard" className="flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <Button
                size="lg"
                className="text-lg bg-white text-black hover:bg-zinc-200"
                onClick={() => openWaitlist()}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignedOut>
          </div>

          {/* Trusted By Section */}
          <div className="mt-24 border-t border-zinc-800 pt-12 w-full">
            <p className="text-sm text-zinc-500 mb-8">
              Trusted by companies like
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              <div className="h-8">
                <Image
                  src="/logos/company1.svg"
                  alt="Company 1"
                  width={120}
                  height={32}
                  className="opacity-50 hover:opacity-75 transition-opacity"
                />
              </div>
              {/* Add more company logos */}
            </div>
          </div>
        </div>
      </Container>

      {/* Product Screenshot Section */}
      <Container>
        <div className="relative border border-zinc-800 rounded-lg overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <Image
            src="/dashboard-preview.png"
            alt="PromptLens Dashboard"
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
      </Container>

      {/* Key Features Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24 border-t border-zinc-800">
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Prompt Testing
            </h3>
            <p className="text-zinc-400">
              Test and iterate on your prompts with real-time feedback and
              version control.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Performance Analytics
            </h3>
            <p className="text-zinc-400">
              Track and analyze your prompt performance with detailed metrics
              and insights.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Team Collaboration
            </h3>
            <p className="text-zinc-400">
              Work together seamlessly with version control and team
              permissions.
            </p>
          </div>
        </div>
      </Container>

      {/* Detailed Features Section */}
      <Container>
        <div className="py-24 border-t border-zinc-800">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1 space-y-6">
              <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Build with a unified API endpoint
              </h3>
              <p className="text-zinc-400">
                A unified interface for any model with built-in infrastructure,
                so you can focus on building a product people love.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                  OpenAI
                </div>
                <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                  Anthropic
                </div>
                <div className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm">
                  Google AI
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
              <Image
                src="/api-example.png"
                alt="API Example"
                width={600}
                height={400}
                className="rounded-lg border border-zinc-800"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
            <div className="flex-1 space-y-6">
              <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center">
                <History className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Version Control for Prompts
              </h3>
              <p className="text-zinc-400">
                Track changes, manage versions, and collaborate on prompts with
                your team. Never lose track of what works and what doesn&apos;t.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Automatic version history
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Team collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Performance tracking
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
              <Image
                src="/version-control.png"
                alt="Version Control"
                width={600}
                height={400}
                className="rounded-lg border border-zinc-800"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Evaluate Iteratively
              </h3>
              <p className="text-zinc-400">
                Rigorously test prompts before deploying, with the help of human
                and AI graders. Compare models, run regression tests, and ensure
                quality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="text-2xl font-semibold text-white mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-zinc-400">Uptime guarantee</div>
                </div>
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="text-2xl font-semibold text-white mb-1">
                    &lt;100ms
                  </div>
                  <div className="text-sm text-zinc-400">Average latency</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
              <Image
                src="/evaluation.png"
                alt="Evaluation Dashboard"
                width={600}
                height={400}
                className="rounded-lg border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Case Studies Section */}
      <Container>
        <div className="py-24 border-t border-zinc-800">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Trusted by innovative teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-8 w-8">
                  <Image
                    src="/logos/company1.svg"
                    alt="Company 1"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    20x Faster Prompt Development
                  </h3>
                  <p className="text-sm text-zinc-400">AI Company</p>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                &quot;PromptLens has transformed how we develop and test
                prompts. What used to take weeks now takes hours.&quot;
              </p>
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white p-0"
                asChild
              >
                <Link href="/case-studies/1" className="flex items-center">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="p-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-8 w-8">
                  <Image
                    src="/logos/company2.svg"
                    alt="Company 2"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Streamlined Collaboration
                  </h3>
                  <p className="text-sm text-zinc-400">Tech Startup</p>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                &quot;The version control and collaboration features have made
                it possible for our entire team to work together
                effectively.&quot;
              </p>
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white p-0"
                asChild
              >
                <Link href="/case-studies/2" className="flex items-center">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <SignedOut>
        <Container>
          <div className="flex flex-col items-center text-center py-24 border-t border-zinc-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to level up your prompt engineering?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              Join the waitlist to be among the first to experience PromptLens.
            </p>
            <Button
              size="lg"
              className="text-lg bg-white text-black hover:bg-zinc-200"
              onClick={() => openWaitlist()}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </SignedOut>
    </main>
  );
}
