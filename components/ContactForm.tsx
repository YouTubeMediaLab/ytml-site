"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  agree: boolean;
};

const courseOptions = [
  { value: "", label: "関心のあるコースをお選びください" },
  { value: "edit", label: "動画編集コース" },
  { value: "youtube", label: "非属人YouTubeコース" },
  { value: "undecided", label: "まだ決まっていない・相談したい" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      setError("プライバシーポリシーへの同意が必要です。");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/xkoeaoeg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "未入力",
          course: courseOptions.find((o) => o.value === form.course)?.label ?? form.course,
          message: form.message || "（なし）",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("送信に失敗しました。時間をおいて再度お試しいただくか、メールにてご連絡ください。");
      }
    } catch {
      setError("通信エラーが発生しました。インターネット接続をご確認のうえ、再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          お問い合わせありがとうございます
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          内容を確認の上、1営業日以内にご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          お名前 <span className="text-primary text-xs">*必須</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="山田 太郎"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          メールアドレス <span className="text-primary text-xs">*必須</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          電話番号 <span className="text-gray-400 text-xs">任意</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="090-0000-0000"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      {/* Course */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          関心のあるコース <span className="text-primary text-xs">*必須</span>
        </label>
        <select
          name="course"
          required
          value={form.course}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
        >
          {courseOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          ご質問・ご相談内容{" "}
          <span className="text-gray-400 text-xs">任意</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="ご質問・ご不明な点をご記入ください。（例：未経験でも始められますか？分割払いはできますか？など）"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
        />
      </div>

      {/* Agree */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-primary"
        />
        <label htmlFor="agree" className="text-sm text-gray-600 leading-snug cursor-pointer">
          <a href="/privacy" className="text-primary hover:underline" target="_blank">
            プライバシーポリシー
          </a>
          に同意の上、送信します。
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "送信中..." : "送信する（無料相談を申し込む）"}
      </button>
    </form>
  );
}
