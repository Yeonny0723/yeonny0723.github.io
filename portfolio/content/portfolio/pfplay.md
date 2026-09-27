# PFPlay — 실제 사용자가 있는 실시간 제품

PFPlay는 5인 팀으로 만든 음악 기반 실시간 서비스로, 한 사용자의 화면만 정상적으로 보이는 것만으로는 다중 사용자 상태와 실시간 이벤트를 검증할 수 없었습니다. Next.js·WebSocket 기반으로 OAuth PKCE 인증, 무대 애니메이션, moderation, playlist·DJ 대기열과 퇴장 흐름을 구현하고, Playwright BrowserContext와 storageState로 여러 사용자의 세션을 분리해 로그인부터 파티룸·재생·퇴장까지 상태 전이를 반복 검증했습니다.

GCP에서 Vercel로 배포 환경을 이전하고 Preview·GitHub Actions E2E를 연결했으며, readiness helper와 role 기반 selector로 CI 환경의 flaky 실패를 줄였습니다. 기능 구현과 함께 실제 사용자가 있는 서비스의 배포·검증·운영까지 연결한 경험을 통해, 실시간 제품은 화면 구현보다 상태 전파와 실패 시나리오를 재현 가능한 테스트로 만드는 일이 중요하다는 기준을 갖게 되었습니다.
