import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/config";

const nextConfig: NextConfig = {
  // 주소 접두어 — 값은 src/lib/config.ts 에서 관리합니다.
  basePath: BASE_PATH || undefined,

  images: {
    // 샘플 이미지(Unsplash). 실제 병원 사진으로 교체 후에는 public/ 로 옮기고 이 설정을 제거해도 됩니다.
    // 주의: public/ 의 사진을 next/image 로 쓸 때는 assetPath("/images/...") 로 basePath 를 붙이세요.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },

  // http://localhost:3000 으로 들어와도 사이트로 이동
  async redirects() {
    if (!BASE_PATH) return [];
    return [{ source: "/", destination: BASE_PATH, basePath: false, permanent: false }];
  },
};

export default nextConfig;
