# Frontend Engineer Resume

## 한 줄 소개

제품의 문제를 이해하고, 사용자 경험과 운영 품질을 함께 개선해 온 프론트엔드 중심 제품 개발자입니다.

## Summary

- React·TypeScript·Next.js 기반 제품에서 복잡한 상태·도메인·UI 로직을 나누고 사용자 흐름을 구현했습니다.
- 디자인 시스템·공통 라이브러리·Playwright E2E·CI/CD를 통해 여러 제품의 개발과 운영 기준을 정리했습니다.
- M365 Web Add-in, 보안 교육 제품, 문서보안 제품, 실시간 사이드 프로젝트에서 화면·API·인증·배포 경계를 함께 다뤘습니다.

## Skills

**Frontend** React · Next.js · TypeScript · TanStack Query · Redux Toolkit · Vite · Webpack · Storybook

**UX & Quality** State Management · Form Validation · Responsive UI · Accessibility · WebSocket · Playwright · Virtualization · Code Splitting

**Integration & Platform** Node.js · Express · REST API · Microsoft Graph API · Office.js · OAuth PKCE · GitLab CI/CD · Jenkins · Vercel

**AI Product** OpenAI SDK · LangChain · LLM Feature Integration · Prompt Context Design · Design System MCP

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### Frontend Platform · 2025–2026

- 기존 C#/.NET Outlook 클라이언트를 Office.js 기반 M365 Web Add-in으로 전환하고 React·TypeScript 모노레포에서 `mindsat`, `eco`, `m365`, `shared` 경계를 분리했습니다.
- Node.js·Express 서버는 Microsoft Graph API와 테넌트 컨텍스트에 집중시키고, 제품 API는 각 도메인에서 호출하도록 책임을 나눴습니다.
- 고객사별 제품 활성화·API URL·Azure AD·dev/prod manifest를 분리해 멀티테넌트 운영 구조를 구성했습니다.
- Mind-SAT 보안 교육 제품에서 OTP/MFA 인증, 교육 플레이어, 퀴즈, 모바일 화면, 관리자 통계 대시보드 등 핵심 사용자 흐름을 개발했습니다.
- 신뢰할 수 없는 훈련 메일 콘텐츠를 CSP·DOM Sanitizing으로 정제하고 허용되지 않은 태그·속성·외부 리소스 실행을 제한했습니다.
- 초기 로딩·대용량 렌더링 병목을 Code Splitting·Dynamic Import·Virtualization·debounce/throttle로 분해했습니다.
- 공통 UI 라이브러리와 디자인 시스템을 여러 사내 시스템·제품으로 확장하고, 컴포넌트·훅·아이콘·컬러 토큰의 사용 기준을 정리했습니다.
- Jenkins 기반으로 디자인 시스템·프론트엔드·Outlook Add-in의 lint/typecheck·build·artifact·환경별 배포와 롤백 기준을 표준화했습니다.

#### AI 제품 통합 · 2026

- Python AI 백엔드의 문서 생성·메일 템플릿 추천 기능을 사용자 상태 조회·결과 표시·수동 리뷰 흐름과 연결했습니다.
- 생성 결과가 제품 화면에 안전하게 표시되도록 sanitize 처리와 발신자 페르소나 선택 흐름을 구현했습니다.
- 사내 디자인 시스템 정보를 AI Agent가 조회하도록 MCP로 구조화해 React·TypeScript UI 개발의 표준 사용 경로를 만들었습니다.
- npm install 시점의 lifecycle script, lockfile, semver, dependency tree를 점검하는 `npm-supply-chain-guard`를 개발해 팀 개발 환경의 보안 가드레일을 구성했습니다.

#### Fullstack Product · 2023–2024

- WebForms 기반 인사·재무·고객 관리 시스템을 React·ASP.NET Core·MSSQL 구조로 점진적으로 전환했습니다.
- 마케팅 방문 로그와 사내 행사 로그를 통합한 내부 서비스를 React·ASP.NET Core·MSSQL로 기획부터 운영까지 개발했습니다.
- GitLab CI/CD와 ERP 동기화 로직을 구성해 화면 개발과 운영 데이터 흐름을 연결했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- Next.js·WebSocket 기반 음악 실시간 서비스에서 OAuth PKCE, 다중 사용자 상태, 무대 애니메이션, moderation, playlist·DJ 대기열 흐름을 구현했습니다.
- Playwright BrowserContext와 storageState로 다중 사용자 세션을 분리해 로그인부터 퇴장까지의 상태 전이를 E2E로 검증했습니다.
- Vercel Preview와 GitHub Actions E2E를 연결하고 readiness helper·role 기반 selector로 CI 환경의 flaky 실패를 줄였습니다.

### Elice · React Tutor · 2022.11 – 2023.04

- 약 120명의 예비 개발자를 대상으로 React 컴포넌트·Hook·상태 관리 실습과 코드 리뷰를 진행했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
