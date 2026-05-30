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
