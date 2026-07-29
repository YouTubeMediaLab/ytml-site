import Hero from "@/components/sections/Hero";
import Operator from "@/components/sections/Operator";
import StudentResults from "@/components/sections/StudentResults";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import AIWorkflow from "@/components/sections/AIWorkflow";
import Courses from "@/components/sections/Courses";
import Curriculum from "@/components/sections/Curriculum";
import Support from "@/components/sections/Support";
import Pricing from "@/components/sections/Pricing";
import Flow from "@/components/sections/Flow";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* 証拠 → 声 → 説明 の順。誰の成果かが混ざらないよう、運営者と受講生は分ける */}
      <Operator />
      <StudentResults />
      <Testimonials />
      <About />
      <AIWorkflow />
      <Courses />
      <Curriculum />
      <Support />
      <Pricing />
      <Flow />
      <FAQ />
      <ContactCTA />
    </>
  );
}
