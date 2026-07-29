import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { EvidenceCarousel } from "@/components/EvidenceCarousel";
import { OPERATOR_EVIDENCE } from "@/config/evidence";
import { DISCLAIMERS, OPERATOR, OPERATOR_RECORD } from "@/config/site";

/**
 * 運営者の実績。
 * 掲載しているのはすべて運営者本人の結果であり、受講生の成果ではない。
 * 数字の直下に必ず注記を置くこと。
 */
export default function Operator() {
  return (
    <section
      id="operator"
      className="scroll-mt-20 bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-subtitle">OPERATOR</p>
        <h2 className="section-title jp-tight">
          教えているのは、今も現場で運営している人間です。
        </h2>
        <div className="title-divider" />

        <Reveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-red-900/10 ring-1 ring-red-100">
            <div className="grid md:grid-cols-[340px_1fr]">
              <div className="relative min-h-[340px] overflow-hidden bg-primary md:min-h-[440px]">
                <Image
                  src={OPERATOR.photo}
                  alt={`YouTube Media Lab運営者 ${OPERATOR.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20 text-white">
                  <p className="text-xl font-black">{OPERATOR.name}</p>
                  <p className="mt-1 text-[11px] font-bold leading-5 tracking-wider text-white/80">
                    {OPERATOR.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-11">
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary">
                  PROFILE
                </p>
                <h3 className="jp-tight mb-5 text-xl font-black leading-snug text-gray-900 md:text-2xl">
                  {OPERATOR.lead}
                </h3>
                <p className="text-sm leading-8 text-gray-600 md:text-base">
                  {OPERATOR.body}
                </p>
                <div className="mt-6 rounded-2xl border-l-4 border-primary bg-red-50 p-5">
                  <p className="text-sm font-bold leading-7 text-gray-800">
                    {OPERATOR.quote.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* 実績 */}
            <div className="gold-panel border-t border-[#e2b84d] p-6 md:p-10">
              <div className="mb-7 text-center">
                <p className="text-[11px] font-black tracking-[0.2em] text-[#a97809]">
                  TRACK RECORD
                </p>
                <h3 className="mt-2 text-xl font-black text-gray-900 md:text-2xl">
                  数字で見る、運営者の実績
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {OPERATOR_RECORD.map((item, i) => (
                  <Reveal key={item.label} delay={i * 60}>
                    <div className="gold-card flex h-full flex-col items-center justify-start rounded-2xl border px-3 py-5 text-center">
                      <p className="gold-value whitespace-nowrap text-2xl font-black tracking-tight md:text-[1.7rem]">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[11px] font-bold leading-5 text-gray-800 md:text-xs">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-[10px] leading-4 text-gray-500">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* 運営チャンネルの実物 */}
              <div className="mt-9 border-t border-[#e2b84d]/40 pt-8">
                <div className="mb-5 text-center">
                  <p className="text-[11px] font-black tracking-[0.2em] text-[#a97809]">
                    OPERATOR CHANNELS
                  </p>
                  <h4 className="jp-tight mt-2 text-base font-black text-gray-900 md:text-lg">
                    運営者が運営するチャンネルの一部
                  </h4>
                  <p className="jp-tight mx-auto mt-2 max-w-xl text-[11px] leading-5 text-gray-500">
                    20チャンネルのうち8チャンネルの画面です。非属人で運営しているため、
                    チャンネル名は伏せています。
                  </p>
                </div>

                <EvidenceCarousel
                  items={OPERATOR_EVIDENCE}
                  heightClass="h-[168px] md:h-[212px]"
                  tone="gold"
                />
              </div>

              <p className="mt-7 text-center text-[11px] leading-5 text-gray-500">
                ※ {DISCLAIMERS.operator}
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
