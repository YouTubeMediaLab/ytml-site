import Image from "next/image";
const supports = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "LINE質問（無制限）",
    subtitle: "サポート期間中は質問し放題",
    desc: "わからないことが出てきたらLINEでいつでも質問できます。「こんなこと聞いていいの？」という遠慮は一切不要。止まらないサポート体制を整えています。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "ZOOM個別MT",
    subtitle: "画面共有で丁寧にサポート",
    desc: "定期的なZOOMでの個別ミーティングで進捗確認・具体的な質問に対応します。テキストでは伝わりにくい部分も、画面共有を使いながら解決します。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "動画教材（見放題）",
    subtitle: "いつでも何度でも視聴可能",
    desc: "カリキュラムに沿った動画教材をいつでも視聴できます。繰り返し確認できるので、自分のペースで理解を深めながら進められます。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "課題フィードバック",
    subtitle: "制作物への具体的な指摘",
    desc: "制作した動画に対して「ここが良い・ここを改善すると良くなる」という具体的なフィードバックをお伝えします。ただ学ぶだけでなく、質を高める仕組みです。",
  },
];

export default function Support() {
  return (
    <section id="support" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-subtitle">SUPPORT</p>
        <h2 className="section-title">サポート体制</h2>
        <div className="title-divider" />

        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          「わからなくて止まってしまう」ことがないよう、
          複数のサポート手段を組み合わせています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supports.map((s) => (
            <div key={s.title} className="flex gap-5 p-6 md:p-7 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-0.5">{s.title}</h3>
                <p className="text-xs text-primary font-semibold mb-2">{s.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 教材とコミュニティの実物。文章だけだと「本当にあるのか」が伝わらない */}
        <div className="mt-12">
          <h3 className="mb-2 text-center text-base font-black text-gray-900 md:text-lg">
            実際の教材とコミュニティ
          </h3>
          <p className="mb-7 text-center text-xs leading-6 text-gray-500 md:text-sm">
            受講後に使っていただく学習環境です。動画教材はDiscord内で工程ごとに整理しています。
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                src: "/images/discord-curriculum.jpg",
                alt: "Discordのチャンネル一覧。プレミアプロ マスター講座、YouTubeマスター講座などが工程ごとに並んでいる",
                caption: "工程ごとに整理されたカリキュラム（Discord）",
                note: "基礎編・応用編、企画、サムネイル、投稿後の分析まで章立てされています。",
              },
              {
                src: "/images/lesson-player.jpg",
                alt: "動画教材「カットの方法」の再生画面。Adobe Premiere Proのタイムラインを画面共有しながら解説している",
                caption: "動画教材の一例「カットの方法」",
                note: "実際の操作画面を見ながら、手順どおりに進められます。",
              },
            ].map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {/* 縮小すると文字が読めないため、原寸を別タブで開けるようにしている */}
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1800}
                    height={1169}
                    className="w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[10px] font-bold text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
                      />
                    </svg>
                    拡大
                  </span>
                </a>
                <figcaption className="border-t border-gray-100 px-5 py-4">
                  <p className="text-sm font-bold text-gray-900">{item.caption}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">{item.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-800 leading-relaxed">
            サポートはスキルの習得を目的としたものです。成果・収益・案件獲得・就職についての保証は行っておりません。学習の結果には個人差があります。
          </p>
        </div>
      </div>
    </section>
  );
}
