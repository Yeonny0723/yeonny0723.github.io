# PFPlay — 실제 사용자가 있는 실시간 제품

PFPlay는 5인 팀으로 만든 음악 기반 실시간 서비스입니다. Next.js·WebSocket 기반으로 OAuth PKCE 인증, 다중 사용자 상태, 무대 애니메이션, moderation, playlist 등록·재생, DJ 대기열과 퇴장 흐름을 구현했습니다.

실시간 기능은 한 명의 화면만 확인해서는 충분하지 않았습니다. Playwright BrowserContext와 storageState로 여러 사용자의 세션을 분리하고, 로그인 → 파티룸 → 플레이리스트 → DJ 대기열 → 디제잉 → 퇴장의 상태 전이를 반복 검증했습니다. Vercel Preview와 GitHub Actions E2E를 연결하고 readiness helper·role 기반 selector를 적용해 CI 환경의 flaky 실패를 줄였습니다.

이 프로젝트에서는 기능 구현과 함께 실제 사용자가 있는 서비스의 배포·검증·운영까지 경험했습니다.
