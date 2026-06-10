"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "YMLとは" },
  { href: "/#courses", label: "コース紹介" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "よくある質問" },
  { href: "/company", label: "会社概要" },
];

function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="14" fill="#C41230" />
      {/* Mortar board flat top */}
      <polygon points="12,42 50,20 88,42 50,64" fill="white" />
      {/* Cap dome */}
      <path d="M36,44 Q36,66 50,66 Q64,66 64,44 Z" fill="white" />
      {/* Tassel string */}
      <line
        x1="12"
        y1="42"
        x2="12"
        y2="60"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Tassel bob */}
      <rect x="9" y="60" width="6" height="8" rx="1.5" fill="white" />
      {/* Play button / body */}
      <polygon points="30,64 30,88 72,76" fill="white" />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <LogoIcon size={38} />
            <span className="font-bold text-base leading-tight text-gray-900">
              YouTube
              <br />
              <span className="text-primary text-sm font-semibold leading-none">
                Media Lab
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              無料相談はこちら
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <div
              className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-current transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            無料相談はこちら
          </Link>
        </nav>
      </div>
    </header>
  );
}
