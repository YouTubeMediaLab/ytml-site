"use client";

import { useState } from "react";

const curriculums = [
  {
    id: "edit",
    label: "① 動画編集コース",
    note: "集中すれば2週間で基礎習得。1〜2ヶ月で案件受注レベルを目指します。",
    phases: [
      {
        period: "〜2週間",
        title: "Adobe Premiere Pro 基礎習得",
        milestone: "基礎完成",
        milestoneColor: "bg-blue-500",
        items: [
          "環境設定・プロジェクト作成",
          "タイムラインの基本操作",
          "カット編集・シーケンス構成",
          "テロップ（文字）の挿入と設定",
          "画像・静止画の挿入",
          "BGM・効果音の挿入とフェード",
          "色調補正（Lumetriカラー）の基礎",
          "書き出し設定・形式の理解",
        ],
      },
      {
        period: "1〜2ヶ月",
        title: "実践・案件受注レベルへ",
        milestone: "案件受注",
        milestoneColor: "bg-green-500",
        items: [
          "実践的な編集スキルの向上",
          "クライアント案件を想定した編集",
          "納品形式・データ管理の理解",
          "ポートフォリオ動画の制作",
          "編集スピード・効率の改善",
        ],
      },
      {
        period: "3ヶ月〜",
        title: "本業レベルの品質・スピードへ",
        milestone: "本業レベル",
        milestoneColor: "bg-purple-500",
        items: [
          "複雑な編集・エフェクト対応",
          "高品質な動画制作の実践",
          "テンプレート活用・効率化",
          "クライアントワーク対応力強化",
          "継続的なスキルアップ",
        ],
      },
    ],
  },
  {
    id: "youtube",
    label: "②③ 非属人YouTubeコース",
    note: "3ヶ月以内での収益化を目指したカリキュラム設計です。",
    phases: [
      {
        period: "1ヶ月目",
        title: "チャンネル設計・立ち上げ",
        milestone: "チャンネル開設",
        milestoneColor: "bg-blue-500",
        items: [
          "非属人YouTubeの仕組みを理解",
          "ジャンル・ニッチ選定",
          "チャンネルコンセプト・ターゲット設定",
          "競合チャンネル分析",
          "チャンネル開設・初期設定",
          "コンテンツロードマップ作成",
        ],
      },
      {
        period: "2ヶ月目",
        title: "コンテンツ制作・投稿開始",
        milestone: "投稿開始",
        milestoneColor: "bg-green-500",
        items: [
          "企画・台本の作り方",
          "ナレーション収録の基礎",
          "動画編集（ナレーション動画スタイル）",
          "サムネイル・タイトルの最適化",
          "説明文・タグ設定",
          "初回投稿〜投稿サイクルの確立",
        ],
      },
      {
        period: "3ヶ月目〜",
        title: "改善・収益化を目指す",
        milestone: "収益化へ",
        milestoneColor: "bg-primary",
        items: [
          "YouTubeアナリティクスの読み方",
          "インプレッション率・視聴維持率の改善",
          "収益化条件（1,000人/4,000時間）への戦略",
          "投稿ペースの最適化",
          "外注化の基礎知識",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [active, setActive] = useState("edit");
  const current = curriculums.find((c) => c.id === active)!;

  return (
    <section id="curriculum" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="section-subtitle">CURRICULUM</p>
        <h2 className="section-title">カリキュラム</h2>
        <div className="title-divider" />

        {/* Tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {curriculums.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === c.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Note */}
        <div className="bg-white border border-primary/20 rounded-xl p-4 mb-10 text-center shadow-sm">
          <p className="text-sm text-primary font-semibold">{current.note}</p>
          <p className="text-xs text-gray-400 mt-1">※ 学習ペースには個人差があります。</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {current.phases.map((phase, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Center dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
                  <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md" />
                </div>

                {/* Left spacer on odd items / Right spacer on even items */}
                <div className="hidden md:block md:w-[47%]" />

                {/* Content card */}
                <div className={`md:w-[47%] ${idx % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Card header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
                      <div>
                        <span className="text-xs text-gray-400 font-medium block">PHASE {idx + 1}</span>
                        <span className="text-primary font-bold text-sm">{phase.period}</span>
                      </div>
                      <span className={`text-xs text-white font-bold px-3 py-1 rounded-full ${phase.milestoneColor}`}>
                        {phase.milestone}
                      </span>
                    </div>
                    {/* Card body */}
                    <div className="p-5">
                      <h3 className="font-black text-gray-900 text-base mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          ※ カリキュラムの内容・順序は受講状況に応じて変更する場合があります。
        </p>
      </div>
    </section>
  );
}
