import Link from "next/link";
import Image from "next/image";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { OFFER } from "@/config/offer";
import { HERO_POINTS } from "@/config/site";

// 「顔も、声も」は見出しで、「未経験歓迎」は3つの強みで言っているため、ここでは繰り返さない
const labels = ["顔出し不要", "撮影機材不要", "完全在宅"];

const ICONS: Record<string, string> = {
  infinity:
    "M18.178 8c-2.34 0-3.578 2.06-4.178 4-.6 1.94-1.838 4-4.178 4a4 4 0 010-8c2.34 0 3.578 2.06 4.178 4 .6 1.94 1.838 4 4.178 4a4 4 0 000-8z",
  person:
    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  star: "M11.48 3.5a.56.56 0 011.04 0l2.13 4.31 4.76.7c.46.06.64.63.31.95l-3.44 3.35.81 4.74a.56.56 0 01-.81.59L12 15.9l-4.26 2.24a.56.56 0 01-.81-.59l.81-4.74-3.44-3.35a.56.56 0 01.31-.95l4.76-.7L11.48 3.5z",
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden pt-24 md:min-h-[760px] md:pt-28">
      {/* ── 背景画像 ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="YouTube Media Lab - 在宅で動画スキルを学ぶ"
          fill
          // SP：縦長に切り取られるため、顔が画面に入る位置へ寄せる
          // PC：女性の顔が左に来るよう左寄りに配置
          className="object-cover object-[34%_18%] md:object-[20%_center]"
          priority
          sizes="100vw"
        />
        {/* PC：右側だけ白くフェード → テキストを右に置く */}
        <div className="absolute inset-0 hidden bg-gradient-to-l from-white to-transparent md:block" />
        {/* SP：全面に白をかぶせる。表情がわかる程度に写真を残しつつ、
            本文が乗る中段だけ少し濃くして可読性を確保する */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.82] via-white/[0.89] to-white/[0.84] md:hidden" />
      </div>

      {/* うっすらとした赤の差し色 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      {/* ── コンテンツ（右寄せ） ── */}
      <div className="relative mx-auto flex w-full max-w-6xl px-5 py-14 md:px-10 md:py-16">
        <div className="w-full md:ml-auto md:max-w-[540px]">
          {/* 限定バッジ */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-black tracking-[0.08em] text-primary md:text-xs">
              {OFFER.startLabel}〜 先着{OFFER.capacity}名限定価格で受付中
            </span>
          </div>

          {/* メインヘッドライン */}
          <h1
            className="jp-tight mb-4 font-black leading-[1.16] tracking-tight"
            style={{ textShadow: "0 1px 10px rgba(255,255,255,0.85)" }}
          >
            <span className="block whitespace-nowrap text-[1.85rem] text-gray-900 sm:text-[2.6rem] md:text-[2.9rem]">
              顔も、声も、名前も
            </span>
            <span className="block whitespace-nowrap text-[1.85rem] text-gray-900 sm:text-[2.6rem] md:text-[2.9rem]">
              出さずに。
            </span>
            <span className="mt-2 block whitespace-nowrap text-[1.7rem] text-primary sm:text-[2.4rem] md:text-[2.6rem]">
              YouTubeを、
            </span>
            <span className="relative inline-block whitespace-nowrap text-[1.7rem] text-primary sm:text-[2.4rem] md:text-[2.6rem]">
              もう一つの収入源へ。
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-[0.6deg] rounded-full bg-[#ffd84d]/70"
              />
            </span>
          </h1>

          {/* 説明文 */}
          <div className="jp-tight mb-5 space-y-0.5 text-sm font-medium leading-8 text-gray-700 md:text-base md:leading-9">
            <p>動画編集、チャンネル運営、外注化、</p>
            <p>そしてマーケティングとセールスまで。</p>
            <p>身につけた型は、他のSNSにも</p>
            <p>
              <strong className="font-bold text-gray-900">匿名のまま</strong>
              横展開できます。
            </p>
          </div>

          {/* タグ */}
          <div className="mb-5 flex flex-wrap gap-2">
            {labels.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-gray-800 shadow-sm md:text-xs"
              >
                <span className="mr-1 text-primary">✓</span>
                {tag}
              </span>
            ))}
          </div>

          {/* 3つの強み。数字の実績は直後の運営者セクションで見せるため、ここでは重ねない
              ラベル列の幅を固定して、3行の見出しが縦に揃うようにしている */}
          <ul className="mb-6 max-w-md space-y-2.5 md:max-w-[540px]">
            {HERO_POINTS.map((point) => (
              <li
                key={point.value}
                className="flex items-stretch gap-3 rounded-xl border-2 border-gray-100 bg-white px-3 py-3 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.18)] ring-1 ring-black/5 md:gap-3.5 md:px-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full bg-gradient-to-b from-[#e8192f] to-primary-dark text-white shadow-[0_4px_10px_-3px_rgba(196,18,48,0.65)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={ICONS[point.icon]}
                    />
                  </svg>
                </span>

                {/* SP：見出しの下に説明を敷いて幅を確保する
                    PC：ラベル列の幅を固定し、縦線で説明と分ける */}
                <span className="min-w-0 flex-1 md:flex md:items-stretch md:gap-3.5">
                  <span className="flex flex-col justify-center md:w-[108px] md:shrink-0">
                    <span className="text-[9px] font-bold leading-none tracking-[0.08em] text-gray-400 md:text-[10px]">
                      {point.label}
                    </span>
                    <span className="jp-tight mt-1 whitespace-nowrap text-[1.02rem] font-black leading-tight tracking-tight text-gray-900 md:text-[1.1rem]">
                      {point.value}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="hidden w-px shrink-0 bg-gray-200 md:block"
                  />

                  <span className="jp-tight mt-1.5 block text-[11px] leading-[1.6] text-gray-600 md:mt-0 md:flex md:items-center md:text-xs">
                    {point.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="max-w-md">
            <CTAButton />
            <CTANote className="mt-3" />
          </div>

          <Link
            href="/#courses"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 underline underline-offset-4 transition-colors hover:text-primary"
          >
            まずはコース内容を見る
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
