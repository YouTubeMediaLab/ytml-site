import { Reveal } from "@/components/Reveal";
import { EDUCATION_STANCE } from "@/config/site";

/**
 * 販売についての考え方。
 *
 * 料金の直前に置く。高額商材への警戒が最も高まる位置で、
 * 「煽らない」を抽象的な約束ではなく、教える内容そのものとして示す。
 * セクション扱いにせず帯にしているのは、これ以上ページを長くしないため。
 */
export default function EducationStance() {
  const { persuasion, education } = EDUCATION_STANCE;

  return (
    <section className="bg-white px-4 py-14 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
            <div className="px-6 py-7 text-center md:px-10 md:py-8">
              <h2 className="jp-tight text-xl font-black leading-snug text-gray-900 md:text-2xl">
                {EDUCATION_STANCE.heading}
              </h2>
              <p className="jp-tight mx-auto mt-3 max-w-2xl text-sm leading-8 text-gray-600">
                {EDUCATION_STANCE.lead}
              </p>
            </div>

            <div className="grid gap-px bg-gray-200 md:grid-cols-2">
              <Panel {...persuasion} tone="muted" />
              <Panel {...education} tone="brand" />
            </div>

            <p className="jp-tight px-6 py-5 text-center text-xs leading-6 text-gray-500 md:text-sm">
              {EDUCATION_STANCE.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Panel({
  label,
  body,
  lines,
  result,
  tone,
}: {
  label: string;
  body: string;
  lines: readonly string[];
  result: string;
  tone: "muted" | "brand";
}) {
  const isBrand = tone === "brand";

  return (
    <div className={`p-6 md:p-8 ${isBrand ? "bg-white" : "bg-gray-50"}`}>
      <p
        className={`inline-flex rounded-md px-2.5 py-1 text-xs font-black ${
          isBrand ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        {label}
      </p>
      <p className="jp-tight mt-3 text-sm font-bold text-gray-800">{body}</p>

      <ul className="mt-4 space-y-2">
        {lines.map((line) => (
          <li
            key={line}
            className={`jp-tight rounded-lg px-3.5 py-2.5 text-xs leading-6 md:text-[0.82rem] ${
              isBrand
                ? "bg-red-50 text-gray-700"
                : "bg-white text-gray-500 line-through decoration-gray-300"
            }`}
          >
            「{line}」
          </li>
        ))}
      </ul>

      <p
        className={`jp-tight mt-4 border-t pt-3.5 text-xs font-bold leading-6 md:text-[0.82rem] ${
          isBrand
            ? "border-primary/20 text-primary-dark"
            : "border-gray-200 text-gray-500"
        }`}
      >
        {result}
      </p>
    </div>
  );
}
