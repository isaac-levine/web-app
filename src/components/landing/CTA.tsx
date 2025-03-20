import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignedOut, useClerk } from "@clerk/nextjs";

export function CTA() {
  const { openWaitlist } = useClerk();

  return (
    <SignedOut>
      <div className="flex flex-col items-center text-center py-24 border-t border-zinc-800">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to optimize your AI features?
        </h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          Join the waitlist to be among the first to experience our A/B testing
          platform.
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
    </SignedOut>
  );
}
