# PFPlay — 실제 사용자가 있는 실시간 제품

[GitHub](https://github.com/pfplay/pfplay-web) · 5인 팀 사이드 프로젝트 · Next.js · WebSocket · Playwright

여러 사용자가 함께 음악을 재생하는 실시간 서비스로, 한 사용자의 화면만으로는 다중 사용자 상태를 검증할 수 없었습니다. Playwright BrowserContext와 storageState로 여러 사용자의 세션을 분리해 로그인부터 파티룸·재생·퇴장까지 상태 전이를 반복 검증하고, GCP에서 Vercel로 이전하며 Preview·GitHub Actions E2E를 연결했습니다.

<figure class="diagram"><img src="/diagrams/placeholder-pfplay.svg" alt="임시 이미지: PFPlay 화면" loading="lazy"></figure>
