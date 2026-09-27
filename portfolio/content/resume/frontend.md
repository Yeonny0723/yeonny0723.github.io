# Frontend Engineer Resume

## 한 줄 소개

복잡한 상태와 도메인·UI 로직을 나누고, 사용자가 끝까지 완료하는 흐름을 성능·보안·E2E 기준으로 검증해 온 프론트엔드 중심 제품 개발자입니다.

## Summary

- **제품 전환** — 레거시 Outlook 클라이언트를 M365 Web Add-in으로 전환하고, 제품 기능·M365 연동·고객사 설정을 분리했습니다.
- **사용자 흐름** — 보안 교육·문서 협업·실시간 서비스에서 인증부터 완료까지의 상태와 예외 흐름을 구현했습니다.
- **개발 기반** — 디자인 시스템·성능 최적화·Playwright E2E·CI/CD를 연결해 반복 개발과 배포 검증의 기준을 만들었습니다.

## Skills

**Frontend** React · Next.js · TypeScript · TanStack Query · Redux Toolkit · Vite · Webpack · Storybook · Design System

**UX & Quality** State Management · Form Validation · Responsive UI · Accessibility · WebSocket · Playwright · Virtualization · Code Splitting

**Integration & Platform** Node.js · Express · REST API · Microsoft Graph API · Office.js · OAuth PKCE · GitLab CI/CD · Jenkins · Vercel

**Security & AI Product** CSP · DOM Sanitizing · OpenAI SDK · LangChain · MCP · LLM Feature Integration

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### Frontend Platform · 2025–2026

- **레거시 Outlook 클라이언트의 M365 Web Add-in 전환** — 새로운 Outlook 환경과 여러 고객사를 지원할 수 있도록 기존 C#/.NET 클라이언트를 Office.js 기반 React·TypeScript 제품으로 전환했습니다.
  - **복잡성** — 제품 기능·M365 연동·고객사 설정이 한곳에 섞이면 새로운 환경 대응과 고객사별 변경이 서로 영향을 줄 수 있었습니다.
  - **판단과 구현** — 모노레포 안에서 제품 도메인·M365·shared 경계를 나누고, 브라우저 환경·로그인 정보·메일 컨텍스트는 Provider와 client/service 계층으로 분리했습니다.
  - **결과** — 제품 API, M365 연동, 고객사별 제품 활성화·API URL·Azure AD·dev/prod manifest를 독립적으로 관리할 수 있게 했습니다.

- **보안 교육 제품의 인증·교육·관리자 흐름 개발** — OTP/MFA 인증부터 교육 플레이어·퀴즈·관리자 통계까지 사용자가 교육을 시작해 완료하는 화면을 개발했습니다.
  - **보안 판단** — 훈련 메일과 외부 콘텐츠를 그대로 표시하면 스크립트나 허용되지 않은 리소스가 실행될 수 있어 CSP와 DOM Sanitizing으로 표시 범위를 제한했습니다.
  - **결과** — 사용자·관리자 역할별 화면과 모바일 흐름을 연결하고, 외부 콘텐츠를 안전한 형태로 제품 안에 표시했습니다.

- **제품 공통 디자인 시스템과 배포 기준 구축** — 여러 사내 시스템의 UI 패턴을 공통 컴포넌트·훅·아이콘·컬러 토큰으로 정리했습니다.
  - **판단과 구현** — Storybook·TypeDoc·생성 도구와 Jenkins를 연결하고, lint/typecheck·build·artifact·환경별 배포를 같은 흐름으로 구성했습니다.
  - **결과** — 반복 화면을 재사용 가능한 단위로 만들고, 배포 결과와 롤백 대상을 추적할 수 있게 했습니다.

- **프론트엔드 성능과 사용자 반응성 개선** — 대량 데이터·초기 로딩·고빈도 이벤트가 화면을 느리게 만드는 문제를 기능별로 나눠 개선했습니다.
  - **판단과 구현** — 대량 목록은 필요한 범위만 렌더링하고, 첫 화면에 필요한 코드만 먼저 불러오며, 검색·resize·동영상 이벤트는 일정 간격으로 처리했습니다.
  - **결과** — 대량 신고 이력의 필터·선택 UI 반응성과 초기 로딩을 개선하고 불필요한 렌더링과 중복 데이터 요청을 줄였습니다.

#### AI 제품 통합 · 2026

- **AI 생성 결과의 제품 화면 통합** — AI 결과를 사용자가 확인하고 수정할 수 있도록 상태 조회·결과 표시·수동 리뷰 흐름을 구현했습니다.
  - **보안 판단** — 생성 결과를 그대로 화면에 넣지 않고 sanitize 처리해 허용되지 않은 태그와 실행 가능한 내용을 제한했습니다.
  - **개발 기반** — 사내 디자인 시스템을 AI Agent가 조회하도록 MCP를 연결해, AI가 임의의 UI 규칙을 만들지 않고 실제 컴포넌트 기준을 참고하게 했습니다.

- **팀 개발 환경의 npm 공급망 보안 가드 개발** — 제품 기능과 별개로 팀원이 안전하게 의존성을 설치·변경할 수 있도록 `npm-supply-chain-guard`를 개발했습니다.
  - **문제** — `npm audit`만으로는 install script 실행, lockfile 누락, 느슨한 semver와 신규 릴리스 위험을 한 번에 확인하기 어려웠습니다.
  - **판단과 구현** — install·lockfile·semver·dependency tree·audit 결과를 함께 점검하고, patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다.
  - **결과** — 의존성 변경을 일반 코드 변경과 별도 기준으로 검토하는 팀 개발 보안 가드레일을 만들었습니다.

#### Fullstack Product · 2023–2024

- **레거시 업무 시스템의 React 전환** — 기존 업무 흐름을 유지하면서 WebForms 화면을 React·ASP.NET Core·MSSQL 구조로 바꾸었습니다.
  - **판단과 구현** — 화면·API·데이터 모델·쿼리 책임을 분리하고 목록·상세·수정·필터·집계 흐름을 단계적으로 전환했습니다.
  - **결과** — 노후 시스템을 유지보수·확장 가능한 구조로 바꾸고, 캐싱·페이지 조회·인덱스·DB view로 조회 부담을 줄였습니다.

- **개발·데이터 운영 흐름 자동화** — 중복 fetch·느린 개발 서버·수동 배포·ERP 기준 데이터 불일치 문제를 정리했습니다.
  - **판단과 구현** — TanStack Query·Vite·GitLab CI/CD·ERP Scheduler를 도입해 데이터 갱신·빌드·배포·기준 데이터 반영을 반복 가능한 흐름으로 만들었습니다.
  - **결과** — 개발 피드백과 배포 이력을 빠르게 확인하고, 동기화 실패 시 확인할 지점을 명확히 했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- **다중 사용자가 참여하는 실시간 음악 서비스 개발** — Next.js·WebSocket 기반으로 OAuth PKCE 인증, playlist·DJ 대기열·moderation 흐름을 구현했습니다.
  - **복잡성** — 한 사용자의 화면만 확인해서는 상태 전파와 퇴장 시나리오를 검증할 수 없었습니다.
  - **검증과 결과** — Playwright BrowserContext로 여러 사용자 세션을 분리해 로그인부터 퇴장까지 검증하고, GCP에서 Vercel로 이전해 Preview·GitHub Actions E2E를 연결했습니다.

### Elice · React Tutor · 2022.11 – 2023.04

- **React 실습과 코드 리뷰** — 학습자별 이해도 차이를 고려해 컴포넌트·Hook·상태 관리 실습을 설명하고 약 120명의 코드를 리뷰했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
