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

### Wrapsody 템플릿 기반 문서 자동 생성
`2026 ~ 현재` · `Software Engineer (메인 개발)` · Python · LLM · docx/xlsx/pptx · Queue/Worker

**개발한 내용** — 템플릿 문서와 원천 파일을 받아 새 문서를 생성하는 파이프라인을 구현하고, 구조 추론·포맷별 chunking·슬롯 추론·규칙 기반 렌더링·비동기 `requestId` 흐름을 연결했습니다. LLM이 임의 코드를 실행하지 않도록 문서 생성용 문법과 연산자를 정의했습니다.

**결과** — 문서 생성 시간을 4~5분에서 1~2분 수준으로, 평균 비용을 약 350원에서 100원 수준으로 낮추고 슬롯 누락률을 약 20%에서 2% 수준으로 개선했습니다. 생성 결과의 오류 위치와 리뷰 대상을 구분해 내부 검증·QA가 가능한 흐름을 만들었습니다.

### Wrapsody AI 검색·RAG·Text2SQL 평가 자동화
`2026 ~ 현재` · `Software Engineer (검색·평가 지원)` · Golden Dataset · Playwright · RAG · Text2SQL

**개발한 내용** — 다의어·동의어 질의를 분석하고 36개 golden dataset을 구성했습니다. 여러 테스트 서버에서 동일 질문을 반복 실행해 expected document/span, Text2SQL 결과, 문서 검색 결과, 최종 RAG 응답을 단계별로 비교했습니다.

**결과** — 검색 품질을 주관적 판단이 아니라 기대 문서·근거 span 대비 실제 결과로 확인할 수 있게 했고, 로컬 모델 변경 전후의 품질을 같은 기준으로 비교할 수 있게 했습니다.

### Mind-SAT AI 서버 고가용성 전환
`2026` · `Software Engineer` · OCI · Instance Pool · Private Load Balancer · Health Check

**개발한 내용** — 단일 인스턴스로 운영되던 AI 서버를 앱 코드 변경 없이 Instance Pool 2대와 Private Load Balancer 구조로 전환하고, 골든 이미지·systemd·헬스체크 기반의 인스턴스 보충 흐름을 구성했습니다.

**결과** — 인스턴스 중지 시 트래픽에서 제외하고 새 인스턴스를 자동 보충하는 장애 복구를 TEST에서 검증한 뒤 PROD 컷오버까지 완료했습니다. 신규 요청 기준 무중단 구조를 확보하고, 인프라 계층에서 고가용성을 적용했습니다.

### Mind-SAT 핵심 운영 시나리오 E2E 자동화
`2026` · `Frontend Engineer` · Playwright · Jenkins CI · Multi-role · Multi-tenant

**개발한 내용** — 피싱 훈련, 동영상·퀴즈 코스, 테넌트 라이선스 등 핵심 운영 시나리오를 프론트 액션부터 백엔드 후처리·외부 메일 연동까지 종단간으로 자동화했습니다. 사용자·고객사 관리자·super 관리자 세 권한의 접근과 운영 액션을 함께 검증했습니다.

**결과** — 메일 수신 대기까지 포함해 약 30분 걸리던 수동 검증을 약 8분으로 줄이고, Jenkins에서 필요 시 핵심 회귀 검증을 실행할 수 있게 했습니다.

### Mind-SAT AI 메일 템플릿 추천·생성
`2026` · `Software Engineer` · Python · OpenAI SDK · LangChain · Prompt Engineering

**개발한 내용** — 산업군·부서·직급·기술 이해도·위협 수준·메일 유형을 prompt 컨텍스트로 구조화해 Python 백엔드에 AI 메일 템플릿 추천·생성 기능을 연결했습니다. 긴 LLM 응답을 고려해 서버의 동시성·비동기 처리 관점도 함께 검토했습니다.

**결과** — 메일 유형별 필수 요소를 prompt 정책으로 분리해 생성 결과의 일관성을 높이고, AI 기능을 제품의 사용자 흐름과 백엔드 운영 구조에 연결했습니다.

### 사내 디자인 시스템 MCP
`2026` · `Software Engineer` · MCP · TypeScript AST · Storybook · Design System

**개발한 내용** — FDS 소스·Storybook·JSDoc·디자인 토큰을 `generated-registry.json`으로 구조화하고, AI Agent가 컴포넌트·props·훅·색상·아이콘 정보를 조회하는 MCP 서버를 개발했습니다.

**결과** — AI가 임의의 UI 규칙을 생성하는 대신 사내 디자인 시스템의 실제 사용 기준을 조회할 수 있게 했고, UI 개발·리뷰에서 반복되는 확인 과정을 줄였습니다.

### npm 공급망 보안 감사 플러그인
`2026` · `Software Engineer` · Claude Code Plugin · npm Audit · PreToolUse Hook

**개발한 내용** — install script, lockfile, loose semver, dependency tree, npm audit와 의존성 커밋을 점검하는 `npm-supply-chain-guard`를 개발했습니다. patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다.

**결과** — npm audit만으로 놓칠 수 있는 설치 경로 위험까지 한 흐름에서 검토하고, 의존성 변경을 일반 코드 변경과 분리해 리뷰하는 개발 생산성·보안 거버넌스 기준을 만들었습니다.

### Claude Code 팀 업무 표준화 플러그인
`2026` · `Software Engineer` · Claude Code · Skill Workflow · Developer Tooling

**개발한 내용** — 커밋·PR·이슈·퍼블리싱·다국어 리소스 작업을 공통 skill로 표준화하고 업무별 입력·검토·출력 형식을 분리했습니다.

**결과** — 반복 업무를 도구화한 경험을 바탕으로 이후 작업 규모 판정·승인 경계·평가 단계를 갖춘 개인 프로젝트 `agent-orchestration`으로 확장했습니다. 팀에 공유했지만 실제 도입까지 이어지지 않은 한계도 확인했습니다.

**개인 프로젝트**

### agent-orchestration 개발 하네스
`2026.08 ~ 현재` · `단독 설계·개발` · Claude Code · Codex · TDD · Mutation Guard

**개발한 내용** — AI Agent가 작업 규모 판정, spec 승인, TDD 구현, 테스트 민감도 검증, PR 작성까지 같은 절차로 수행하도록 command와 skill 기반 하네스를 설계했습니다. 결함 주입과 byte snapshot·SHA-256 검증을 넣어 테스트 감지력과 사용자 변경사항 복원을 확인했습니다.

**결과** — Claude Code와 Codex에서 동일한 판단 로직을 사용하고, 12개 skill·4개 command·1개 agent·4종 convention pack으로 구성한 하네스를 공개 저장소에 배포했습니다.

<div id="timeline-2025"></div>

## 2025

**Fasoo**

### M365 Web Add-in 멀티테넌트 플랫폼
`2025` · `Frontend Engineer / Fullstack Engineer` · React · TypeScript · Office.js · Microsoft Graph API

**개발한 내용** — C#/.NET 레거시 Outlook 클라이언트를 M365 Web Add-in으로 전환하고, Wrapsody eCo와 Mind-SAT 메일 신고 앱을 제품·M365 통합·shared 경계가 분리된 멀티테넌트 모노레포로 구성했습니다.

**결과** — 고객사별 제품 활성화·API URL·Azure AD·dev/prod manifest를 분리하고, Provider·의존성 주입으로 Office runtime·SSO·메일 컨텍스트·제품 로직의 책임을 나눴습니다.

### Wrapsody eCo Outlook Add-in
`2025` · `Frontend Engineer` · React · TypeScript · Office.js · Node.js

**개발한 내용** — Outlook 안에서 문서 공유를 수행할 수 있도록 메일 작성·문서 첨부·수신 메일 처리 중심의 Add-in 기능과 고객사별 호환성·다국어 대응을 개발했습니다.

**결과** — 보안 문서 협업 제품의 사용자 접점을 Outlook으로 확장하고, 2026년 5월 기준 24개 고객사 운영 환경에서 사용할 수 있는 문서 공유 흐름을 제공했습니다.

### Mind-SAT 악성 메일 훈련·보안 교육 서비스
`2025` · `Frontend Engineer` · React · TypeScript · OTP/MFA · CSP · DOM Sanitizing

**개발한 내용** — 악성 메일 훈련의 신고·교육 이수·퀴즈와 관리자 통계 대시보드, 모바일 화면 등 약 100개 프론트엔드 화면을 개발했습니다. 훈련 메일과 외부 리소스를 CSP·DOM Sanitizing으로 정제했습니다.

**결과** — 인증부터 교육 이수와 결과 확인까지의 사용자 흐름을 연결하고, 2026년 6월 기준 41개 고객사·19,790명 규모의 서비스에서 보안 콘텐츠를 안전하게 표시하는 기반을 제공했습니다.

### 제품 공통 디자인 시스템 확장
`2025` · `Frontend Engineer` · React · TypeScript · Design Tokens · Component API

**개발한 내용** — 사내 공통 UI 라이브러리 경험을 제품군으로 확장해 재사용 가능한 디자인 토큰·컴포넌트 API·variant 규칙·접근성 기준을 정리했습니다.

**결과** — 3개 제품에 공통 디자인 시스템을 적용해 UI 일관성과 신규 화면 개발의 재사용성을 높였습니다.

### 프론트엔드 성능 최적화
`2025` · `Frontend Engineer` · Virtualization · Code Splitting · Dynamic Import · Vite

**개발한 내용** — 대량 테이블의 windowing/virtualization, 검색 debounce, resize·동영상 이벤트 throttle, 이미지 lazy loading, 라우트 code splitting과 페이지 특화 라이브러리 dynamic import를 적용했습니다.

**결과** — 대량 신고 이력의 필터·선택 UI 반응성과 초기 로딩을 개선하고, 상태를 도메인 중심으로 정리해 중복 fetching과 불필요한 렌더링 범위를 줄였습니다.

### Jenkins 기반 CI/CD
`2025` · `Frontend Engineer` · Jenkins · CI/CD · Artifact · Beta/Production

**개발한 내용** — 디자인 시스템·프론트엔드 서비스·Outlook Add-in의 패키지 설치, 검증, 빌드, artifact 생성, 환경별 배포를 Jenkins Job으로 표준화했습니다.

**결과** — copy & paste 기반 배포를 branch/tag·artifact·Job 로그로 추적 가능한 흐름으로 바꾸고, 운영 장애 시 직전 정상 artifact를 기준으로 롤백 대상을 특정할 수 있게 했습니다.

**PFPlay 사이드 프로젝트**

### PFPlay 실시간 서비스
`2025.06 ~ 현재` · `5인 팀 / 프론트엔드·프론트 인프라 운영` · Next.js · WebSocket · OAuth PKCE · Playwright

**개발한 내용** — PKCE 인증, 무대 애니메이션, moderation, playlist·DJ 대기열을 Feature-Sliced Design 구조로 구현하고, 다중 사용자 상태 전이와 실시간 이벤트를 Playwright 다중 세션 E2E로 검증했습니다. GCP에서 Vercel로 배포 환경을 이전하고 Preview·GitHub Actions CI를 구성했습니다.

**결과** — 최대 동시접속 18명의 실제 사용 서비스에서 broadcast와 상태 전파를 확인했고, 기능 구현부터 배포·CI·E2E 검증까지 프론트엔드와 프론트 인프라 범위를 책임졌습니다.

<div id="timeline-2024"></div>

## 2024

**Fasoo**

### 레거시 업무 시스템 마이그레이션
`2024` · `Fullstack Engineer` · React · ASP.NET Core · MSSQL

**개발한 내용** — 설문 기반으로 기존 업무 흐름과 신규 화면을 재구성하고, ASP.NET WebForms 시스템을 React·ASP.NET Core·MSSQL 구조로 전환했습니다. 목록·상세·수정·필터·집계 API와 데이터 처리를 분리했습니다.

**결과** — 노후 시스템을 유지보수·확장 가능한 구조로 바꾸고, 캐싱·디바운싱·페이지 조회·인덱스·DB view·임시 테이블로 조회와 입력 흐름의 부담을 줄였습니다.

### 사내 시스템 공통 UI 라이브러리
`2024` · `Fullstack Engineer` · React · TypeScript · Storybook · TypeDoc · GitLab Packages

**개발한 내용** — 약 30개 사내 시스템의 UI 패턴을 분석해 컴포넌트·훅·유틸 함수를 포함한 npm 라이브러리를 설계하고, Plop.js·Storybook·TypeDoc·GitLab Packages·CI/CD를 연결했습니다.

**결과** — 약 6개 사내 시스템에 적용해 재사용성을 검증하고, 컴포넌트뿐 아니라 훅·유틸 함수도 문서에서 발견·활용할 수 있는 공통 개발 기반을 만들었습니다.

### 프론트엔드 개발 환경 현대화
`2024` · `Fullstack Engineer` · TypeScript · TanStack Query · Vite · Yarn Berry

**개발한 내용** — 사내 시스템에 TypeScript·TanStack Query·Vite·Yarn Berry를 단계 도입하고, 서버 상태와 UI 상태의 책임·fetch/cache invalidation·빌드·패키지 설치 기준을 정리했습니다.

**결과** — 중복 fetch와 수동 캐시 처리 부담을 줄이고, 개발 서버 피드백과 빌드 확인을 빠르게 하며, 패키지 설치 결과의 재현성을 높였습니다.

### GitLab CI/CD 파이프라인
`2024` · `Fullstack Engineer` · GitLab Runner · PowerShell · IIS · MSBuild

**개발한 내용** — ASP.NET 5와 React 17/Vite 시스템의 NuGet restore·MSBuild publish·artifact 생성·IIS app pool 제어·파일 복사를 GitLab CI/CD build/deploy stage로 자동화했습니다.

**결과** — 수동 배포를 deploy 브랜치 머지 또는 버튼 실행으로 전환하고, Job 로그와 artifact를 기준으로 배포 이력과 롤백 판단을 추적할 수 있게 했습니다.

### ERP 기준 데이터 동기화
`2024` · `Fullstack Engineer` · MSSQL Scheduler · ERP Integration · Upsert

**개발한 내용** — 인사·재무 ERP를 source of truth로 두고 조직·사용자·비용 기준 데이터를 MSSQL Scheduler로 주기 반영했습니다. 변경 기준·upsert 대상·검증 쿼리·재실행 안전성을 함께 구성했습니다.

**결과** — 수동 쿼리로 맞추던 기준 데이터 반영을 반복 가능한 스케줄러 job으로 전환하고, 동기화 실패 시 확인할 지점을 명확히 했습니다.

<div id="timeline-2023"></div>

## 2023

**Fasoo**

### 마케팅용 방문자 분석 서비스
`2023` · `Fullstack Engineer` · React · ASP.NET Core · MSSQL

**개발한 내용** — 홈페이지 방문 로그·사내 행사 로그·기업명-IP 매핑을 통합하고, 방문 기업과 제품 관심도를 추정해 보여주는 내부 서비스를 기획부터 운영까지 개발했습니다.

**결과** — 추상적인 마케팅 요구사항을 데이터 모델·추천 로직·화면 기능으로 구체화해 영업 활동에 활용할 수 있는 end-to-end 내부 서비스를 만들었습니다.

### 사내용 Flutter 앱 웹뷰
`2023` · `Fullstack Engineer` · Flutter WebView · WebView Bridge

**개발한 내용** — 사내용 Flutter 앱에서 외근 업무를 등록하는 웹뷰 화면과 Flutter-WebView 브릿지를 개발해 사용자 식별 정보·파라미터·처리 결과·alert/close 이벤트를 연결했습니다.

**결과** — 기존 웹 업무 로직을 재사용하면서 모바일 앱 안에서 외근 등록을 처리할 수 있도록 업무 범위를 확장했습니다.

<div id="timeline-2022"></div>

## 2022

**Elice**

### React 실습 코치
`2022.11 ~ 2023.04` · `React Tutor` · React · React Hook · Code Review

**개발한 내용** — SW 트랙 3기·AI 트랙 7기의 React 실습에서 컴포넌트·Hook·상태 관리·API 연동 개념을 설명하고, 학습자 코드의 오류 원인과 개선 방향을 리뷰했습니다.

**결과** — 약 120명의 예비 개발자가 실습을 따라갈 수 있도록 지원하고, 구현 품질과 학습 방향을 함께 다루는 커뮤니케이션 경험을 쌓았습니다.

<div id="timeline-2021"></div>

## 2021

**MyCelebs**

### 검색어 추천 데이터셋 구축
`2021.08 ~ 2021.11` · `Data Engineer Intern` · Python · Selenium · BeautifulSoup · Mecab · TF-IDF

**개발한 내용** — 리뷰 데이터를 수집하는 스크래퍼를 개발하고, Mecab 형태소 분석·불용어 처리·TF-IDF 피처 구성·클러스터링으로 이어지는 텍스트 데이터 처리 흐름을 구현했습니다.

**결과** — 검색어 추천에 활용할 데이터셋과 전처리 흐름을 구축하고, 추천 품질에 영향을 주는 텍스트 데이터 처리 경험을 확보했습니다.
