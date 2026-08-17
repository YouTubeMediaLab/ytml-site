import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { EvidenceCarousel } from "@/components/EvidenceCarousel";
import { STUDENT_EVIDENCE, STUDENT_SNS_WORKS } from "@/config/evidence";
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

        {/* 実際に運営しているSNSアカウント。YouTube以外にも広がっていることを示す */}
        <div className="mt-14">
          <h3 className="jp-tight text-center text-lg font-black text-gray-900 md:text-xl">
            受講生が運営しているSNSアカウント
          </h3>
          <p className="jp-tight mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-gray-600">
            顔を出さずに運営している実際の投稿です。
            <br className="hidden md:block" />
            投稿内容が特定されないよう、再生数以外はモザイクをかけています。
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {STUDENT_SNS_WORKS.map((work, i) => (
              <Reveal key={work.src} delay={i * 70} className="h-full">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between gap-2 border-b border-gray-100 px-4 py-3">
                    <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-black text-primary ring-1 ring-primary/15">
                      {work.person}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500">
                      {work.platform}
                    </span>
                  </div>

                  {/* SP：1枚ずつ並ぶので幅いっぱいに見せる
                      PC：3枚横並びになるため、高さを揃えて上端を合わせる */}
                  <div className="flex justify-center bg-gray-50 p-3 md:h-[330px] md:items-start md:overflow-hidden">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      width={work.width}
                      height={work.height}
                      className="w-full rounded-lg md:h-full md:w-auto md:object-cover md:object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <figcaption className="border-t border-gray-100 px-4 py-3.5">
                    <p className="jp-tight text-sm font-bold text-gray-900">
                      {work.genre}
                    </p>
                    <p className="mt-1.5 text-xs text-gray-500">
                      最も伸びた投稿{" "}
                      <span className="font-black text-primary">{work.best}</span>
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="jp-tight mt-5 text-center text-[11px] leading-5 text-gray-500">
            ※ 掲載しているのは再生数です。収益額ではありません。
          </p>
        </div>

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
