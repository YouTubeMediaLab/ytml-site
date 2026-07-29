import Link from "next/link";
import Image from "next/image";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { OFFER } from "@/config/offer";

const labels = [
  "顔出し不要",
  "声出し不要",
  "撮影機材不要",
  "未経験歓迎",
  "完全在宅",
];

const highlights = [
  { value: "1か月半", label: "運営者が初挑戦で収益化" },
  { value: "20ch", label: "現在の運営チャンネル数" },
  { value: "100名以上", label: "これまでの指導実績" },
];

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
      <div className="relative mx-auto flex w-full max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <div className="w-full md:ml-auto md:max-w-[520px]">
          {/* 限定バッジ */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-black tracking-[0.08em] text-primary md:text-xs">
              {OFFER.startLabel}〜 先着{OFFER.capacity}名限定価格で受付中
            </span>
          </div>

          {/* メインヘッドライン */}
          <h1
            className="jp-tight mb-5 font-black leading-[1.16] tracking-tight"
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
          <div className="jp-tight mb-7 space-y-0.5 text-sm font-medium leading-8 text-gray-700 md:text-base md:leading-9">
            <p>チャンネル設計、企画、動画編集、</p>
            <p>投稿、分析、改善、外注化まで。</p>
            <p>知識だけで終わらせず、</p>
            <p>
              <strong className="font-bold text-gray-900">
                自分で運営できる状態まで
              </strong>
              学べます。
            </p>
          </div>

          {/* タグ */}
          <div className="mb-7 flex flex-wrap gap-2">
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

          {/* CTA */}
          <div className="max-w-md">
            <CTAButton />
            <CTANote className="mt-3" />
          </div>

          {/* 実績サマリー */}
          <div className="mt-8 grid max-w-md grid-cols-3 gap-2">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="gold-card rounded-xl border px-2 py-3 text-center"
              >
                <p className="gold-value whitespace-nowrap text-base font-black leading-none md:text-lg">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[10px] font-bold leading-4 text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-2.5 max-w-md text-[10px] leading-4 text-gray-500">
            ※ 運営者本人の実績です。受講後の成果を保証するものではありません。
          </p>

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
