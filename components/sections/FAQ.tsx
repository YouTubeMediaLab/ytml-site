"use client";

import { useState } from "react";

const faqs = [
  {
    q: "未経験でも受講できますか？",
    a: "はい、受講できます。動画編集コースはAdobe Premiere Proを触ったことがない状態から始められる内容です。パソコンの基本操作ができれば問題ありません。",
  },
  {
    q: "Adobe Premiere Proのソフト代は別途必要ですか？",
    a: "はい、Adobe Premiere ProはAdobe Creative Cloudのサブスクリプション（月額費用）でご利用いただけます。料金や契約方法については、ご入会前の個別説明の際に詳しくご案内します。",
  },
  {
    q: "顔出しは必要ですか？",
    a: "非属人YouTubeコースは、顔出し不要のチャンネル運営を前提としたカリキュラムです。ナレーション（声）のみ、またはAI音声を使ったスタイルで制作できます。顔出しなしで活動したい方に向いています。",
  },
  {
    q: "撮影機材は必要ですか？",
    a: "非属人YouTubeコースでは、カメラや照明などの撮影機材は必要ありません。PC（画面録画＋ナレーション）があれば動画制作が可能です。",
  },
  {
    q: "忙しくても続けられますか？",
    a: "動画教材はいつでも視聴可能なため、隙間時間を活用して進めることができます。ただし、一定の学習時間を確保できる環境を推奨しています。",
  },
  {
    q: "コース受講後に収益化・副業収入を得られますか？",
    a: "受講後の収益化・副業収入・案件獲得についての保証は一切行っておりません。本スクールはスキルの習得を目的とした教育サービスです。受講成果には個人差があります。",
  },
  {
    q: "分割払いはできますか？",
    a: "はい、分割払いにも対応しています。詳細なお支払い方法については、個別説明の際にご確認ください。",
  },
  {
    q: "どのコースを選べばよいかわかりません。",
    a: "まずは無料の個別相談にお申し込みください。現在の状況やご要望をお聞きした上で、最適なコースをご提案します。",
  },
  {
    q: "受講前にキャンセルすることはできますか？",
    a: "お申し込み後8日以内かつ教材視聴前のキャンセルに限り、返金に対応しております。詳細は特定商取引法に基づく表記をご確認ください。",
  },
  {
    q: "法人・事業者での受講は可能ですか？",
    a: "はい、個人事業主・法人としてのご受講も承っております。事業でのYouTube活用を学びたい方もお気軽にご相談ください。",
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

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            その他のご質問はお問い合わせフォームよりお気軽にどうぞ。
          </p>
          <a href="/contact" className="btn-outline inline-block">
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}
