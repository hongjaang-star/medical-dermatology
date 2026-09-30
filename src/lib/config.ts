// ─────────────────────────────────────────────
// 사이트 주소 설정 (next.config.ts 와 앱 코드가 함께 사용)
// ─────────────────────────────────────────────

/**
 * 주소 접두어. 로컬에서 project/ 안의 다른 Next.js 사이트와 구분하기 위해 사용합니다.
 * 실제 도메인 루트에 배포할 때는 "" 로 바꾸세요.
 */
export const BASE_PATH = "/project/derma_clinic";

/**
 * 사이트 도메인 (canonical, sitemap, OG 절대주소에 사용).
 * 배포 시 환경변수 NEXT_PUBLIC_SITE_URL 에 실제 도메인을 넣으세요. 예) https://www.lumiere-derm.co.kr
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/** "/about" → "https://도메인/project/derma_clinic/about" */
export function absoluteUrl(path = "/") {
  const p = path === "/" ? "" : path;
  return `${SITE_URL}${BASE_PATH}${p}`;
}

/** public/ 파일 경로에 basePath 를 붙임 (next/image 의 로컬 src 에 사용) */
export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}
