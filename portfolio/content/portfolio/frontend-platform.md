# 화면에서 플랫폼까지 이어지는 프론트엔드

M365 Web Add-in 전환에서는 레거시 Outlook 클라이언트의 사용자 흐름을 유지하면서 새로운 Outlook 환경과 멀티테넌트 운영을 지원해야 했습니다. React·TypeScript 모노레포 안에서 제품 도메인과 M365 통합 계층을 나누고, Office runtime 접근을 provider/service 계층으로 감쌌습니다.

제품 화면에서는 OTP/MFA 인증, 교육 플레이어, 퀴즈, 관리자 통계처럼 상태가 많은 흐름을 구현했습니다. 대용량 렌더링은 Virtualization·Code Splitting·Dynamic Import로 나누고, 이벤트 빈도는 debounce/throttle로 제어했습니다.

공통 UI 라이브러리와 디자인 시스템은 컴포넌트·훅·아이콘·컬러 토큰·문서화·배포 기준까지 포함하는 개발 플랫폼으로 확장했습니다. Playwright E2E와 Jenkins/GitLab CI/CD를 연결해 기능 구현 후 실제 사용자 흐름과 배포 산출물까지 검증했습니다.
