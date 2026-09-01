"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import Image from "next/image";
import type { EvidenceItem } from "@/config/evidence";

/**
 * 実績スクリーンショットのカルーセル。
 *
 * 証拠は「読ませる」ものなので自動送りはしない。指のスワイプ、矢印、
 * キーボードのいずれでも送れるようにし、タップで拡大できるようにしている。
 *
 * 画像は縦横比がばらばら（横長のStudio画面と縦長のLINE画面が混ざる）ため、
 * 高さを揃えて幅を成り行きにしている。letterboxが出ない。
 */
export function EvidenceCarousel({
  items,
  heightClass,
  tone = "light",
}: {
  items: EvidenceItem[];
  /** カードの高さ。画像の情報量に合わせて呼び出し側で決める */
  heightClass: string;
  /** 背景の明暗に合わせた配色 */
  tone?: "light" | "gold";
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });
  const suppressClickRef = useRef(false);
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState<EvidenceItem | null>(null);

  // スクロール位置から、いま中央に近いカードを割り出す
  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (d < min) {
        min = d;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const el = track.children[index] as HTMLElement | undefined;
    if (!el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const step = useCallback(
    (delta: number) => {
      const next = Math.min(Math.max(active + delta, 0), items.length - 1);
      scrollToIndex(next);
    },
    [active, items.length, scrollToIndex],
  );

  // 拡大表示中は Esc で閉じ、背面のスクロールを止める
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoomed]);

  const isGold = tone === "gold";

  // PCでも画像をつかんで横へ送れるようにする。
  // タッチ端末はブラウザ本来の慣性スクロールを使うため、マウスだけを対象にする。
  const startDrag = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = {
      active: true,
      moved: false,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(e.pointerId);
  };

  const moveDrag = (e: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.active || drag.pointerId !== e.pointerId) return;
    const distance = e.clientX - drag.startX;
    if (Math.abs(distance) > 5) drag.moved = true;
    if (!drag.moved) return;
    e.preventDefault();
    track.scrollLeft = drag.startScrollLeft - distance;
  };

  const endDrag = (e: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.active || drag.pointerId !== e.pointerId) return;
    suppressClickRef.current = drag.moved;
    if (drag.moved) {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
    drag.active = false;
    if (track.hasPointerCapture(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
    }
    syncActive();
  };

  return (
    <div className="relative min-w-0 w-full overflow-hidden">
      <ul
        ref={trackRef}
        onScroll={syncActive}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(e) => {
          if (!suppressClickRef.current) return;
          e.preventDefault();
          e.stopPropagation();
          suppressClickRef.current = false;
        }}
        onDragStart={(e) => e.preventDefault()}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            step(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            step(-1);
          }
        }}
        className="scrollbar-hide flex w-full max-w-full cursor-grab snap-x snap-mandatory scroll-px-1 select-none gap-3 overflow-x-scroll overscroll-x-contain scroll-smooth px-1 pb-2 focus:outline-none active:cursor-grabbing [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] md:gap-4"
        aria-label="実績のスクリーンショット"
      >
        {items.map((item, i) => (
          <li key={item.src} className="w-[88%] max-w-[330px] shrink-0 snap-center sm:w-[320px]">
            <button
              type="button"
              onClick={() => setZoomed(item)}
              className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition-shadow hover:shadow-lg ${
                isGold
                  ? "border-[#e2b84d]/50 shadow-[0_9px_22px_rgba(31,31,31,0.08)]"
                  : "border-gray-200 shadow-sm"
              }`}
              aria-label={`${item.caption}（タップで拡大）`}
            >
              {/* キャプションのほうが画像より横に長いカードがあるため、
                  画像は必ず中央に置く */}
              <span
                className={`relative flex w-full items-center justify-center overflow-hidden bg-gray-50 ${heightClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  draggable={false}
                  className="max-h-full w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                {/* タッチ端末ではホバーが効かないため、常時出しておく */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[10px] font-bold text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                  拡大
                </span>
              </span>
              <span
                className={`block border-t px-3.5 py-3 text-[11px] font-bold leading-5 md:text-xs ${
                  isGold
                    ? "border-[#e2b84d]/40 bg-[#fffdf6] text-gray-800"
                    : "border-gray-100 bg-white text-gray-700"
                }`}
              >
                <span className="mr-1.5 text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* 送り */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <ArrowButton
          direction="prev"
          disabled={active === 0}
          onClick={() => step(-1)}
        />
        <div className="min-w-14 text-center text-sm font-black tabular-nums text-gray-700" aria-live="polite">
          {active + 1} <span className="font-medium text-gray-400">/ {items.length}</span>
        </div>
        <ArrowButton
          direction="next"
          disabled={active === items.length - 1}
          onClick={() => step(1)}
        />
      </div>
      <p className="mt-2 text-center text-[11px] font-bold text-gray-500">
        画像を横にスワイプ、または矢印で切り替えられます
      </p>

      {/* 拡大表示 */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.caption}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(null)}
        >
          <div
            className="flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomed.src}
              alt={zoomed.alt}
              width={zoomed.width}
              height={zoomed.height}
              className="max-h-[78vh] w-auto rounded-xl bg-white object-contain shadow-2xl"
            />
            <p className="mt-4 max-w-xl text-center text-xs leading-6 text-white md:text-sm">
              {zoomed.caption}
            </p>
            <button
              type="button"
              onClick={() => setZoomed(null)}
              className="mt-4 rounded-full bg-white/95 px-6 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-white"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "前へ" : "次へ"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:border-primary hover:text-primary disabled:cursor-default disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-700"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
