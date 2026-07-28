import { CONSULTATION, CTA_COPY, LINE_URL } from "@/config/site";

/**
 * 主要CTA。遷移先は公式LINE。
 *
 * 左端に縦書きの限定リボン、右側に「何を学べるか → 行動」を積む構成。
 * 色はLINE追加を連想させる黄緑の光沢。強調語だけ黄色にして、
 * 視線が「個別相談に参加する」へ落ちるようにしている。
 */
export function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-green group flex w-full items-stretch rounded-2xl border-[3px] border-white ${className}`}
    >
      {/* 左端の縦リボン */}
      <span className="flex w-9 shrink-0 items-center justify-center rounded-l-xl bg-white sm:w-11">
        <span className="jp-tight text-[0.7rem] font-black leading-tight tracking-tight text-primary [writing-mode:vertical-rl] sm:text-[0.82rem]">
          {CTA_COPY.badge}
        </span>
      </span>

      <span className="flex-1 px-2.5 py-3 text-center sm:px-4 sm:py-4">
        <span className="jp-tight block text-[0.92rem] font-black leading-[1.45] text-white sm:text-[1.12rem]">
          {CTA_COPY.lines.map((line) => (
            <span key={line} className="block">
              <Highlighted text={line} />
            </span>
          ))}
        </span>

        <span aria-hidden="true" className="my-1.5 block h-px bg-white/45" />

        <span className="jp-tight flex items-center justify-center gap-1.5 text-[1.3rem] font-black leading-none text-white sm:text-[1.7rem]">
          <span style={{ textShadow: "0 2px 0 rgba(0,0,0,0.22)" }}>
            {CTA_COPY.action}
          </span>
          <Caret className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5" />
        </span>
      </span>
    </a>
  );
}

/** 幅が狭い場所（ヘッダー・追従バー）で使う1行のCTA */
export function CTAButtonCompact({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-green cta-green-sm inline-flex items-center justify-center gap-2 rounded-full border-2 border-white font-black text-white ${className}`}
    >
      <span className="flex items-center gap-2">
        {label}
        <Caret className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

/** CTAの下に添える補足（相談方法・所要時間・相談だけでも可） */
export function CTANote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-center text-xs leading-relaxed text-gray-500 ${className}`}>
      {CONSULTATION.methods}
      <span className="mx-1.5 text-gray-300">|</span>
      所要時間{CONSULTATION.duration}
      <span className="mx-1.5 text-gray-300">|</span>
      {CONSULTATION.note}
    </p>
  );
}

function Caret({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 14"
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M1 1l10 6-10 6z" />
    </svg>
  );
}

/** 強調語だけ黄色にする。どこを黄色にするかは config 側で決める */
function Highlighted({ text }: { text: string }) {
  const words: readonly string[] = CTA_COPY.highlights;
  if (words.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "g");
  return (
    <>
      {text.split(pattern).map((part, i) =>
        words.includes(part) ? (
          <span key={i} className="text-[#ffe600]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
