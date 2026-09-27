# Frontend Engineer Resume

## 한 줄 소개

복잡한 상태와 도메인·UI 로직을 나누고, 사용자가 끝까지 완료할 수 있는 흐름을 E2E와 운영 기준으로 검증해 온 프론트엔드 중심 제품 개발자입니다.

## Summary

- 상태·비즈니스·도메인·UI 로직이 한 화면에 섞이면 변경 범위를 추적하기 어려워, 기능·제품·M365 통합 경계를 분리했습니다.
- 레거시 Outlook 클라이언트를 M365 Web Add-in으로 전환하고 멀티테넌트 모노레포·Provider 계층을 구성해 고객사별 설정과 제품 기능의 변경 영향을 줄였습니다.
- 대량 데이터·실시간 상태·외부 콘텐츠를 다루며 한 번에 그리는 양과 이벤트 빈도를 줄이고, 외부 콘텐츠는 실행 가능한 코드가 섞이지 않도록 정제했습니다.
- 디자인 시스템·Playwright E2E·CI/CD를 공통 개발 기준으로 연결해 반복 개발과 배포 검증의 속도·일관성을 높였습니다.

## Skills

**Frontend** React · Next.js · TypeScript · TanStack Query · Redux Toolkit · Vite · Webpack · Storybook · Design System

**UX & Quality** State Management · Form Validation · Responsive UI · Accessibility · WebSocket · Playwright · Virtualization · Code Splitting

**Integration & Platform** Node.js · Express · REST API · Microsoft Graph API · Office.js · OAuth PKCE · GitLab CI/CD · Jenkins · Vercel

**Security & AI Product** CSP · DOM Sanitizing · OpenAI SDK · LangChain · MCP · LLM Feature Integration

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### Frontend Platform · 2025–2026

- 기존 C#/.NET Outlook 클라이언트를 새로운 Outlook 환경에서도 확장할 수 있도록 Office.js 기반 M365 Web Add-in으로 전환하고, 제품 기능과 M365 연동 코드를 분리했습니다.
- 브라우저 환경·로그인 정보·메일 컨텍스트를 화면에서 직접 다루면 고객사별 예외가 퍼질 수 있어 공통 Provider와 client/service 계층으로 감쌌습니다.
- 고객사별 제품 활성화·API URL·Azure AD·dev/prod manifest가 달라지는 문제에 대응하기 위해 테넌트 설정과 제품 도메인을 분리했습니다.
- OTP/MFA·교육 플레이어·퀴즈·관리자 통계처럼 상태가 많은 화면을 구현하고, 훈련 메일은 CSP·DOM Sanitizing으로 외부 스크립트·허용되지 않은 태그·리소스 실행을 제한했습니다.
- 대량 목록을 한 번에 그리거나 첫 화면에 모든 코드를 불러오면 반응성이 떨어져, 필요한 데이터와 코드를 나눠 불러오고 검색·resize 같은 반복 이벤트는 일정 간격으로 처리했습니다.
- 공통 UI 라이브러리·디자인 시스템·Jenkins 배포 기준을 정리해 컴포넌트 재사용과 lint/typecheck·build·artifact·환경별 배포를 표준화했습니다.

#### AI 제품 통합 · 2026

- AI 결과를 제품 화면에 표시할 때 생성 결과의 안전성과 사용자 리뷰가 필요해 sanitize 처리·상태 조회·수동 리뷰 흐름을 구현하고, 사내 디자인 시스템을 조회하는 MCP를 React·TypeScript 개발 흐름에 연결했습니다.
- 팀 개발 환경의 install script·lockfile·semver 위험을 줄이기 위해 `npm-supply-chain-guard`를 개발하고 patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다.

#### Fullstack Product · 2023–2024

- 사용자 요구와 레거시 업무 흐름을 React·ASP.NET Core·MSSQL 구조로 전환하고, 화면·API·데이터 모델·쿼리 책임을 분리했습니다.
- 중복 fetch·느린 개발 서버·수동 배포 문제를 TanStack Query·Vite·GitLab CI/CD·ERP Scheduler로 정리해 데이터 갱신·빌드·배포·기준 데이터 반영을 반복 가능한 흐름으로 만들었습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- WebSocket 기반 다중 사용자 상태에서 인증·playlist·moderation·DJ 대기열 흐름을 구현하고, 상태 전파와 퇴장까지 Playwright BrowserContext 다중 세션으로 검증했습니다.
- 실시간 서비스의 배포 리스크를 줄이기 위해 GCP에서 Vercel로 이전하고 Preview·GitHub Actions E2E를 연결했습니다.

### Elice · React Tutor · 2022.11 – 2023.04

- 학습자별 React 이해도 차이를 고려해 컴포넌트·Hook·상태 관리 실습을 설명하고 약 120명의 코드 리뷰를 진행했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
