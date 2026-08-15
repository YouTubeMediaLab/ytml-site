"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CTAButtonCompact } from "@/components/CTAButton";
import { BRAND } from "@/config/brand";
import { OFFER } from "@/config/offer";

const navLinks = [
  { href: "/#operator", label: "運営者の実績" },
  { href: "/#results", label: "受講生の実績" },
  { href: "/#paths", label: "学べること" },
  { href: "/#courses", label: "コース紹介" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "よくある質問" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* 限定価格の告知バー。スクロールすると畳んで邪魔にならないようにする */}
      <div
        className={`overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-dark transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <p className="px-4 py-1.5 text-center text-[10px] font-bold tracking-wide text-white md:text-xs">
          <span className="mr-1.5 rounded-full bg-[#ffd84d] px-2 py-0.5 text-[9px] font-black text-gray-900 md:text-[10px]">
            {OFFER.startLabel}〜
          </span>
          <span className="hidden sm:inline">SNSマーケティング・セールスまで学べる1年コースを、</span>
          先着{OFFER.capacity}名限定価格で受付中
        </p>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_18px_rgba(0,0,0,0.08)]"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* ロゴ */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/yml-icon.jpg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 rounded-xl shadow-sm ring-1 ring-black/5 md:h-10 md:w-10"
                priority
              />
              <span className="text-left text-[0.95rem] font-black leading-tight tracking-tight text-gray-900">
                {BRAND.nameLine1}
                <br />
                <span className="text-[0.8rem] font-bold leading-none text-primary">
                  {BRAND.nameLine2}
                </span>
              </span>
            </Link>

            {/* PCナビ */}
            <nav className="hidden items-center gap-5 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.82rem] font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <CTAButtonCompact
                label="無料で個別相談"
                className="px-5 py-2.5 text-sm"
              />
            </div>

            {/* モバイルメニューボタン */}
            <button
              className="p-2 text-gray-700 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニュー"
              aria-expanded={isOpen}
            >
              <div
                className={`mb-1.5 h-0.5 w-6 bg-current transition-all ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <div
                className={`mb-1.5 h-0.5 w-6 bg-current transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`h-0.5 w-6 bg-current transition-all ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
            isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-gray-100 py-3 font-medium text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/company"
              className="border-b border-gray-100 py-3 font-medium text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              会社概要
            </Link>
            <CTAButtonCompact
              label="無料で個別相談に参加する"
              className="mt-4 w-full py-3.5"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
