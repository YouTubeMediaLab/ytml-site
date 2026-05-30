const reasons = [
  {
    num: "01",
    title: "実務で使う技術をそのまま学べる",
    desc: "業界標準のAdobe Premiere Proを使用したカリキュラムで、現場で即戦力となるスキルを習得できます。「学んだけど使えない」という状況を防ぐため、実践的な内容を重視しています。",
  },
  {
    num: "02",
    title: "体系的に整理されたカリキュラム",
    desc: "「何から手をつければいいかわからない」という状態から抜け出せるよう、基礎から応用まで順序立てて学べる構成になっています。迷わず進めることで、着実にスキルアップできます。",
  },
  {
    num: "03",
    title: "学習中の疑問に丁寧に対応",
    desc: "LINEやオンラインミーティングを通じて、学習中に出てきた疑問に対応します。「聞けなくて止まってしまう」ことがないよう、サポート体制を整えています。",
  },
  {
    num: "04",
    title: "自分のペースで無理なく進められる",
    desc: "動画教材はいつでも繰り返し視聴可能。仕事や家事の合間など、生活スタイルに合わせて学習を進めることができます。",
  },
  {
    num: "05",
    title: "YouTube運営の全体像を掴める",
    desc: "編集スキルだけでなく、企画・台本・サムネイル・投稿管理・外注化まで、チャンネル運営に必要な知識を体系的に学べます。",
  },
  {
    num: "06",
    title: "誠実な料金体系・明確な内容",
    desc: "コース内容・料金・サポート内容を明確にお伝えしています。成果保証や収益保証は行っておらず、スキル習得の場として誠実に向き合います。",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-subtitle">REASON</p>
        <h2 className="section-title">選ばれる理由</h2>
        <div className="title-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-5xl font-black text-gray-100 leading-none select-none">
                {r.num}
              </span>
              <div className="relative">
                <div className="inline-block text-xs font-bold text-primary bg-red-50 rounded-full px-3 py-1 mb-3">
                  REASON {r.num}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
