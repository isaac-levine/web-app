import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptLens - Supercharge Your Prompt Engineering",
  description:
    "PromptLens helps you write, test, and optimize your AI prompts. Collaborate with your team and track prompt performance over time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      waitlistUrl="https://promptlens.clerk.com/waitlist"
    >
      <html lang="en" className="bg-black text-white">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
