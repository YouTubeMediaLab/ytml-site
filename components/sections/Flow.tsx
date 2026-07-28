import { CTAButton, CTANote } from "@/components/CTAButton";

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

        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-gray-200" />

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="relative flex gap-6 md:gap-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg relative z-10 shadow-md">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-base">{step.title}</h3>
                    <span className="text-xs bg-white border border-gray-200 text-gray-500 px-2.5 py-1 rounded-full flex-shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-6 text-center text-sm text-gray-500">
            まずは無料の個別相談から。お気軽にどうぞ。
          </p>
          <div className="mx-auto max-w-md">
            <CTAButton />
            <CTANote className="mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
