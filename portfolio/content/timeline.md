<nav aria-label="연도별 바로가기">
  <a href="#timeline-2026">2026</a> ·
  <a href="#timeline-2025">2025</a> ·
  <a href="#timeline-2024">2024</a> ·
  <a href="#timeline-2023">2023</a> ·
  <a href="#timeline-2022">2022</a> ·
  <a href="#timeline-2021">2021</a>
</nav>

<div id="timeline-2026"></div>

## 2026

**Fasoo**

### Wrapsody 3.1 · 3.2

문서를 암호화하고 안전하게 공유하는 문서보안 솔루션입니다.

- **3.1 · AI 검색·RAG·Text2SQL 평가** — 동의어·다의어 질의의 검색 품질을 비교할 수 있도록 Golden Dataset과 단계별 LLM 평가 자동화 개발 · Python · RAG · Text2SQL · Playwright
- **3.2 · Agentic 문서 생성** — 사용자의 재진입과 리뷰 범위 축소를 고려해 필요한 추론 단계만 선택하는 멀티턴 문서 생성 기능 개발 · Python · OpenAI SDK · LangChain · Agentic Workflow

### Mind-SAT 2.5 · 2.6 · 2.7

메일 피싱 훈련과 보안교육을 제공하는 서비스입니다.

- **AI 콘텐츠 생성** — 훈련 메일 템플릿과 보안 퀴즈 생성 기능 개발 · Python · OpenAI SDK · LangChain · Prompt Engineering
- **AI 서버 고가용성** — 단일 장애 지점을 줄이기 위해 OCI 인스턴스 풀·로드 밸런싱 기반 장애 복구 구조 구축 · OCI · High Availability · Load Balancing
- **핵심 운영 시나리오 E2E** — 피싱 훈련·퀴즈·라이선스·외부 메일 연동을 검증하는 다중 권한 E2E 자동화 개발 · Playwright · Jenkins · CI/CD

### 공통 개발 도구

- **디자인 시스템 MCP** — 여러 제품의 AI UI 개발을 위해 사내 컴포넌트 기준을 조회하는 MCP 서버 개발 · TypeScript · MCP · Storybook
- **npm 공급망 보안 플러그인** — install script·lockfile·dependency tree를 검증하고 의존성 변경 기준을 자동화 · Claude Code Plugin · npm · Dependency Security
- **Claude Code 업무 표준화** — 커밋·PR·이슈·퍼블리싱 작업을 공통 skill workflow로 표준화 · Claude Code · Plugin Development

**개인 프로젝트**

- **agent-orchestration 개발 하네스** — 작업 규모에 따라 spec 승인·TDD·테스트 검증 절차를 선택하는 AI Agent 개발 도구를 단독 설계·개발 · Claude Code · Codex · TDD · Mutation Testing

<div id="timeline-2025"></div>

## 2025

**Fasoo**

### Wrapsody eCo 2.7

보안 문서를 Outlook에서 공유·열람·협업할 수 있게 하는 M365 Web Add-in 플랫폼입니다.

- **M365 멀티테넌트 플랫폼** — 레거시 Outlook 클라이언트를 고객사별 설정과 제품 경계가 분리된 Web Add-in으로 전환 · React · TypeScript · Office.js · Microsoft Graph API
- **보안 문서 협업 기능** — 메일 작성·문서 첨부·수신 메일 처리 흐름과 고객사별 호환성·다국어 기능 개발 · React · Office.js · Node.js

### Mind-SAT 2.3 · 2.4

메일 피싱 훈련부터 보안교육 이수와 관리자 통계까지 제공하는 서비스입니다.

- **보안교육 제품 화면** — 인증·피싱 신고·교육·퀴즈·관리자 대시보드·모바일 화면 개발 및 외부 콘텐츠 보안 처리 · React · TypeScript · OTP/MFA · CSP
- **프론트엔드 성능** — 대량 신고 이력과 초기 로딩을 고려해 virtualization·code splitting·dynamic import 적용 · React · Vite · Web Performance
- **제품 공통 디자인 시스템** — 세 제품에서 재사용할 디자인 토큰·컴포넌트·접근성 기준 개발 · React · TypeScript · Storybook · TypeDoc
- **배포 자동화** — 디자인 시스템·프론트엔드·Outlook Add-in의 검증·빌드·artifact·환경별 배포 자동화 · Jenkins · CI/CD

**PFPlay**

다중 사용자가 함께 음악을 재생하고 상호작용하는 실시간 서비스입니다.

- **실시간 서비스 개발·운영** — 다중 사용자 상태와 DJ 대기열·moderation을 구현하고 E2E·Preview 배포까지 연결 · Next.js · WebSocket · OAuth PKCE · Playwright · Vercel

<div id="timeline-2024"></div>

## 2024

**Fasoo 사내 업무 시스템**

인사·결재·고객 관리 등 사내 업무를 처리하는 시스템을 개발했습니다.

- **레거시 시스템 마이그레이션** — 기존 업무 흐름의 호환성을 고려해 WebForms를 React·ASP.NET Core·MSSQL 구조로 전환 · React · ASP.NET Core · MSSQL · REST API
- **공통 UI 라이브러리** — 여러 사내 시스템의 재사용성과 문서화를 높이는 npm 라이브러리 개발 · React · TypeScript · Storybook · TypeDoc · GitLab Packages
- **프론트엔드 개발 환경** — 서버 상태와 빌드 피드백을 개선하기 위해 TanStack Query·Vite·Yarn Berry 도입 · TypeScript · TanStack Query · Vite · Yarn Berry
- **CI/CD 파이프라인** — 수동 배포와 롤백 추적 문제를 줄이는 build/deploy 자동화 · GitLab CI/CD · PowerShell · IIS · MSBuild
- **ERP 기준 데이터 동기화** — 인사·재무 ERP와 업무 시스템의 기준 데이터를 주기적으로 동기화 · MSSQL · SQL · ERP Integration

<div id="timeline-2023"></div>

## 2023

**Fasoo 사내 업무 시스템**

사내 데이터와 업무 흐름을 연결하는 내부 시스템을 개발했습니다.

- **방문자 분석 서비스** — 방문 로그·행사 로그·기업 정보를 결합해 영업에 활용할 수 있는 분석 화면과 API 개발 · React · ASP.NET Core · MSSQL
- **Flutter 업무 앱 연동** — 기존 웹 업무 로직을 모바일 앱에서 재사용하도록 WebView와 브릿지 기능 개발 · Flutter · WebView · JavaScript Bridge

<div id="timeline-2022"></div>

## 2022

**Elice**

예비 개발자를 위한 온라인 개발 교육 플랫폼입니다.

- **React 실습 코칭** — 컴포넌트·Hook·상태 관리·API 연동 실습을 지원하고 코드 리뷰 진행 · React · React Hooks · Code Review · Technical Mentoring

<div id="timeline-2021"></div>

## 2021

**MyCelebs**

콘텐츠 데이터를 수집·분석해 검색어 추천에 활용하는 서비스입니다.

- **검색어 추천 데이터셋** — 리뷰 수집과 형태소·TF-IDF·클러스터링 전처리 흐름 개발 · Python · Selenium · BeautifulSoup · NLP · Mecab
