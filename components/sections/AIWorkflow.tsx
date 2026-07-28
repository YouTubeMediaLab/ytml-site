import { Reveal } from "@/components/Reveal";
import { AI_WORKFLOW } from "@/config/site";

/**
 * AI活用による制作時間の短縮。
 * 比較する数字はどちらも運営者本人の実測値なので、注記を必ず添える。
 */
export default function AIWorkflow() {
  const { before, after } = AI_WORKFLOW;
  // 棒の長さは実測時間の比率そのまま。短い方が潰れないよう下限を設ける
  const afterWidth = Math.max((after.hours / before.hours) * 100, 12);

  return (
    <section id="ai" className="scroll-mt-20 bg-white px-4 py-16 md:py-24">
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

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-gray-600 md:text-base">
          {AI_WORKFLOW.lead}
        </p>

        {/* 制作時間の比較 */}
        <Reveal>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-9">
            <p className="mb-6 text-center text-xs font-bold tracking-[0.16em] text-gray-500">
              動画1本あたりの制作時間
            </p>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-xs font-bold text-gray-500 md:text-sm">
                    {before.label}
                  </span>
                  <span className="text-lg font-black text-gray-400 md:text-xl">
                    {before.value}
                  </span>
                </div>
                <div className="h-5 w-full rounded-full bg-gray-300/70" />
              </div>

              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-xs font-bold text-primary md:text-sm">
                    {after.label}
                  </span>
                  <span className="text-2xl font-black text-primary md:text-3xl">
                    {after.value}
                  </span>
                </div>
                <div className="h-5 w-full rounded-full bg-gray-200">
                  <div
                    className="h-5 rounded-full bg-gradient-to-r from-primary to-[#e8192f] shadow-[0_4px_14px_-4px_rgba(196,18,48,0.7)]"
                    style={{ width: `${afterWidth}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-5 text-[11px] leading-5 text-gray-500">
              ※ {AI_WORKFLOW.note}
            </p>
          </div>
        </Reveal>

        {/* 工程ごとの担当ツール */}
        <div className="mt-10">
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
                  <span className="mt-2.5 inline-flex w-fit rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-bold text-primary ring-1 ring-primary/15">
                    {step.tool}
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

        <div className="mt-8 rounded-2xl border-l-4 border-primary bg-red-50/60 p-6">
          <p className="text-sm leading-8 text-gray-700">
            {AI_WORKFLOW.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
