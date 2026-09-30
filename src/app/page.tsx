import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Plus, TrainFront } from "lucide-react";
import { images, site, videos } from "@/data/site";
import { categories, getTreatmentsByCategory, type TreatmentCategory } from "@/data/treatments";
import { concerns, doctors, equipment, events, homeFaq, promises, spaces, visitSteps } from "@/data/content";
import { preload } from "react-dom";
import { ButtonLink, Placeholder, SectionTitle, TextLink } from "@/components/ui";
import HeroVideo from "@/components/HeroVideo";
import { absoluteUrl, assetPath } from "@/lib/config";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: absoluteUrl("/"),
    siteName: site.nameKo,
    locale: "ko_KR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
    images: [OG_IMAGE.url],
  },
};

const categoryKeys = Object.keys(categories) as TreatmentCategory[];

export default function Home() {
  return (
    <>
      <Hero />
      <PromiseSection />
      <Concerns />
      <Treatments />
      <Signature />
      <Doctors />
      <Process />
      <Space />
      <EquipmentStrip />
      <Events />
      <Faq />
      <Visit />
    </>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  const poster = assetPath(videos.heroPoster);
  // 포스터를 먼저 받아 첫 화면(LCP)을 빠르게 그립니다.
  preload(poster, { as: "image", fetchPriority: "high" });

  return (
    <section className="relative isolate overflow-hidden bg-ivory">
      {/* 배경 영상
          · 모바일: 화면 위쪽 68%에 영상, 얼굴이 가운데 오도록 맞추고 텍스트는 그 아래
          · 데스크톱: 섹션 전체 배경, 인물이 오른쪽이라 텍스트는 왼쪽 */}
      <HeroVideo
        src={assetPath(videos.hero)}
        poster={poster}
        className="absolute inset-x-0 top-0 h-[68svh] w-full object-[60%_center] lg:inset-y-0 lg:h-full lg:object-center"
      />

      {/* 가독성용 그라데이션 — 모바일: 영상 아래쪽을 아이보리로 녹임 / 데스크톱: 왼쪽 → 오른쪽 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[68svh] bg-linear-to-t from-ivory from-0% via-ivory/50 via-25% to-ivory/0 to-55% lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-linear-to-r from-ivory/95 from-0% via-ivory/75 via-30% to-ivory/0 to-60% lg:block"
      />

      <div className="container-page flex flex-col pb-16 pt-[54svh] lg:min-h-[calc(100svh-164px)] lg:justify-center lg:py-24">
        <div className="max-w-xl lg:max-w-[500px]">
          <p className="eyebrow animate-fade-up">{site.tagline}</p>
          <h1
            className="mt-5 animate-rise font-serif-kr text-[2.35rem] leading-[1.35] text-ink sm:text-5xl sm:leading-[1.3] xl:text-[3.5rem]"
            style={{ animationDelay: "100ms" }}
          >
            피부 본연의 빛을,{" "}
            <br />
            가장 <em className="not-italic text-gold-deep">정직한</em> 방법으로
          </h1>
          <p
            className="mt-6 max-w-md animate-rise text-ink-soft md:text-[17px]"
            style={{ animationDelay: "200ms" }}
          >
            피부과 전문의가 직접 진단하고, 정품·정량 원칙으로 시술합니다.
            <br className="hidden sm:block" />
            과하지 않게, 오래 아름답도록.
          </p>
          <div
            className="mt-9 flex animate-fade-up flex-wrap gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <ButtonLink href="/reservation">예약 · 상담하기</ButtonLink>
            <ButtonLink href="/treatments" variant="outline" className="bg-white/60 backdrop-blur-sm">
              진료과목 보기
            </ButtonLink>
          </div>

          <dl
            className="mt-12 grid max-w-md animate-fade-up grid-cols-3 border-t border-ink/15 pt-6"
            style={{ animationDelay: "400ms" }}
          >
            {[
              ["3인", "피부과 전문의"],
              ["1:1", "맞춤 진단"],
              ["100%", "정품 · 정량"],
            ].map(([num, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl text-ink">{num}</dd>
                <dd className="mt-1 text-[13px] text-ink-soft">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ───────── Promise ───────── */
function PromiseSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="Our Promise"
            title={
              <>
                화려함보다 정확함을,
                <br />
                유행보다 당신의 피부를
              </>
            }
            desc="뤼미에르는 세 가지 원칙을 지킵니다. 필요한 만큼만, 정확하게, 끝까지 책임지는 진료."
          />
          <div data-reveal className="relative mt-12 aspect-[4/3] overflow-hidden">
            <Image
              src={assetPath(images.philosophy)}
              alt="하얀 천 위에 놓인 스킨케어 제품"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7 lg:pt-8">
          {promises.map((p, i) => (
            <li
              key={p.no}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-10 last:border-b md:gap-10"
            >
              <span className="font-display text-5xl leading-none text-gold">{p.no}</span>
              <div>
                <p className="font-display text-sm tracking-[0.25em] text-ink-mute uppercase">{p.en}</p>
                <h3 className="mt-2 font-serif-kr text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── Concerns (고민별 찾기) ───────── */
function Concerns() {
  return (
    <section className="border-y border-line bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          align="center"
          eyebrow="Find by Concern"
          title="어떤 고민이 있으신가요?"
          desc="고민을 선택하면 알맞은 진료를 안내해 드립니다."
        />
        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-3">
          {concerns.map((item, i) => (
            <li key={item.key} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
              <Link href={`/treatments/${item.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={assetPath(`/images/concerns/${item.key.toLowerCase()}.jpg`)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-gold-deep md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-ink-soft md:text-[15px]">{item.desc}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Treatments ───────── */
function Treatments() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Treatments"
            title="아름다움과 건강, 두 가지 모두를 위한 진료"
            desc="미용 시술부터 피부 질환 치료까지, 전문의가 원인을 먼저 봅니다."
          />
          <div data-reveal>
            <TextLink href="/treatments">진료과목 전체보기</TextLink>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {categoryKeys.map((key) => (
            <div key={key} data-reveal>
              <div className="flex items-baseline justify-between border-b border-ink pb-4">
                <h3 className="font-serif-kr text-xl text-ink">{categories[key].ko}</h3>
                <span className="font-display text-lg italic text-gold-deep">{categories[key].en}</span>
              </div>
              <ul>
                {getTreatmentsByCategory(key).map((t) => (
                  <li key={t.slug} className="border-b border-line">
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="group grid grid-cols-[1fr_auto] items-center gap-4 py-6 transition-colors"
                    >
                      <div>
                        <p className="flex flex-wrap items-baseline gap-x-3">
                          <span className="text-lg font-semibold text-ink transition-colors group-hover:text-gold-deep">
                            {t.ko}
                          </span>
                          <span className="font-display text-[15px] tracking-wide text-ink-mute">{t.en}</span>
                        </p>
                        <p className="mt-1 text-[15px] text-ink-soft">{t.summary}</p>
                      </div>
                      <span className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Signature ───────── */
function Signature() {
  return (
    <section className="relative bg-ink text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[640px]">
          <Image
            src={assetPath(images.signature)}
            alt="편안히 누운 인물의 옆얼굴과 턱선 — 연출 이미지"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 md:px-16 lg:py-24 xl:px-24">
          <div data-reveal className="max-w-lg">
            <p className="eyebrow !text-gold-soft">Signature Program</p>
            <h2 className="mt-5 font-serif-kr text-3xl leading-snug md:text-4xl md:leading-snug">
              층별로 설계하는
              <br />
              뤼미에르 시그니처 리프팅
            </h2>
            <p className="mt-6 text-ivory/75 md:text-[17px]">
              같은 장비라도 누가, 어떻게 설계하느냐에 따라 결과가 달라집니다. 피부 두께와 처짐 방향을 분석해
              초음파와 고주파 에너지를 층별로 배분합니다.
            </p>
            <ul className="mt-8 space-y-3 border-t border-white/15 pt-8 text-[15px] text-ivory/85">
              {["전문의 1:1 피부 두께 분석", "정품 팁 개봉 확인 · 샷 수 안내", "시술 후 경과 체크"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-5 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href="/treatments/lifting" variant="light">
                리프팅 자세히 보기
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Doctors ───────── */
function Doctors() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          align="center"
          eyebrow="Doctors"
          title="피부과 전문의가 직접 진료합니다"
          desc="각 분야를 깊이 있게 다뤄 온 세 명의 전문의가 협진합니다."
        />
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {doctors.map((d, i) => (
            <li
              key={d.name}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              className="group"
            >
              <Placeholder label="Doctor Photo" arch className="aspect-[3/4]" />
              <div className="mt-6 text-center">
                <p className="text-[13px] tracking-wider text-gold-deep">{d.specialty}</p>
                <p className="mt-2 font-serif-kr text-2xl text-ink">
                  {d.name} <span className="text-base text-ink-soft">{d.role}</span>
                </p>
                <p className="mt-1 text-sm text-ink-mute">피부과 전문의</p>
              </div>
            </li>
          ))}
        </ul>
        <div data-reveal className="mt-14 text-center">
          <TextLink href="/doctors">의료진 소개</TextLink>
        </div>
      </div>
    </section>
  );
}

/* ───────── Process (첫 방문 진료 과정) ───────── */
function Process() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="First Visit"
            title={
              <>
                처음 오시는 분도
                <br />
                편안하도록
              </>
            }
            desc="예약부터 사후 관리까지, 뤼미에르의 진료는 이렇게 진행됩니다."
          />
          <div data-reveal className="relative mt-10 aspect-[4/3] overflow-hidden">
            <Image src={assetPath(images.consultation)} alt="차 한 잔을 사이에 두고 대화하는 두 사람의 손" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-4">
          <ol>
            {visitSteps.map((s, i) => (
              <li
                key={s.en}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0 md:gap-10"
              >
                {i < visitSteps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[27px] top-14 w-px bg-line" />
                )}
                <span className="relative flex size-14 items-center justify-center rounded-full border border-gold bg-ivory font-display text-xl text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2">
                  <p className="font-display text-sm tracking-[0.25em] text-ink-mute uppercase">{s.en}</p>
                  <h3 className="mt-1 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div data-reveal className="mt-12 pl-20 md:pl-24">
            <ButtonLink href="/reservation">예약 · 상담하기</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Space (공간 소개) ───────── */
function Space() {
  const [main, ...rest] = spaces;
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Space"
            title="머무는 시간까지 편안하도록"
            desc="프라이빗한 동선과 1인 1실 시술실로 설계된 공간입니다."
          />
          <div data-reveal>
            <TextLink href="/about">병원 둘러보기</TextLink>
          </div>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-3">
          <figure data-reveal className="md:col-span-2 md:row-span-2">
            <Placeholder label={main.label} size="1600 × 1200" className="aspect-[4/3] w-full" />
            <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[15px]">
              <span className="font-semibold text-ink">{main.name}</span>
              <span className="text-ink-soft">{main.desc}</span>
            </figcaption>
          </figure>
          {rest.slice(0, 2).map((s, i) => (
            <figure key={s.label} data-reveal style={{ ["--reveal-delay" as string]: `${(i + 1) * 90}ms` }}>
              <Placeholder label={s.label} size="800 × 600" className="aspect-[4/3] w-full" />
              <figcaption className="mt-3 text-[15px] font-semibold text-ink">{s.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Equipment strip ───────── */
function EquipmentStrip() {
  return (
    <section className="border-y border-line bg-cream py-20 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <SectionTitle
            eyebrow="Equipment"
            title="검증된 정품 장비"
            desc="FDA·식약처 허가를 받은 정품 장비만 사용하며, 정기 점검으로 최상의 상태를 유지합니다."
          />
          <div data-reveal className="mt-8">
            <TextLink href="/equipment">보유장비 전체보기</TextLink>
          </div>
        </div>
        <ul data-reveal className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
          {equipment.slice(0, 8).map((e) => (
            <li key={e.en} className="border-b border-r border-line bg-ivory/60 px-5 py-6">
              <p className="font-display text-lg leading-tight text-ink">{e.en}</p>
              <p className="mt-1 text-[13px] text-ink-mute">{e.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Events ───────── */
function Events() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle eyebrow="Events" title="이달의 뤼미에르" />
          <div data-reveal>
            <TextLink href="/events">이벤트 전체보기</TextLink>
          </div>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {events.map((ev, i) => (
            <li
              key={ev.slug}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <Link
                href={`/events#${ev.slug}`}
                className="group flex h-full flex-col border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_30px_60px_-35px_rgba(127,100,52,0.45)]"
              >
                <span className="font-display text-lg italic text-gold-deep">{ev.tag}</span>
                <h3 className="mt-4 font-serif-kr text-xl text-ink">{ev.title}</h3>
                <p className="mt-3 flex-1 text-[15px] text-ink-soft">{ev.subtitle}</p>
                <p className="mt-8 flex items-center justify-between border-t border-line pt-5 text-[13px] text-ink-mute">
                  {ev.period}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function Faq() {
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle
            eyebrow="FAQ"
            title="자주 묻는 질문"
            desc="더 궁금한 점은 카카오톡이나 전화로 편하게 문의해 주세요."
          />
          <div data-reveal className="mt-8">
            <TextLink href="/reservation">문의하기</TextLink>
          </div>
        </div>
        <div data-reveal className="border-t border-ink lg:col-span-8">
          {homeFaq.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="mr-3 font-display text-xl text-gold-deep">Q.</span>
                  {f.q}
                </span>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-ink-soft transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="pb-7 pl-9 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Visit ───────── */
function Visit() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6 lg:aspect-auto">
          <Image
            src={assetPath(images.visit)}
            alt="정갈하게 놓인 타월과 스킨케어 용품"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionTitle eyebrow="Visit Us" title="뤼미에르에서 기다리겠습니다" />
          <dl data-reveal className="mt-10 divide-y divide-line border-y border-line">
            {site.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-4">
                <dt className="text-ink-soft">{h.day}</dt>
                <dd className="font-medium tabular-nums text-ink">{h.time}</dd>
              </div>
            ))}
          </dl>
          <div data-reveal className="mt-8 space-y-3 text-[15px] text-ink-soft">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              {site.address}
            </p>
            <p className="flex gap-3">
              <TrainFront aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
              {site.subway}
            </p>
          </div>
          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/reservation">예약 · 상담하기</ButtonLink>
            <ButtonLink href="/location" variant="outline">
              오시는 길
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
