"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openWaitlist } = useClerk();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-white">
              PromptLens
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white hover:bg-transparent transition-colors"
                asChild
              >
                <SignInButton mode="modal" />
              </Button>
              <Button
                className="bg-white text-black hover:bg-zinc-200"
                onClick={() => openWaitlist()}
              >
                Join Waitlist
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white hover:bg-transparent transition-colors"
                asChild
              >
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-black">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/features"
                className="block px-3 py-2 text-base text-zinc-400 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/docs"
                className="block px-3 py-2 text-base text-zinc-400 hover:text-white"
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base text-zinc-400 hover:text-white"
              >
                Pricing
              </Link>
            </div>
            <div className="border-t border-zinc-800 pb-3 pt-4 px-2">
              <SignedOut>
                <Button
                  variant="ghost"
                  className="w-full text-zinc-400 hover:text-white hover:bg-transparent transition-colors mb-2"
                  asChild
                >
                  <SignInButton mode="modal" />
                </Button>
                <Button
                  className="w-full bg-white text-black hover:bg-zinc-200"
                  onClick={() => openWaitlist()}
                >
                  Join Waitlist
                </Button>
              </SignedOut>
              <SignedIn>
                <Button
                  variant="ghost"
                  className="w-full text-zinc-400 hover:text-white hover:bg-transparent transition-colors mb-2"
                  asChild
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <div className="flex justify-center">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
