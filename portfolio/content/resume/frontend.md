# Frontend Engineer Resume

## Summary

4년차 개발자로, 암호화된 보안 문서를 공유·열람·협업하는 문서보안 솔루션과 메일 피싱 훈련 서비스의 사용자 흐름을 개발하고 있습니다. 이전에는 사내 업무 시스템을 개발하며 화면·API·데이터 흐름을 함께 다뤘고, 현재는 React·TypeScript를 중심으로 레거시 시스템 전환, M365 멀티테넌트 구조, 디자인 시스템, 성능 최적화, Playwright E2E·CI/CD까지 연결해 제품의 사용성과 변경 가능성을 높였습니다. 최근에는 AI 생성 결과를 안전하게 표시하고 수동 리뷰로 연결하는 UI까지 개발하며 프론트엔드의 범위를 AI 제품 통합으로 확장했습니다.

## About

팀과 제품의 성장을 우선하고, 배우고 공유하는 문화를 즐기며 업무의 경계를 넓혀 온 개발자입니다. 프론트엔드에서 시작해 백엔드·AI 애플리케이션·운영까지 경험하며, 화면을 만드는 데서 멈추지 않고 사용자의 행동이 데이터·권한·비동기 처리·배포로 이어지는 전체 흐름을 함께 설계해 왔습니다.

작년부터는 프론트엔드 제품 개발과 AI 애플리케이션 개발을 동시에 진행하며, 기존 제품의 사용자 경험을 개선하는 동시에 새로운 AI 기능을 실제 제품 흐름에 연결하고 있습니다. 새로운 기술을 빠르게 학습하고 업무에 적용하는 태도, 필요한 영역까지 직접 확장해 문제를 해결하는 자세를 긍정적으로 평가받아 담당 업무와 협업 범위를 넓힐 수 있었습니다. 올해는 제품 기능 개발뿐 아니라 공통 UI·테스트·배포 자동화로 개발 효율을 높이고, AI 기능의 화면 통합까지 맡으며 제품 개발에 기여하는 범위를 확장해 왔습니다.

## Core Skills

**Frontend** React · TypeScript · Next.js · TanStack Query · Redux Toolkit · Vite · Webpack · Storybook · TypeDoc

**Frontend Quality** Playwright · WebSocket · Virtualization · Code Splitting · Dynamic Import · Design Tokens · Accessibility

**Backend & Platform** Node.js · Express · REST API · ASP.NET Core · MSSQL · CI/CD

**Platform & Security** GitLab CI/CD · Jenkins · OAuth 2.0 · OAuth PKCE · CSP · Content Sanitization

**AI Product Integration** OpenAI SDK · LangChain · MCP · LLM Application

## Work Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### Frontend Platform · 2025–2026

- **레거시 Outlook 클라이언트의 M365 Web Add-in 전환** — 새로운 Outlook 환경과 여러 고객사를 지원할 수 있도록 기존 C#/.NET 클라이언트를 Office.js 기반 React·TypeScript 제품으로 전환했습니다.
  - 제품 기능·M365 연동·고객사 설정이 섞이면 새로운 환경 대응이 서로 영향을 줄 수 있었기 때문에, 모노레포 안에서 제품 도메인·M365·shared 경계를 나누고 브라우저 환경·로그인 정보·메일 컨텍스트를 Provider와 client/service 계층으로 분리했습니다. 그 결과 제품 API, M365 연동, 고객사별 활성화·API URL·Azure AD·dev/prod manifest를 독립적으로 관리할 수 있게 했습니다.

- **보안 교육 제품의 인증·교육·관리자 흐름 개발** — OTP/MFA 인증부터 교육 플레이어·퀴즈·관리자 통계까지 사용자가 교육을 시작해 완료하는 화면을 개발했습니다.
  - 훈련 메일과 외부 콘텐츠를 그대로 표시하면 스크립트나 허용되지 않은 리소스가 실행될 수 있어 CSP와 DOM Sanitizing으로 표시 범위를 제한하고, 사용자·관리자 역할별 화면과 모바일 흐름을 안전하게 연결했습니다.

- **제품 공통 디자인 시스템과 배포 기준 구축** — 여러 사내 시스템의 UI 패턴을 공통 컴포넌트·훅·아이콘·컬러 토큰으로 정리했습니다.
  - 반복 UI를 프로젝트마다 다르게 구현하면 변경 비용이 커지기 때문에 Storybook·TypeDoc·생성 도구와 Jenkins를 연결하고 lint/typecheck·build·artifact·환경별 배포를 같은 흐름으로 구성했습니다. 반복 화면을 재사용 가능한 단위로 만들고 배포 결과와 롤백 대상을 추적할 수 있게 했습니다.

- **프론트엔드 성능과 사용자 반응성 개선** — 대량 데이터·초기 로딩·고빈도 이벤트가 화면을 느리게 만드는 문제를 기능별로 나눠 개선했습니다.
  - 대량 목록·초기 로딩·고빈도 이벤트가 화면을 느리게 만들던 문제를 필요한 범위만 렌더링하고 첫 화면 코드를 우선 로드하며 검색·resize·동영상 이벤트를 일정 간격으로 처리해, 대량 신고 이력의 필터·선택 UI 반응성과 초기 로딩을 개선하고 불필요한 렌더링과 중복 요청을 줄였습니다.

#### AI 제품 통합 · 2026

- **AI 생성 결과의 제품 화면 통합** — AI 결과를 사용자가 확인하고 수정할 수 있도록 상태 조회·결과 표시·수동 리뷰 흐름을 구현했습니다.
  - 생성 결과를 그대로 화면에 넣을 때 실행 가능한 내용이 포함될 수 있어 sanitize 처리로 표시 범위를 제한하고, 상태 조회·결과 표시·수동 리뷰 흐름을 구현했습니다. 또한 사내 디자인 시스템을 AI Agent가 조회하도록 MCP를 연결해 실제 컴포넌트 기준을 참고하게 했습니다.

- **팀 개발 환경의 npm 공급망 보안 가드 개발** — 제품 기능과 별개로 팀원이 안전하게 의존성을 설치·변경할 수 있도록 `npm-supply-chain-guard`를 개발했습니다.
  - `npm audit`만으로는 install script 실행·lockfile 누락·느슨한 semver·신규 릴리스 위험을 함께 확인하기 어려워 install·lockfile·semver·dependency tree·audit 결과를 한 번에 점검하고, patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다. 제품 기능과 별개로 의존성 변경을 일반 코드와 다른 기준으로 검토하는 팀 개발 보안 가드레일을 만들었습니다.

#### Fullstack Product · 2023–2024

- **레거시 업무 시스템의 React 전환** — 기존 업무 흐름을 유지하면서 WebForms 화면을 React·ASP.NET Core·MSSQL 구조로 바꾸었습니다.
  - 화면·API·데이터 모델·쿼리 책임을 분리해 목록·상세·수정·필터·집계 흐름을 단계적으로 전환하고, 캐싱·페이지 조회·인덱스·DB view를 적용해 노후 시스템을 유지보수·확장 가능한 구조로 바꾸면서 조회 부담을 줄였습니다.

- **개발·데이터 운영 흐름 자동화** — 중복 fetch·느린 개발 서버·수동 배포·ERP 기준 데이터 불일치 문제를 정리했습니다.
  - TanStack Query·Vite·GitLab CI/CD·ERP Scheduler를 도입해 데이터 갱신·빌드·배포·기준 데이터 반영을 반복 가능한 흐름으로 만들고, 개발 피드백과 배포 이력을 빠르게 확인하며 동기화 실패 지점을 추적할 수 있게 했습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- **검색어 추천 데이터셋 구축** — Python·Selenium·BeautifulSoup으로 리뷰를 수집하고 Mecab·TF-IDF·클러스터링 전처리 흐름에 참여했습니다.

## SIDE PROJECT

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- **다중 사용자가 참여하는 실시간 음악 서비스 개발** — Next.js·WebSocket 기반으로 OAuth PKCE 인증, playlist·DJ 대기열·moderation 흐름을 구현했습니다.
  - 한 사용자의 화면만으로는 상태 전파와 퇴장 시나리오를 검증하기 어려워 Playwright BrowserContext로 여러 사용자 세션을 분리해 로그인부터 퇴장까지 테스트하고, GCP에서 Vercel로 이전해 Preview·GitHub Actions E2E를 연결했습니다.

### agent-orchestration · Developer Tooling · 2026.08 – 현재

- **AI Agent 기반 개발 하네스 개발** — 작업 규모에 따라 spec 승인·TDD 구현·테스트 검증·PR 작성 절차를 달리하는 도구를 단독 설계·개발했습니다.
  - Claude Code·Codex의 차이는 plugin adapter로 감싸고 공통 skill에서 판단 기준을 유지해, 작업 규모에 맞는 검증 경계를 반복 개발 과정에 적용할 수 있게 했습니다.

## EDUCATION

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## CERTIFICATIONS & ACTIVITIES

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
