import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export function Hero() {
  const { openWaitlist } = useClerk();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-24">
      <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text mb-8">
        A/B Test Your
        <br />
        AI Prompts
      </h1>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
        The complete toolkit for testing, monitoring, and optimizing your LLM
        prompts. Ship better AI features with confidence.
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
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
