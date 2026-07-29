import { Reveal } from "@/components/Reveal";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { EvidenceCarousel } from "@/components/EvidenceCarousel";
import { STUDENT_EVIDENCE } from "@/config/evidence";
import { DISCLAIMERS } from "@/config/site";

/**
 * 受講生の実績。
 *
 * 運営者の実績（Operator）とは必ず別セクションにする。
 * 同じ枠に混ぜると「誰の成果か」が読み取れなくなり、景表法上の問題になる。
 */
export default function StudentResults() {
  return (
    <section
      id="results"
      className="scroll-mt-20 bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-subtitle">STUDENT RESULTS</p>
        <h2 className="section-title jp-tight">
          受講された方から届いた報告です。
        </h2>
        <div className="title-divider" />

        <p className="jp-tight mx-auto mb-9 max-w-2xl text-center text-sm leading-8 text-gray-600 md:text-base">
          いずれも、掲載の許可をいただいた受講生からの実際のご連絡です。
          <br className="hidden md:block" />
          ご本人が特定されないよう、お名前とアイコンは伏せています。
        </p>

        <Reveal>
          <EvidenceCarousel
            items={STUDENT_EVIDENCE}
            heightClass="h-[440px] md:h-[560px]"
          />
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-xs leading-7 text-amber-900">
            ※ {DISCLAIMERS.combined}
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
