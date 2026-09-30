# medical-dermatology

LUMIÈRE(뤼미에르) 피부과 홈페이지. 청결하고 세련된 프리미엄 톤(화이트 + 샴페인 골드·베이지)의 병원 사이트입니다.

> 병원명, 의료진, 주소, 연락처 등은 모두 **가상 데이터**입니다. `src/data/` 에서 실제 정보로 교체하세요.

## 기술 스택

- Next.js 16 (App Router, 정적 생성) · React 19 · TypeScript
- Tailwind CSS 4 · lucide-react
- 폰트: Cormorant, 나눔명조 (next/font), Pretendard (self-hosted)
- Node.js 20.9 이상

## 실행

```bash
npm install     # 처음 1회
npm run dev     # http://localhost:3000/project/derma_clinic
npm run build   # 배포용 빌드
npm start       # 빌드 결과 실행
npm run lint
```

## 구조

```
src/
├─ app/          페이지 (폴더 = 주소), sitemap · robots · manifest · 공유 이미지(og)
├─ components/   헤더, 푸터, 배경 영상, 공통 UI
├─ data/         병원 정보 · 진료과목 · 의료진 · 장비 · 이벤트 (콘텐츠는 여기서 수정)
└─ lib/          주소 설정(config) · SEO · 구조화 데이터(schema)
public/          영상 · 이미지 (public/images/섹션/파일명.jpg)
docs/            인수인계서 (handover.html)
```

## 배포 전 확인

- `src/lib/config.ts` 의 `BASE_PATH` 를 `""` 로 변경 (로컬 구분용 `/project/derma_clinic` 접두어 제거)
- 환경변수 `NEXT_PUBLIC_SITE_URL` 에 실제 도메인 설정 (canonical · sitemap · 공유 이미지 주소)
- 가상 데이터, 샘플 이미지를 실제 정보·사진으로 교체

자세한 유지보수 방법은 [`docs/handover.html`](docs/handover.html) 을 참고하세요.
