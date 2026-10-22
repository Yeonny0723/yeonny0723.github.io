# Frontend Engineer Resume

## Summary

팀과 제품의 성장을 우선하고, 배우고 공유하는 문화를 즐기며, 호기심을 바탕으로 업무의 경계를 넓혀온 4년차 개발자입니다. 프론트엔드의 사용성, 백엔드의 안정성, AI의 가능성과 운영 효율이 만나는 지점에서 실제로 동작하는 제품을 만듭니다.

React·TypeScript 기반의 4년차 Frontend Engineer로, 복잡한 권한 정책과 보안 취약점을 고려해야 하는 보안 문서 협업·보안교육 제품의 흐름을 사용자가 이해할 수 있는 화면과 개발자가 안전하게 변경할 수 있는 구조로 정리해 왔습니다. 한 화면에 도메인·UI·비즈니스 로직이 섞일 때 기능 경계와 상태를 나누고, 디자인 패턴·공통 컴포넌트·상태 관리로 영향 범위를 좁혀 읽고 바꾸기 쉬운 코드를 만듭니다.

기획에서 빠진 UX 사양과 실패 흐름을 먼저 찾고, 안정적인 제품 운영을 위해 보안·권한·E2E·CI/CD 검증도 함께 설계합니다. 여러 제품에 공통되는 디자인 시스템을 만들고 MCP를 개발해 개발 생산성을 높여왔습니다. 이러한 AI 활용과 생산성 향상을 인정받아 작년부터 프론트엔드 제품 개발과 함께 AI 기능 개발·서버 운영까지 맡고 있습니다.

## Skills

**Frontend Stack** React · TypeScript · Next.js · TanStack Query · Redux Toolkit · Vite · Webpack

**Frontend Tooling** Storybook · TypeDoc · Playwright

**Backend** Node.js · Express · ASP.NET Core · MSSQL

**Delivery** GitLab CI/CD · Jenkins

**AI Product Integration** OpenAI SDK · LangChain · MCP

## Work Experience

### Fasoo AI · Software Engineer · 2023.04 ~ 현재

- **Mind-SAT 보안교육 제품 개발** — 4인 개발팀에서 약 100개 화면을 개발하며 OTP/MFA·권한별 화면·동영상 학습·교육 콘텐츠·퀴즈·관리자 통계를 하나의 학습 흐름으로 연결했습니다. 41개 고객사·19,790명이 사용하는 제품입니다.
  - 훈련 메일과 AI 생성 콘텐츠를 안전하게 표시하고, 피싱 훈련·퀴즈·라이선스·외부 메일 연동 등 주요 운영 시나리오를 사용자 권한별 Playwright E2E로 검증해 제품의 안정적인 운영을 지원했습니다.

- **보안 문서 협업·메일 신고 M365 플랫폼 전환** — Wrapsody eCo와 Mind-SAT을 새 Outlook에서 제공하기 위해 레거시 Outlook 클라이언트를 Office.js·React·TypeScript 기반 M365 Web Add-in 플랫폼으로 전환했습니다.
  - M365 공통 기능과 제품별 기능을 재사용 가능한 구조로 나누고 고객사별 설정을 구성화해, 제품을 추가하거나 고객사를 확장할 때 별도 제품을 반복 개발하지 않아도 되는 기반을 만들었습니다.

- **Mind-SAT AI 콘텐츠 생성 기능의 UI 개발** — AI 훈련 메일·보안 퀴즈·템플릿 생성 결과를 사용자가 확인할 수 있도록 작업 상태·결과·미리보기·수동 리뷰 화면을 구현했습니다. AI 생성을 실제 보안교육 제품의 사용자 흐름에 연결했습니다.

- **공통 UI 라이브러리·제품 디자인 시스템 구축** — 반복되는 UI를 공통 모듈로 전환해 약 6개 사내 시스템과 3개 제품에 적용하고, Storybook·GitLab·TypeScript 기반으로 컴포넌트의 사용 기준과 문서화·배포 흐름을 정리했습니다.
  - 디자인 시스템의 컴포넌트와 규칙을 AI Agent가 참고할 수 있도록 MCP 서버를 개발해, 제품마다 UI를 새로 해석하거나 기준을 다시 확인하는 비용을 줄였습니다.

- **프론트엔드 성능·품질 개선** — 최대 약 10만 건의 신고 이력 화면과 초기 로딩 문제를 개선해 대량 데이터를 다루는 화면의 반응성을 높였습니다. Jenkins·GitLab CI/CD와 Playwright를 연결해 테스트·빌드·배포와 주요 회귀 시나리오를 반복 검증할 수 있게 했습니다.

- **사내 업무 시스템의 React 전환·Full-stack 개발** — 인사·결재·고객 관리 등 기존 업무 시스템을 React·ASP.NET Core·MSSQL 기반으로 전환하고, 화면부터 데이터 흐름까지 유지보수하기 쉬운 구조로 정리했습니다. ERP 기준 데이터 동기화까지 개발해 업무 데이터의 일관성을 높였습니다.

- **npm 공급망 공격 사전 점검 플러그인 개발** — 팀 공통 개발 플러그인에 프로젝트의 npm 패키지 변경을 점검하는 기능을 포함해 각 프로젝트에 자동 적용되도록 했습니다. 커밋·푸시와 CI 과정에서 위험한 변경이나 필수 검증 누락을 감지하고, 확인되지 않은 변경은 진행을 막는 팀 공통 안전장치를 만들었습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- **검색어 추천 데이터셋 구축** — Python·Selenium·BeautifulSoup으로 리뷰를 수집하고 Mecab·TF-IDF·클러스터링 전처리 흐름에 참여했습니다.

## SIDE PROJECT

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- **다중 사용자가 함께 음악을 재생하고 상호작용하는 실시간 음악 서비스** — 5인 팀에서 Next.js·WebSocket 기반으로 OAuth PKCE 인증, playlist·DJ 대기열 등 코어 기능을 개발했습니다. FSD(Feature-Sliced Design)에 맞춰 도메인과 기능 단위로 구조를 리팩토링하고, 레이어가 도메인의 책임을 따르도록 구조화해 협업과 확장에 유연하게 대응할 수 있는 기반을 마련했습니다. BrowserContext로 수동 검증이 어려운 다중 사용자의 실시간 액션 처리를 검증을 자동화하고, Preview·GitHub Actions 배포 환경까지 연결했습니다. 이 방식을 회사 제품에도 적용하자고 제안해 실제 실행으로 연결했습니다.
- [GitHub 저장소](https://github.com/pfplay/pfplay-web)

### agent-orchestration · Developer Tooling · 2026.08 – 현재

- **AI Agent 기반 개발 하네스** — 작업 규모에 따라 spec 승인·TDD 구현·테스트 검증·PR 작성 절차를 달리하는 도구를 설계·개발하고 Claude Code와 Codex를 공통 workflow로 연결했습니다.
- [GitHub 저장소](https://github.com/Yeonny0723/agent-orchestration)

### OnCue Labs · AI 전화 예약 서비스

- **AI 전화 예약 서비스** — iOS에서 전화 시간·AI 페르소나·대화 컨텍스트·대화 목표를 설정하면, 예약된 시간에 AI가 전화를 걸어 설정된 역할에 맞춰 대화하는 서비스를 개발했습니다.
- [프로젝트 소개](https://oncue-labs.github.io/oncue-orchestration/)

## EDUCATION

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## CERTIFICATIONS & ACTIVITIES

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
- United Nations 한국·호주 전자정부 웹표준 평가 참여
