"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-semibold">
                PromptLens
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/changelog"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Changelog
            </Link>
            <Link
              href="/pricing"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-zinc-300 hover:text-white">
              Sign in
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-zinc-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/features"
              className="block px-3 py-2 text-zinc-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="block px-3 py-2 text-zinc-300 hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="/changelog"
              className="block px-3 py-2 text-zinc-300 hover:text-white"
            >
              Changelog
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-zinc-300 hover:text-white"
            >
              Pricing
            </Link>
            <div className="pt-4 pb-3 border-t border-zinc-800">
              <Button
                variant="ghost"
                className="w-full text-zinc-300 hover:text-white"
              >
                Sign in
              </Button>
              <Button className="w-full mt-2 bg-white text-black hover:bg-zinc-200">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
