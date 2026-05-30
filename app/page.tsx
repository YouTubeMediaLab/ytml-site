import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Reasons from "@/components/sections/Reasons";
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
      <Testimonials />
      <About />
      <Reasons />
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
