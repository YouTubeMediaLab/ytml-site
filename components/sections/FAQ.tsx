"use client";

import { useState } from "react";
import { COURSES, OFFER, man, withTax } from "@/config/offer";

const half = COURSES.youtubeHalf;
const year = COURSES.youtubeYear;

const faqs = [
  {
    q: `先着${OFFER.capacity}名限定価格とは何ですか？`,
    a: `非属人YouTubeコースを本格展開する前の、${OFFER.startLabel}から先着${OFFER.capacity}名限定の価格です。${OFFER.capacity}名に達した時点で、半年コースは${man(withTax(half.currentPriceExTax))}→${man(withTax(half.futurePriceExTax))}、1年コースは${man(withTax(year.currentPriceExTax))}→${man(withTax(year.futurePriceExTax))}（いずれも税込）へ改定します。動画編集コースの価格は据え置きです。現在の受付状況は個別相談の際にお伝えします。`,
  },
  {
    q: "AIを使ったことがなくても大丈夫ですか？",
    a: "はい。ChatGPT・Claude・ElevenLabs・Vrewなど、どの工程でどのツールにどんな指示を出すかを、手順ごとにお伝えします。ツールはいずれも無料版から始められます（利用料はご自身の負担となります）。",
  },
  {
    q: "作業時間を確保できるか不安です。",
    a: "決まったノルマはありません。AIを活用すると動画1本あたり1〜2時間程度まで短縮できる場合があります（運営者本人の実測値であり、ジャンルや習熟度によって変わります）。個別相談で、現在の生活の中で確保できる時間を確認し、無理のない進め方を一緒に整理します。",
  },
  {
    q: "未経験でも受講できますか？",
    a: "はい、受講できます。動画編集コースはAdobe Premiere Proを触ったことがない状態から始められる内容です。パソコンの基本操作ができれば問題ありません。個人事業主・法人としてのご受講も承っています。",
  },
  {
    q: "顔出しや撮影機材は必要ですか？",
    a: "どちらも不要です。非属人YouTubeコースは顔出しを前提としないカリキュラムで、ナレーションはAI音声でも制作できます。カメラや照明などの撮影機材も必要ありません。パソコンがあれば制作・運営を進められます。",
  },
  {
    q: "忙しくても続けられますか？",
    a: "動画教材はいつでも視聴できるため、隙間時間を活用して進められます。決まったノルマもありません。ただし、一定の学習時間を確保できる環境は推奨しています。個別相談で、今の生活の中で無理のない進め方を一緒に整理します。",
  },
  {
    q: "コース受講後に収益化・副業収入を得られますか？",
    a: "受講後の収益化・副業収入・案件獲得についての保証は一切行っておりません。本スクールはスキルの習得を目的とした教育サービスです。受講成果には個人差があります。",
  },
  {
    q: "支払い方法と、キャンセルについて教えてください。",
    a: "銀行振込・クレジットカード・分割払いに対応しています。返金は、お申し込み後8日以内かつ教材視聴前のキャンセルに限り対応いたします。詳細は特定商取引法に基づく表記をご確認ください。なお、Adobe Premiere Proや制作で使うAIツールの利用料は受講料に含まれません。",
  },
  {
    q: "どのコースを選べばよいかわかりません。",
    a: "まずは無料の個別相談にお申し込みください。現在の状況やご要望をお聞きした上で、合っているコースをご提案します。適していないと判断した場合は、その旨をお伝えします。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
            Q
          </span>
          <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
            {q}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-3 pb-5">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
            A
          </span>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">FAQ</p>
        <h2 className="section-title">よくある質問</h2>
        <div className="title-divider" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8 divide-y divide-gray-100">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          その他のご質問は、次の無料個別相談でお気軽にどうぞ。
        </p>
      </div>
    </section>
  );
}
