"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Terminal, Zap, GitBranch } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { openWaitlist } = useClerk();

  const handleOpenWaitlist = () => {
    openWaitlist({
      appearance: {
        elements: {
          rootBox: "bg-black",
          card: "bg-zinc-900 border border-zinc-800",
          headerTitle: "text-white",
          headerSubtitle: "text-zinc-400",
          formButtonPrimary: "bg-white text-black hover:bg-zinc-200",
          formFieldInput: "bg-zinc-800 border-zinc-700 text-white",
          formFieldLabel: "text-zinc-400",
          footer: "hidden",
        },
      },
    });
  };

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
          <SignedIn>
            <Button
              size="lg"
              className="text-lg bg-white text-black hover:bg-zinc-200"
              asChild
            >
              <Link href="/dashboard" className="flex items-center">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </SignedIn>
        </div>
      </Container>

      {/* Features Grid */}
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

      {/* CTA Section */}
      <Container>
        <div className="flex flex-col items-center text-center py-24 border-t border-zinc-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to level up your prompt engineering?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
            Join the waitlist to be among the first to experience PromptLens.
          </p>
          <SignedOut>
            <Button
              size="lg"
              className="text-lg bg-white text-black hover:bg-zinc-200"
              onClick={handleOpenWaitlist}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </SignedOut>
        </div>
      </Container>
    </main>
  );
}
