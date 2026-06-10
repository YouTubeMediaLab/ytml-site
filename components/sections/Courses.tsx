import Link from "next/link";

const courses = [
  {
    id: "edit",
    num: "①",
    badge: "BASIC",
    name: "動画編集コース",
    nameNote: "（1年）",
    price: "99,000",
    period: "1年間サポート",
    color: "border-blue-400",
    badgeColor: "bg-blue-500",
    desc: "Adobe Premiere Proの基礎から実践まで。動画編集スキルを一から体系的に習得するコースです。",
    style: "自主学習型",
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
    id: "youtube-half",
    num: "②",
    badge: "STANDARD",
    name: "非属人YouTubeコース",
    nameNote: "（半年）",
    price: "297,000",
    period: "6ヶ月サポート",
    color: "border-primary",
    badgeColor: "bg-primary",
    desc: "顔出し不要のYouTubeチャンネルを設計・運営するスキルを6ヶ月で集中的に学ぶコースです。",
    style: "自主学習型",
    styleDesc: "動画を見て学び、疑問はLINEで質問",
    features: [
      "チャンネル設計・コンセプト設計",
      "企画・台本の作り方",
      "ナレーション収録の基礎",
      "サムネイル・タイトル最適化",
      "投稿管理・運用サイクル",
      "収益化の仕組みの理解",
      "LINEサポート（無制限）",
      "ZOOMによる個別MT",
    ],
    recommended: false,
  },
  {
    id: "youtube-year",
    num: "③",
    badge: "PREMIUM",
    name: "非属人YouTubeコース",
    nameNote: "（1年）",
    price: "495,000",
    period: "1年間サポート",
    color: "border-gray-700",
    badgeColor: "bg-gray-800",
    desc: "①②の内容に加え、担当者が一緒にチャンネル運営をがっつりサポートする伴走型コースです。",
    style: "完全伴走型",
    styleDesc: "担当者と一緒に企画〜投稿まで進める",
    features: [
      "動画編集コース 全内容",
      "非属人YouTubeコース 全内容",
      "チャンネル運営の伴走サポート",
      "企画〜投稿まで一緒に進める",
      "外注化・チーム構築のノウハウ",
      "改善分析・PDCAサポート",
      "LINEサポート（無制限）",
      "ZOOM個別MT（優先対応）",
    ],
    recommended: true,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-subtitle">COURSE</p>
        <h2 className="section-title">コース紹介</h2>
        <div className="title-divider" />
        <p className="text-center text-gray-500 text-sm mb-10 -mt-4">
          ※ 全コース、収益化・案件獲得・就職の保証はございません。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative rounded-2xl border-2 ${course.color} bg-white shadow-sm overflow-hidden flex flex-col ${
                course.recommended ? "shadow-xl ring-2 ring-gray-700/20" : ""
              }`}
            >
              {course.recommended && (
                <div className="bg-gray-900 text-white text-xs font-bold text-center py-2 tracking-wider">
                  ★ 最もご支持いただいているコース
                </div>
              )}

              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-black text-gray-300">{course.num}</span>
                    <span className={`inline-block ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {course.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {course.name}
                    <span className="text-base font-bold text-gray-500">
                      {course.nameNote}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{course.desc}</p>
                </div>

                {/* Style badge */}
                <div className="mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-black px-2 py-0.5 rounded ${course.recommended ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"}`}>
                      {course.style}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{course.styleDesc}</p>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black text-gray-900">
                      ¥{course.price}
                    </span>
                    <span className="text-sm text-gray-500">（税込）</span>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">{course.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${
                    course.recommended
                      ? "bg-gray-900 text-white hover:bg-gray-800 shadow-md"
                      : "border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                  }`}
                >
                  詳しく相談する
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ①②③ 違いの説明 */}
        <div className="mt-8 rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <p className="font-bold text-gray-900 text-sm md:text-base text-center">
              ① ② と ③ のサポートスタイルの違い
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-black text-gray-400">①②</span>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                  自主学習型
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                カリキュラムの動画を<strong className="text-gray-800">自分のペースで視聴して学ぶ</strong>スタイルです。
                わからないことはLINEで質問でき、ZOOMで確認しながら進めます。
              </p>
            </div>
            <div className="p-6 bg-gray-900/2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-black text-gray-400">③</span>
                <span className="inline-block bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  完全伴走型
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                ①②の内容に加え、担当者が<strong className="text-gray-800">一緒にチャンネルを作り上げていく</strong>伴走型サポートが付きます。
                企画・台本・改善まで、二人三脚で進めます。
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          ※ 料金は税込表示です。分割払いについてはお問い合わせください。
        </p>
      </div>
    </section>
  );
}
