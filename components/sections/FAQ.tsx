"use client";

import { useState } from "react";
import { FAQS } from "@/config/faq";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
            Q
          </span>
          <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
            {q}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-3 pb-5">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
            A
          </span>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">FAQ</p>
        <h2 className="section-title">よくある質問</h2>
        <div className="title-divider" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8 divide-y divide-gray-100">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          その他のご質問は、次の無料個別相談でお気軽にどうぞ。
        </p>
      </div>
    </section>
  );
}
