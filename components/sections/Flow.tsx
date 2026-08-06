

const steps = [
  {
    num: "01",
    title: "公式LINEから無料個別相談を予約",
    desc: "ボタンから公式LINEを追加し、届いたご案内でご希望の日時を選ぶだけ。3分で完了します。",
    duration: "約3分",
  },
  {
    num: "02",
    title: "個別説明（ZOOMまたはLINE通話）",
    desc: "ZOOMまたはLINE通話にて1対1でご説明します。カリキュラム・サポート内容・料金についてお伝えし、ご質問にも丁寧にお答えします。強引な勧誘は一切ありません。",
    duration: "約30〜60分",
  },
  {
    num: "03",
    title: "ご入会・お支払い",
    desc: "ご入会を決めていただいた場合、お支払い方法をご確認の上、手続きを進めます。銀行振込・クレジットカード・分割払いに対応しています。",
    duration: "お支払い確認後に開始",
  },
  {
    num: "04",
    title: "教材・サポートツールのご案内",
    desc: "学習用の動画教材へのアクセス方法と、コミュニティツール（Discord）の招待URLをお送りします。",
    duration: "受講開始準備",
  },
  {
    num: "05",
    title: "学習スタート",
    desc: "カリキュラムに沿って学習を開始します。わからないことはLINEでいつでも質問OK。定期的なZOOMでも進捗をサポートします。",
    duration: "サポート期間中",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="section-subtitle">FLOW</p>
        <h2 className="section-title">受講までの流れ</h2>
        <div className="title-divider" />

        {/* 縦積みにすると縦に伸びるため、横並びの簡潔な5段にしている */}
        <ol className="grid gap-3 md:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.num}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-black text-white">
                  {step.num}
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  {step.duration}
                </span>
              </div>
              <h3 className="jp-tight mt-2.5 text-[0.85rem] font-black leading-snug text-gray-900">
                {step.title}
              </h3>
              <p className="jp-tight mt-1.5 text-[11px] leading-[1.7] text-gray-600">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
