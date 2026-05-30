import Link from "next/link";

const plans = [
  {
    name: "動画編集コース",
    price: 99000,
    period: "1年間サポート",
    highlight: false,
    description: "動画編集スキルを基礎から習得したい方",
  },
  {
    name: "非属人YouTubeコース（半年）",
    price: 297000,
    period: "6ヶ月サポート",
    highlight: false,
    description: "6ヶ月集中でYouTube運営を学びたい方",
  },
  {
    name: "非属人YouTubeコース（1年）",
    price: 450000,
    period: "1年間サポート",
    highlight: true,
    description: "伴走型サポートで本格的にチャンネルを育てたい方",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="section-subtitle">PRICING</p>
        <h2 className="section-title">料金</h2>
        <div className="title-divider" />

        <div className="overflow-x-auto mb-8">
          <table className="w-full min-w-[520px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left py-4 px-6 font-semibold text-sm">コース名</th>
                <th className="text-center py-4 px-4 font-semibold text-sm">料金（税込）</th>
                <th className="text-center py-4 px-4 font-semibold text-sm">サポート期間</th>
                <th className="text-center py-4 px-4 font-semibold text-sm hidden md:table-cell">対象</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr
                  key={plan.name}
                  className={`border-t border-gray-100 ${
                    plan.highlight ? "bg-gray-900/3" : ""
                  }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      {plan.highlight && (
                        <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full font-semibold">
                          人気
                        </span>
                      )}
                      <span className={`font-bold text-sm ${plan.highlight ? "text-gray-900" : "text-gray-700"}`}>
                        {plan.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className={`text-xl font-black ${plan.highlight ? "text-gray-900" : "text-gray-800"}`}>
                      ¥{plan.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">（税込）</span>
                  </td>
                  <td className="py-5 px-4 text-center text-sm text-gray-700">
                    {plan.period}
                  </td>
                  <td className="py-5 px-4 text-center text-xs text-gray-500 hidden md:table-cell">
                    {plan.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">料金に関するご注意</h3>
          <ul className="space-y-2">
            {[
              "表示価格はすべて税込です。",
              "お支払い方法は銀行振込・クレジットカード・分割払いからお選びいただけます（詳細はお問い合わせください）。",
              "受講料の返金については、お申し込み後7日以内かつ教材視聴前のキャンセルに限り対応いたします。",
              "コース内容・料金は予告なく変更する場合があります。",
            ].map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="flex-shrink-0 text-gray-400 mt-0.5">・</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 rounded-xl p-5 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            ※ 本スクールは、受講後の収益化・案件獲得・就職・副業収入等を保証するものではありません。<br />
            学習成果には個人差があります。
          </p>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary inline-block text-base md:text-lg">
            料金・コースについて相談する（無料）
          </Link>
        </div>
      </div>
    </section>
  );
}
