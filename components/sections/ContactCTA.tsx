import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { CONSULTATION, DISCLAIMERS } from "@/config/site";
import { OFFER } from "@/config/offer";

const clarifies = [
  "どのSNSから始めるのが合っているか",
  "顔を出さずにどこまで進められるか",
  "現実的にどの程度の作業時間が必要か",
  "商品がない状態から、何を用意するか",
  "今の状況から、何を最初に始めるか",
];

const steps = [
  "ボタンから公式LINEを追加する",
  "届いたご案内から希望日時を選ぶ",
  "ZoomまたはLINE通話で個別相談",
];

export default function ContactCTA() {
  return (
    <section
      id="consultation"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-primary via-[#0a63bc] to-[#064a8f] px-4 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ffd84d]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="text-white md:sticky md:top-28">
          <p className="mb-3 inline-block rounded-full bg-[#ffd84d] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-gray-900">
            FREE CONSULTATION
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            個別相談について
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#ffd84d]" />
          <p className="jp-tight mt-6 text-lg font-bold leading-snug md:text-2xl">
            スクールの説明を聞く場ではなく、
            <br />
            自分の進め方を整理する場です。
          </p>
          <p className="mt-5 text-sm leading-8 text-white/85 md:text-base">
            個別相談は、購入を決める場ではありません。YouTubeに限らず、Instagram・Threads・X・TikTok・noteのうち、今のあなたに合う媒体はどれかというところから一緒に整理します。適していないと判断した場合は、その旨をお伝えします。
          </p>

          <ul className="mt-7 space-y-2.5 text-sm font-bold text-white">
            {clarifies.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-[#ffd84d]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-9">
          <p className="mb-2 text-[11px] font-black tracking-[0.16em] text-primary">
            RESERVATION
          </p>
          <h3 className="jp-tight text-xl font-black leading-snug text-gray-900 md:text-2xl">
            公式LINEから、
            <br />
            3ステップで予約できます。
          </h3>

          <ol className="my-7 space-y-3">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-xl bg-gray-50 p-4"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ffd84d] text-sm font-black text-gray-900">
                  {index + 1}
                </span>
                <span className="text-sm font-bold leading-6 text-gray-800">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-primary/20 bg-sky-50 px-4 py-3">
            <p className="text-center text-xs font-bold leading-6 text-primary-dark">
              現在の価格でご案内できるのは先着{OFFER.capacity}名までです。
            </p>
          </div>

          <div className="mt-5">
            <CTAButton />
          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-gray-500">
            {CONSULTATION.methods}・{CONSULTATION.duration}／
            {CONSULTATION.note}
            <br />
            ボタンを押すとSNS Media Labの公式LINEへ移動します。
          </p>

          <p className="mt-5 border-t border-gray-100 pt-4 text-[10px] leading-5 text-gray-400">
            ※ {DISCLAIMERS.income}
          </p>

          <p className="mt-3 text-center">
            <Link
              href="/contact"
              className="text-[11px] text-gray-500 underline underline-offset-4 transition-colors hover:text-primary"
            >
              LINEを使わずメールで問い合わせる
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
