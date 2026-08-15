import { Reveal } from "@/components/Reveal";
import { EARNING_PATHS } from "@/config/site";

/**
 * SNSを売上につなげる4つの設計。
 *
 * このスクールが何を教えるのかを、ここ1枚で分かるようにしている。
 * 段ごとに「収入の性質」を色分けし、下へ進むほど資産性が上がる並びにした。
 * 詳細（数字の根拠）は本文より小さく置き、まず流れだけ読めるようにしている。
 */
export default function EarningPaths() {
  return (
    <section id="paths" className="scroll-mt-20 bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-subtitle">SALES SYSTEM</p>
        <h2 className="section-title jp-tight">
          {EARNING_PATHS.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="title-divider" />

        <p className="jp-tight mx-auto mb-12 max-w-2xl text-center text-sm leading-8 text-gray-600 md:text-base">
          {EARNING_PATHS.lead}
        </p>

        <ol className="relative space-y-4">
          {/* 段をつなぐ縦線。最後の段では止める */}
          <span
            aria-hidden="true"
            className="absolute bottom-16 left-[27px] top-16 hidden w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent md:block"
          />

          {EARNING_PATHS.steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 60}>
              <li className="relative flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:gap-6 md:p-7">
                {/* 番号 */}
                <span className="relative z-10 flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#e8192f] to-primary-dark text-white shadow-[0_4px_10px_-3px_rgba(196,18,48,0.6)] md:h-14 md:w-14">
                  <span className="text-[0.95rem] font-black leading-none md:text-lg">
                    {step.no}
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[10px] font-black tracking-wide text-primary ring-1 ring-primary/15 md:text-[11px]">
                      {step.label}
                    </span>
                    <h3 className="jp-tight text-[1.15rem] font-black leading-tight text-gray-900 md:text-[1.35rem]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="jp-tight mt-2.5 text-sm leading-[1.9] text-gray-700 md:text-[0.95rem]">
                    {step.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-3.5">
                    {step.facts.map((fact) => (
                      <li
                        key={fact}
                        className="jp-tight flex items-start gap-2 text-xs leading-[1.7] text-gray-500 md:text-[0.8rem]"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <p className="jp-tight mt-3 text-[11px] leading-5 text-gray-400">
                    ※ {step.note}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
