import Link from "next/link";

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-ink" : "text-ivory";
  return (
    <Link href="/" className="group inline-flex flex-col leading-none">
      <span className={`font-display text-[1.7rem] font-medium tracking-[0.18em] ${main}`}>
        LUMIÈRE
      </span>
      <span
        className={`mt-1 text-[10px] font-medium tracking-[0.42em] ${
          tone === "dark" ? "text-gold-deep" : "text-gold-soft"
        }`}
      >
        DERMATOLOGY
      </span>
      <span className="sr-only">뤼미에르 피부과 홈</span>
    </Link>
  );
}
