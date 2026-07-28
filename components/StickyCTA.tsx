import { CTAButtonCompact } from "@/components/CTAButton";
import { OFFER } from "@/config/offer";

/**
 * スマートフォンの追従CTA。
 * body 側に同じ高さの padding-bottom を確保してある（globals.css）。
 */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-3 pb-[env(safe-area-inset-bottom)] pt-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <p className="mb-1.5 text-center text-[10px] font-bold tracking-wide text-primary">
        先着{OFFER.capacity}名限定価格で受付中
      </p>
      <CTAButtonCompact
        label="無料で個別相談に参加する"
        className="w-full py-3.5 text-[0.95rem]"
      />
    </div>
  );
}
