import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { AI_WORKFLOW } from "@/config/site";

/**
 * AI活用による制作時間の短縮。
 *
 * 棒の長さだけだと「何倍違うか」を読者に暗算させることになるため、
 * 1マス＝1時間のブロックで数えられるようにし、倍率も文字で出す。
 * 数値はどちらも運営者本人の実測値なので、注記を必ず添える。
 */
export default function AIWorkflow() {
  const { before, after, scaled } = AI_WORKFLOW;

  return (
    <section id="ai" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="section-subtitle">AI WORKFLOW</p>
        <h2 className="section-title jp-tight">
          {AI_WORKFLOW.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="title-divider" />

        <p className="jp-tight mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-gray-600 md:text-base">
          {AI_WORKFLOW.lead}
        </p>

        {/* 制作時間の比較 */}
        <Reveal>
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-9">
            <div className="mb-7 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs font-bold tracking-[0.14em] text-gray-500 md:text-sm">
                動画1本あたりの制作時間
              </p>
              <p className="text-[11px] font-medium text-gray-400">
                1マス＝1時間
              </p>
            </div>

            <TimeRow
              label={before.label}
              value={before.value}
              min={before.min}
              max={before.max}
              tone="before"
            />

            {/* 変化の宣言 */}
            <div className="my-6 flex items-center gap-3 md:my-7 md:gap-4">
              <span className="h-px flex-1 bg-gray-200" />
              <span className="flex items-center gap-2 rounded-full bg-gradient-to-b from-primary to-primary-dark px-4 py-2 text-white shadow-[0_8px_20px_-8px_rgba(196,18,48,0.8)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span className="text-sm font-black md:text-base">
                  AIに任せると 約
                  <span className="mx-0.5 text-[1.35em] leading-none">1/10</span>
                </span>
              </span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            <TimeRow
              label={after.label}
              value={after.value}
              min={after.min}
              max={after.max}
              tone="after"
            />

            {/* 本数に置き換えた比較 */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-2xl bg-gray-50 px-5 py-4 text-center">
              <span className="text-xs font-bold text-gray-500 md:text-sm">
                {scaled.count}本つくるなら
              </span>
              <span className="text-sm font-bold text-gray-400 line-through decoration-primary decoration-2 md:text-base">
                {scaled.before}
              </span>
              <span className="text-primary" aria-hidden="true">
                →
              </span>
              <span className="text-lg font-black text-primary md:text-xl">
                {scaled.after}
              </span>
            </div>

            <p className="mt-5 text-[11px] leading-5 text-gray-500">
              ※ {AI_WORKFLOW.note}
            </p>
          </div>
        </Reveal>

        {/* 工程ごとの担当ツール */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-base font-black text-gray-900 md:text-lg">
            どの工程を、どのツールに任せているか
          </h3>

          <div className="grid gap-3 md:grid-cols-5">
            {AI_WORKFLOW.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-[11px] font-black tracking-widest text-gray-300">
                    {step.step}
                  </span>
                  <h4 className="jp-tight mt-1 text-sm font-black leading-snug text-gray-900">
                    {step.phase}
                  </h4>
                  <span className="mt-2.5 flex flex-wrap gap-1.5">
                    {step.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-gray-800 ring-1 ring-gray-200"
                      >
                        <Image
                          src={tool.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="h-4 w-4 object-contain"
                        />
                        {tool.name}
                      </span>
                    ))}
                  </span>
                  <ul className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
                    {step.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-1.5 text-xs leading-5 text-gray-600"
                      >
                        <span className="mt-[3px] text-primary">・</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 誤解を先に潰す */}
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-primary bg-white">
            <div className="bg-gradient-to-b from-[#e8192f] via-primary to-primary-dark px-6 py-4">
              <p className="jp-tight text-center text-base font-black text-white md:text-lg">
                {AI_WORKFLOW.closing.heading}
              </p>
            </div>
            <div className="space-y-3 p-6 md:p-7">
              {AI_WORKFLOW.closing.body.map((line) => (
                <p key={line} className="text-sm leading-8 text-gray-700">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * 1マス＝1時間のブロックで時間を表す。
 * 「12〜20時間」のような幅のある値は、確実にかかる分を濃く、
 * 振れ幅の分を薄く塗って、範囲そのものを見えるようにしている。
 */
function TimeRow({
  label,
  value,
  min,
  max,
  tone,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  tone: "before" | "after";
}) {
  const isBefore = tone === "before";

  return (
    <div>
      <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span
          className={`text-xs font-bold md:text-sm ${
            isBefore ? "text-gray-500" : "text-primary"
          }`}
        >
          {label}
        </span>
        <span
          className={`font-black ${
            isBefore
              ? "text-xl text-gray-400 md:text-2xl"
              : "text-2xl text-primary md:text-3xl"
          }`}
        >
          {value}
        </span>
      </div>

      <div
        className="flex flex-wrap gap-1 md:gap-1.5"
        role="img"
        aria-label={`${label} ${value}`}
      >
        {Array.from({ length: max }, (_, i) => {
          const certain = i < min;
          return (
            <span
              key={i}
              className={`h-6 w-[calc((100%-9*0.25rem)/10)] rounded md:h-7 md:w-[calc((100%-19*0.375rem)/20)] ${
                isBefore
                  ? certain
                    ? "bg-gray-500"
                    : "bg-gray-300"
                  : certain
                    ? "bg-primary"
                    : "bg-primary/35"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
