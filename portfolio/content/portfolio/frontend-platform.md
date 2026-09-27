# 화면에서 플랫폼까지 이어지는 프론트엔드

보안교육과 문서 협업 제품은 인증·권한·외부 콘텐츠·관리자 통계처럼 상태가 많은 흐름을 사용자가 끝까지 완료할 수 있게 만들어야 하고, 동시에 여러 고객사와 새로운 Outlook 환경을 지원해야 했습니다. 이를 위해 C#/.NET 레거시 Outlook 클라이언트를 React·TypeScript 기반 M365 Web Add-in으로 전환하고, 제품 도메인과 M365 통합 계층을 모노레포 안에서 분리했습니다. Office runtime 접근은 provider/service 계층으로 감싸 화면 컴포넌트에 흩어지지 않게 했으며, 제품별 사용자 흐름은 기능 단위로 나눠 변경 범위를 좁혔습니다.

제품 화면에서는 OTP/MFA 인증부터 교육 플레이어·퀴즈·관리자 통계까지 이어지는 흐름을 구현하고, 훈련 메일과 외부 콘텐츠는 CSP·DOM Sanitizing으로 표시 범위를 제한했습니다. 대량 신고 이력과 초기 로딩 문제에는 Virtualization·Code Splitting·Dynamic Import를 적용하고, 검색·resize·동영상 이벤트는 debounce/throttle로 처리해 화면 반응성을 높였습니다.

반복되는 UI는 공통 컴포넌트·훅·아이콘·컬러 토큰과 Storybook·TypeDoc 문서화 기준으로 묶어 디자인 시스템으로 확장했습니다. Jenkins·GitLab CI/CD와 Playwright E2E를 연결해 기능이 동작하는지만 확인하는 데서 그치지 않고, 실제 사용자 흐름·배포 산출물·롤백 대상을 같은 개발 흐름에서 검증할 수 있는 프론트엔드 플랫폼을 만들었습니다.
