# AI Engineer Resume

## Summary

4년차 개발자로, 암호화된 보안 문서를 공유·열람·협업하는 문서보안 솔루션에서 반복 문서 생성 기능을 개발하고, Text2SQL의 동의어·다의어 대응을 위한 시맨틱 레이어를 보강하며 평가셋을 구축했습니다. 메일 피싱 훈련 서비스에서는 훈련 메일 템플릿과 보안 퀴즈 생성 기능을 개발했고, AI 서버 운영과 장애 복구까지 맡았습니다. 이전에는 사내 업무 시스템을 개발하며 화면·API·데이터 흐름을 다뤘고, 현재는 Python·OpenAI SDK·LangChain으로 필요한 파이프라인 단계만 멀티턴으로 선택·실행하도록 설계해 AI 기능을 실제 제품과 운영 환경으로 확장해 왔습니다.

## About

팀과 제품의 성장을 우선하고, 배우고 공유하는 문화를 즐기며 업무의 경계를 넓혀 온 개발자입니다. 프론트엔드에서 시작해 백엔드와 AI 애플리케이션 개발까지 범위를 확장하며, 하나의 기능을 특정 기술 영역이 아니라 제품의 전체 흐름으로 바라보는 기준을 세웠습니다.

작년부터는 프론트엔드 제품 개발과 AI 애플리케이션 개발을 동시에 진행하며, 화면·백엔드·데이터·검증·운영을 연결하는 방식으로 제품 개발에 기여하고 있습니다. 새로운 기술을 빠르게 학습하고 실제 업무에 적용하며, 배우고 도전하는 태도를 긍정적으로 평가받아 담당 업무와 협업 범위를 넓힐 수 있었습니다. 올해는 AI 기능 개발과 품질 평가, 자동화·운영 개선에서 성과를 만들며 업무 범위와 개발 효율을 함께 높여 왔습니다.

## Core Skills

**AI Application** Python · OpenAI SDK · LangChain · MCP · LLM Application · Agentic Workflow · RAG · Text2SQL · LLM Evaluation

**Backend & Operations** Node.js · Express · ASP.NET Core · MSSQL · REST API · Python Concurrency · OCI · Load Balancing · Jenkins · GitLab CI/CD

**Product Engineering** React · TypeScript · Next.js · Microsoft Graph API · Office.js · Playwright · Storybook

**Security** OAuth 2.0 · OAuth PKCE · CSP · Content Sanitization · npm Audit · Dependency Security

## Work Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### AI 제품과 평가 체계 · 2026

- **원천 문서와 템플릿을 결합하는 Agentic 문서 생성 기능 개발** — 사내 반복 문서 생성 업무를 자동화해 보고서·신청서·검토서·제안서 형태의 신규 문서를 만드는 기능을 개발했습니다.
  - docx·xlsx·pptx마다 구조와 표현 단위가 달라 같은 파이프라인을 반복 실행하면 불필요한 LLM 호출이 늘어났기 때문에, 파일 구조·교체 영역·내용 추론과 렌더링을 멀티턴 파이프라인으로 나누고 입력에 필요한 단계만 Agent가 선택하도록 했습니다. 값 변환처럼 구조 추론이 필요 없는 경우에는 해당 단계를 건너뛰고, 포맷별 허용 연산자와 문서 생성용 문법으로 자율 실행 범위를 제한했습니다.
  - 청킹 전략과 모델·프롬프트 조합을 기준 데이터로 비교하고 입력 캐시·독립 단계 병렬 처리를 적용해 생성 시간을 4~5분에서 1~2분, 문서 1건 평균 비용을 약 350원에서 100원, 슬롯 누락률을 약 20%에서 2% 수준으로 줄였습니다.

- **긴 문서 생성 작업을 안정적으로 처리하는 비동기 파이프라인 개발** — 수 분이 걸리는 문서 생성을 사용자가 기다리는 API 요청과 분리했습니다.
  - 처리 중 API timeout이나 서버 중단이 발생해도 사용자가 결과와 실패 위치를 확인할 수 있도록 접수 번호를 먼저 반환하고, 백그라운드 작업이 생성·상태 갱신·결과 저장을 맡게 했습니다. 완료·실패·시간초과를 화면에서 추적하고 중단된 작업을 재시작한 뒤 남은 자원을 정리할 수 있어 긴 작업을 제품 흐름 안에서 안정적으로 운영할 수 있게 했습니다.

- **Wrapsody AI 검색·RAG·Text2SQL 품질 평가 체계 구축** — 문서보안 솔루션의 검색 결과와 AI 답변 품질을 같은 기준으로 반복 검증했습니다.
  - 사용자의 다의어·동의어 표현과 문서 표현이 달라 기대 문서를 놓치고, Text2SQL·문서 검색·최종 RAG 답변을 한 번에 보면 실패 단계를 구분하기 어려웠습니다. 이를 분리해 검증할 수 있도록 expected document/span과 기대 답변을 정의한 36개 golden dataset을 만들고 Playwright로 여러 테스트 서버에서 반복 실행했으며, 단계별 결과를 비교해 검색 문제와 생성 문제를 구분하고 모델 변경 전후를 같은 평가셋으로 검증했습니다.

- **Mind-SAT AI 메일 템플릿·보안 퀴즈 생성 기능 개발** — 메일 유형별 필수 요소와 대상자 정보가 prompt에서 빠지면 결과 품질이 흔들리고 긴 LLM 요청이 사용자를 오래 기다리게 했기 때문에, OpenAI SDK·LangChain 기반 Python 백엔드에 산업군·부서·직급·기술 이해도·위협 수준을 컨텍스트로 구조화하고 메일 템플릿·보안 퀴즈 생성 기능을 연결했습니다. 생성 결과는 sanitize 처리하고 서버 동시성·비동기 처리 기준을 적용해 결과를 안전하고 일관되게 제공했습니다.

- **AI 서버 장애 복구 구조 개발** — 단일 인스턴스 장애로 AI 기능 전체가 중단되는 위험을 줄이기 위해 애플리케이션 변경을 최소화하는 OCI Instance Pool 2대·Private Load Balancer·Health Check를 구성하고, 실제 인스턴스 중지 테스트로 장애 인스턴스 제외와 신규 인스턴스 보충을 확인해 PROD 컷오버까지 완료했습니다.

#### 제품·플랫폼 개발 · 2023–2025

- **M365 Web Add-in 멀티테넌트 플랫폼 개발** — C#/.NET Outlook 클라이언트를 Office.js 기반으로 전환하고, 제품 기능·M365 연동·고객사 설정을 분리했습니다.
  - React·TypeScript 모노레포와 Provider 계층으로 제품 도메인·M365·shared 경계를 나눠 고객사별 설정과 제품별 배포를 독립적으로 관리할 수 있게 했습니다.

- **제품 전반의 개발·배포 흐름 구현** — React·TypeScript·Node.js·ASP.NET Core·MSSQL 제품에서 화면·API·데이터·배포를 함께 다뤘습니다.
  - Jenkins/GitLab CI/CD를 연결해 반복 검증과 배포 산출물 추적이 가능한 흐름을 만들었습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- **검색어 추천 데이터셋 구축** — Python·Selenium·BeautifulSoup으로 리뷰를 수집하고 Mecab·TF-IDF·클러스터링 전처리 흐름에 참여했습니다.

## SIDE PROJECT

### agent-orchestration · AI Agent 개발 하네스 · 2026.08 – 현재

- **AI Agent 기반 개발 하네스 개발** — 작업 규모에 따라 spec 승인·TDD 구현·테스트 검증·PR 작성 절차를 달리하는 도구를 단독 설계·개발했습니다.
  - 모든 작업에 같은 절차를 적용하면 단순 작업은 느려지고 복잡한 작업은 검증 단계가 빠질 수 있어, 작업 규모에 따라 기획 깊이와 승인 경계를 나누고 Claude Code·Codex의 차이는 plugin adapter로 감싸 공통 skill에서 판단 기준을 유지했습니다.
  - **안전성 검증** — 결함 주입 시 사용자 변경사항이 손실되지 않도록 byte snapshot·SHA-256 검증·무조건 복원 절차를 구성했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- **다중 사용자가 참여하는 실시간 음악 서비스 개발** — Next.js·WebSocket 기반으로 OAuth PKCE 인증, playlist·DJ 대기열·moderation 흐름을 구현했습니다.
  - 여러 사용자의 상태 전이를 한 화면만으로 검증하기 어려워 Playwright 다중 세션으로 로그인부터 퇴장까지 테스트하고, GCP에서 Vercel로 이전해 Preview·GitHub Actions CI/CD까지 연결했습니다.

## EDUCATION

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## CERTIFICATIONS & ACTIVITIES

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
