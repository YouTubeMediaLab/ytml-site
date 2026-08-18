import { Reveal } from "@/components/Reveal";
import { CTAButton, CTANote } from "@/components/CTAButton";
import {
  COURSES,
  OFFER,
  PRIVATE_CONSULTING,
  discountPercent,
  man,
  withTax,
  yen,
  type CourseKey,
} from "@/config/offer";

type CourseCard = {
  key: CourseKey;
  num: string;
  badge: string;
  nameMain: string;
  nameNote: string;
  color: string;
  badgeColor: string;
  styleDesc: string;
  features: string[];
  /** 今回内容を追加した項目。カード上で新しさが分かるようにする */
  addedFeatures?: string[];
  recommended: boolean;
};

const cards: CourseCard[] = [
  {
    key: "videoEditing",
    num: "①",
    badge: "BASIC",
    nameMain: "動画編集コース",
    nameNote: "（1年）",
    color: "border-blue-400",
    badgeColor: "bg-blue-500",
    styleDesc: "動画を見て学び、疑問はLINEで質問",
    features: [
      "Adobe Premiere Pro 基礎操作",
      "カット・テロップ・画像挿入",
      "BGM・効果音の挿入",
      "色調補正（Lumetriカラー）",
      "書き出し設定・形式",
      "LINEサポート（無制限）",
      "ZOOMによる個別MT",
    ],
    recommended: false,
  },
  {
    key: "youtubeHalf",
    num: "②",
    badge: "STANDARD",
    nameMain: "非属人YouTubeコース",
    nameNote: "（半年）",
    color: "border-primary",
    badgeColor: "bg-primary",
    styleDesc: "動画を見て学び、疑問はLINEで質問",
    features: [
      "チャンネル設計・コンセプト設計",
      "企画・台本の作り方（AI活用）",
      "AIナレーション・音声生成",
      "サムネイル・タイトル最適化",
      "投稿管理・運用サイクル",
      "収益化の仕組みの理解",
      "LINEサポート（無制限）",
      "ZOOMによる個別MT",
    ],
    recommended: false,
  },
  {
    key: "youtubeYear",
    num: "③",
    badge: "PREMIUM",
    nameMain: "非属人YouTubeコース",
    nameNote: "（1年）",
    color: "border-primary",
    badgeColor: "bg-gray-800",
    styleDesc: "担当者と一緒に商品・SNS・販売導線まで進める",
    features: [
      "動画編集コース 全内容",
      "非属人YouTubeコース 全内容",
      "SNS運用・チャンネル運営の伴走サポート",
      "外注化・チーム構築のノウハウ",
      "Instagram・Threads・Xなどの運用",
      "商品設計・LINE構築・セールス",
      "LINEサポート（無制限）",
      "ZOOM個別MT（優先対応）",
    ],
    // 今回追加した範囲。カード内で目印をつけるために持つ
    addedFeatures: ["Instagram・Threads・Xなどの運用", "商品設計・LINE構築・セールス"],
    recommended: true,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-subtitle">COURSE</p>
        <h2 className="section-title">コース紹介</h2>
        <div className="title-divider" />
        <p className="-mt-4 mb-10 text-center text-sm text-gray-500">
          ※ 全コース、収益化・案件獲得・就職の保証はございません。
        </p>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const course = COURSES[card.key];
            const current = withTax(course.currentPriceExTax);
            const future = withTax(course.futurePriceExTax);
            const percent = discountPercent(course);

            return (
              <Reveal key={card.key} delay={i * 80} className="h-full">
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white ${card.color} ${
                    card.recommended
                      ? "shadow-[0_22px_54px_-26px_rgba(7,130,244,0.7)] ring-2 ring-primary/20"
                      : "shadow-sm"
                  }`}
                >
                  {card.recommended && (
                    <div className="bg-gradient-to-b from-[#3a9bff] via-primary to-primary-dark py-2 text-center text-xs font-bold tracking-wider text-white">
                      ★ 最もご支持いただいているコース
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-4">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl font-black text-gray-300">
                          {card.num}
                        </span>
                        <span
                          className={`inline-block ${card.badgeColor} rounded-full px-3 py-1 text-xs font-bold text-white`}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-black leading-tight text-gray-900">
                        {card.nameMain}
                        <span className="text-base font-bold text-gray-500">
                          {card.nameNote}
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-500">
                        {course.positioning}
                      </p>
                    </div>

                    {/* 学習スタイル */}
                    <div className="mb-4 rounded-xl border border-gray-100 bg-gray-50 p-3">
                      <span
                        className={`text-xs font-black ${
                          card.recommended
                            ? "bg-gray-900 text-white"
                            : "bg-gray-200 text-gray-700"
                        } rounded px-2 py-0.5`}
                      >
                        {course.style}
                      </span>
                      <p className="mt-1.5 text-xs text-gray-500">
                        {card.styleDesc}
                      </p>
                    </div>

                    {/* 価格 */}
                    <div className="mb-5 border-t border-gray-100 pt-4">
                      {course.priceChanges && (
                        <p className="mb-1 flex items-baseline gap-2">
                          <span className="text-[11px] text-gray-400">
                            {OFFER.capacity}名終了後
                          </span>
                          <span className="text-sm font-bold text-gray-400 line-through decoration-primary decoration-2">
                            {yen(future)}
                          </span>
                        </p>
                      )}
                      <div className="mb-1.5 flex flex-wrap items-baseline gap-x-1.5">
                        <span
                          className={`text-3xl font-black ${
                            course.priceChanges ? "text-primary" : "text-gray-900"
                          }`}
                        >
                          {yen(current)}
                        </span>
                        <span className="text-sm text-gray-500">（税込）</span>
                      </div>
                      {course.priceChanges ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
                          先着{OFFER.capacity}名限定 {percent}％OFF
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600">
                          価格改定なし・据え置き
                        </span>
                      )}
                      <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                        <svg
                          className="h-3.5 w-3.5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs font-medium text-gray-600">
                          {course.supportPeriod}サポート
                        </span>
                      </div>
                    </div>

                    <ul className="flex-1 space-y-2.5">
                      {card.features.map((f) => {
                        const isAdded = card.addedFeatures?.includes(f);
                        return (
                          <li key={f} className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-gray-700">
                              {f}
                              {isAdded && (
                                <span className="ml-1.5 rounded bg-[#ffd84d] px-1.5 py-0.5 text-[10px] font-black text-gray-900">
                                  NEW
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ①② と ③ の違い */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <p className="text-center text-sm font-bold text-gray-900 md:text-base">
              ① ② と ③ のサポートスタイルの違い
            </p>
          </div>
          <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg font-black text-gray-400">①②</span>
                <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
                  自主学習型
                </span>
              </div>
              <p className="text-sm leading-7 text-gray-600">
                カリキュラムの動画を
                <strong className="text-gray-800">自分のペースで視聴して学ぶ</strong>
                スタイルです。わからないことはLINEで質問でき、ZOOMで確認しながら進めます。
              </p>
            </div>
            <div className="bg-gray-50/60 p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg font-black text-gray-400">③</span>
                <span className="inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
                  完全伴走型
                </span>
              </div>
              <p className="text-sm leading-7 text-gray-600">
                ①②の内容に加え、担当者が
                <strong className="text-gray-800">
                  商品・SNS・販売導線を一緒に組み立てる
                </strong>
                伴走型サポートが付きます。発信だけで終わらず、提案・販売まで二人三脚で進めます。
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          ※ 料金は税込表示です。非属人YouTubeコースは先着{OFFER.capacity}
          名の受付終了後、それぞれ{man(withTax(COURSES.youtubeHalf.futurePriceExTax))}／
          {man(withTax(COURSES.youtubeYear.futurePriceExTax))}へ改定します。
        </p>

        {/* 完全特別コンサル。上の3コースと並べると選択肢が増えて迷いやすくなるため、
            別枠の帯として控えめに置く */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-9">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-[#ffd84d] px-3 py-1 text-[11px] font-black text-gray-900">
                    月{PRIVATE_CONSULTING.capacityPerMonth}名まで
                  </span>
                  <span className="inline-flex rounded-full border border-gray-600 px-3 py-1 text-[11px] font-bold text-gray-300">
                    {PRIVATE_CONSULTING.supportPeriod}サポート
                  </span>
                </div>
                <h3 className="jp-tight mt-3 text-xl font-black text-white md:text-2xl">
                  {PRIVATE_CONSULTING.name}
                </h3>
                <p className="jp-tight mt-2.5 text-sm leading-7 text-gray-300">
                  {PRIVATE_CONSULTING.positioning}
                </p>

                {/* 伴走する媒体を並べる。ここがこのコースの一番の中身 */}
                <div className="mt-4 rounded-xl border border-gray-700 bg-gray-800/50 p-4">
                  <p className="text-[11px] font-black tracking-wide text-[#ffd84d]">
                    伴走する媒体
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {PRIVATE_CONSULTING.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white md:text-xs"
                      >
                        {platform}
                      </li>
                    ))}
                  </ul>
                  <p className="jp-tight mt-2.5 text-[11px] leading-5 text-gray-400">
                    顔を出す発信も、出さない発信も、どちらもまとめて設計します。
                  </p>
                </div>

                <ul className="mt-4 grid gap-2 md:grid-cols-3">
                  {PRIVATE_CONSULTING.points.map((point) => (
                    <li
                      key={point}
                      className="jp-tight flex items-start gap-2 text-xs leading-6 text-gray-300"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#ffd84d]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 rounded-xl border border-gray-700 bg-gray-800/60 px-6 py-5 text-center">
                <p className="text-[11px] font-bold text-gray-400">料金</p>
                <p className="jp-tight mt-1.5 whitespace-nowrap text-xl font-black text-white md:text-2xl">
                  {PRIVATE_CONSULTING.priceLabel}
                </p>
                <p className="jp-tight mt-2 text-[11px] leading-4 text-gray-400">
                  {PRIVATE_CONSULTING.priceNote}
                </p>
              </div>
            </div>
            <p className="jp-tight border-t border-gray-800 px-6 py-3.5 text-center text-[11px] leading-5 text-gray-500 md:px-9">
              ※ {PRIVATE_CONSULTING.note}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-md">
          <CTAButton />
          <CTANote className="mt-3" />
        </div>
      </div>
    </section>
  );
}
