import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談 | SNS Media Lab",
  description:
    "SNS Media Labへのお問い合わせ・無料個別相談はこちらから。コース内容・料金・学習方法についてお気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
            <span>›</span>
            <span className="text-gray-700">お問い合わせ</span>
          </nav>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          お問い合わせ・無料相談
        </h1>
        <div className="w-12 h-1 bg-primary rounded-full mb-6" />

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          コース内容・料金・サポート体制についてご不明な点はお気軽にお問い合わせください。
          <br />
          無料の個別相談（ZoomまたはLINE通話、約30〜60分）も承っております。
          <br />
          強引な勧誘は一切行いませんのでご安心ください。
        </p>

        {/* Trust points */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: "🔒", text: "個人情報を\n適切に管理" },
            { icon: "💬", text: "強引な勧誘\n一切なし" },
            { icon: "⏰", text: "1営業日以内\nに返信" },
          ].map((item) => (
            <div key={item.text} className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs text-gray-600 whitespace-pre-line leading-snug font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <ContactForm />

        <div className="mt-8 bg-gray-50 rounded-xl p-5">
          <p className="text-xs text-gray-500 leading-relaxed">
            ※ いただいた個人情報はお問い合わせへの対応・サービスご案内のみに使用します。
            <br />
            ※ 返信は原則1営業日以内にメールにてお送りします。
            <br />
            ※ 迷惑メールフォルダへ振り分けられる場合がありますのでご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
