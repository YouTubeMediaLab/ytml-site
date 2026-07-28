"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // LP は独自のヘッダー・追従CTAを持つため、共通の枠は被せない
  const isLandingPage = pathname?.startsWith("/lp/") ?? false;

  if (isLandingPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="has-sticky-cta">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
