import { Reveal } from "@/components/Reveal";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { ROADMAP } from "@/config/site";

/**
 * 3か月ロードマップ。
 * 「で、自分は何をすればいいのか」に答える場所。
 * 期間は目標であって保証ではないため、根拠と注意書きを必ずセットで置く。
 */
export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="section-subtitle">ROADMAP</p>
        <h2 className="section-title jp-tight">{ROADMAP.heading}</h2>
        <div className="title-divider" />

        <p className="jp-tight mx-auto mb-11 max-w-2xl text-center text-sm leading-8 text-gray-600 md:text-base">
          {ROADMAP.lead}
        </p>

        <div className="grid gap-3 md:grid-cols-4 md:gap-4">
          {ROADMAP.steps.map((step, i) => (
            <Reveal key={step.period} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="inline-flex w-fit rounded-full bg-gray-900 px-3 py-1 text-[11px] font-black text-white">
                  {step.period}
                </span>
                <h3 className="jp-tight mt-3 text-[0.95rem] font-black leading-snug text-gray-900">
                  {step.title}
                </h3>
                <p className="jp-tight mt-2 text-xs leading-[1.8] text-gray-600">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border-l-4 border-primary bg-white p-5 md:p-6">
          <p className="jp-tight text-sm leading-8 text-gray-700">
            {ROADMAP.basis}
          </p>
          <p className="jp-tight mt-3 border-t border-gray-100 pt-3 text-[11px] leading-6 text-gray-500">
            ※ {ROADMAP.caution}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <CTAButton />
          <CTANote className="mt-3" />
        </div>
      </div>
    </section>
  );
}
