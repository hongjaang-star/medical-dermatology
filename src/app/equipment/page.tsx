import { equipment } from "@/data/content";
import { CtaBand, PageHero, Placeholder } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "보유장비",
  description:
    "울쎄라, 써마지 FLX, 피코슈어, 엑셀V, 포텐자 등 강남역 뤼미에르 피부과의 보유장비를 소개합니다. 허가받은 정품 장비만 사용하고 정기 점검합니다.",
  path: "/equipment",
});

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        path="/equipment"
        eyebrow="Equipment"
        title="보유장비"
        desc="허가받은 정품 장비만 사용하며, 정기 점검으로 최상의 상태를 유지합니다."
        crumbs={[{ label: "보유장비" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <ul className="container-page grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e, i) => (
            <li key={e.en} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
              <Placeholder label={e.en} className="aspect-[4/3]" />
              <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-line pb-4">
                <h2 className="text-xl font-semibold text-ink">{e.name}</h2>
                <span className="shrink-0 text-[13px] text-gold-deep">{e.type}</span>
              </div>
              <p className="mt-1 font-display text-base tracking-wide text-ink-mute">{e.en}</p>
              <p className="mt-3 text-[15px] text-ink-soft">{e.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
