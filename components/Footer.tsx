import Link from "next/link";
import Image from "next/image";
import { CTAButtonCompact } from "@/components/CTAButton";

const footerLinks = {
  サービス: [
    { href: "/#operator", label: "運営者の実績" },
    { href: "/#results", label: "受講生の実績" },
    { href: "/#paths", label: "売上につなげる4つの設計" },
    { href: "/#ai", label: "AI活用" },
    { href: "/#roadmap", label: "3か月ロードマップ" },
    { href: "/#courses", label: "コース紹介" },
    { href: "/#pricing", label: "料金" },
    { href: "/#faq", label: "よくある質問" },
  ],
  会社情報: [
    { href: "/company", label: "会社概要" },
    { href: "/tokushoho", label: "特定商取引法に基づく表記" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/terms", label: "利用規約" },
    { href: "/contact", label: "お問い合わせ" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/yml-icon.jpg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg"
              />
              <span className="font-bold text-white text-lg">SNS Media Lab</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              商品設計・SNS運用・販売導線・セールスまで
              <br />
              体系的に学べるオンラインスクールです。
              <br />
              商品がない方も、未経験から順番に進められます。
            </p>
            <p className="text-xs text-gray-500">
              ※ 本スクールは売上・成約・収益化・案件獲得・就職を保証するものではありません。<br />
              学習成果には個人差があります。
            </p>

            <div className="mt-6 max-w-xs">
              <CTAButtonCompact
                label="無料で個別相談に参加する"
                className="w-full py-3 text-sm"
              />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SNS Media Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tokushoho" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              特定商取引法
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
