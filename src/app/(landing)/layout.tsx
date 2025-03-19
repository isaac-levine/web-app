import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
