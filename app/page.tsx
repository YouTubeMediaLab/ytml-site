import Hero from "@/components/sections/Hero";
import Operator from "@/components/sections/Operator";
import StudentResults from "@/components/sections/StudentResults";
import Testimonials from "@/components/sections/Testimonials";
import EarningPaths from "@/components/sections/EarningPaths";
import AIWorkflow from "@/components/sections/AIWorkflow";
import Roadmap from "@/components/sections/Roadmap";
import Courses from "@/components/sections/Courses";
import Support from "@/components/sections/Support";
import EducationStance from "@/components/sections/EducationStance";
import Pricing from "@/components/sections/Pricing";
import Flow from "@/components/sections/Flow";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

/**
 * 読む順番は「信じられるか → 何を教わるのか → いくらか → どう始めるか」。
 *
 * 証拠を先に置き、次に稼ぎ方の全体像、そのあとで手順と金額へ進む。
 * 同じことを二度言わないよう、セクションごとに役割を1つに絞っている。
 */
export default function Home() {
  return (
    <>
      <Hero />

      {/* 信じられるか */}
      <Operator />
      <StudentResults />
      <Testimonials />

      {/* 何を教わるのか */}
      <EarningPaths />
      <AIWorkflow />
      <Roadmap />

      {/* いくらか */}
      <Courses />
      <Support />
      <EducationStance />
      <Pricing />

      {/* どう始めるか */}
      <Flow />
      <FAQ />
      <ContactCTA />
    </>
  );
}
