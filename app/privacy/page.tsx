import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "プライバシーポリシー | SNS Media Lab",
  description: "SNS Media Labのプライバシーポリシーページです。",
};

const sections = [
  {
    title: "1. 個人情報の定義",
    content:
      "本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律に定義される個人情報を指し、氏名、住所、電話番号、メールアドレス等、特定の個人を識別できる情報を指します。",
  },
  {
    title: "2. 個人情報の収集",
    content:
      "当社は、以下の目的のために個人情報を収集します。\n・お問い合わせへの対応\n・受講申し込みおよびサービス提供\n・学習サポート・連絡\n・サービス改善のための分析（個人を特定しない形で使用）",
  },
  {
    title: "3. 個人情報の利用目的",
    content:
      "収集した個人情報は、以下の目的に利用します。\n・お問い合わせへの回答\n・サービス提供・サポートの実施\n・重要なお知らせの配信\n・法令に基づく対応\n\n上記以外の目的での利用は行いません。",
  },
  {
    title: "4. 個人情報の第三者提供",
    content:
      "当社は、以下の場合を除き、ご本人の同意なく第三者に個人情報を提供しません。\n・法令に基づく場合\n・人の生命・身体または財産の保護のために必要な場合\n・公衆衛生の向上または児童の健全育成のために特に必要な場合",
  },
  {
    title: "5. 個人情報の管理",
    content:
      "当社は、個人情報の正確性・安全性を保つため、適切な管理・保護措置を講じます。不正アクセス、紛失、破損、漏洩等を防止するよう努めます。",
  },
  {
    title: "6. Cookieの使用",
    content:
      "当サイトでは、ユーザー体験の向上・アクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部サービスが正常に動作しない場合があります。",
  },
  {
    title: "7. アクセス解析ツール",
    content:
      "当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用し、個人を特定しない形で情報を収集します。",
  },
  {
    title: "8. 個人情報の開示・訂正・削除",
    content:
      "ご本人からの個人情報の開示・訂正・削除のご要請については、本人確認の上、合理的な範囲で対応いたします。お問い合わせフォームよりご連絡ください。",
  },
  {
    title: "9. プライバシーポリシーの変更",
    content:
      "本ポリシーの内容は、法令の変更や当社のサービス変更に応じて改定する場合があります。改定後は当サイトに掲載し、重要な変更の場合はお知らせします。",
  },
  {
    title: "10. お問い合わせ",
    content:
      `個人情報の取り扱いに関するお問い合わせは、以下よりご連絡ください。\nメールアドレス：${BRAND.email}\nまたはお問い合わせフォームをご利用ください。`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
            <span>›</span>
            <span className="text-gray-700">プライバシーポリシー</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          プライバシーポリシー
        </h1>
        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
        <p className="text-sm text-gray-500 mb-8">
          最終更新日：2026年6月1日
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-8 text-sm text-gray-600 leading-relaxed">
          SNS Media Lab（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
          以下のプライバシーポリシーに従って適切に取り扱います。
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-3">{section.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
