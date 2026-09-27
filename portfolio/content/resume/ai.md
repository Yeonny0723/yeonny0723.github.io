# AI Engineer Resume

## 한 줄 소개

생성형 AI를 단순히 호출하는 데서 그치지 않고, AI 기능이 실제 제품에서 안정적으로 동작하도록 처리 흐름·품질 평가·비용·보안·인프라까지 함께 설계해 온 개발자입니다.

## Summary

- Python 백엔드에 OpenAI SDK·LangChain 기반 LLM 기능을 연결하고, 비동기 API·Queue/Worker·문서 처리 파이프라인을 제품 흐름으로 구현했습니다.
- Golden Dataset을 기준으로 검색·RAG·Text2SQL을 단계별로 평가하고, 기대 문서/span과 실제 결과를 비교해 품질 개선 지점을 추적했습니다.
- AI Agent가 작업 규모 판정·승인·테스트·PR 작성까지 일관된 절차로 수행하도록 개발 하네스를 설계·구현하고 공개 저장소로 배포했습니다.
- 인증·권한·멀티테넌트·악성 콘텐츠 처리·고가용성 인프라를 고려하며 기업용 보안 제품을 운영했습니다.

## AI Position Fit

### 필수 역량과 연결

- **Python 기반 백엔드 API** — Mind-SAT AI 서비스의 Python 백엔드에 LLM 기능을 연결하고 동시성·비동기 처리 관점을 검토했습니다.
- **LLM API·RAG·Agent 기반 서비스** — OpenAI SDK·LangChain 기반 AI 메일 템플릿 생성, Wrapsody 문서 검색·RAG 품질 평가, Claude Code·Codex 기반 Agent 하네스를 개발했습니다.
- **Prototype·협업 검증·서비스 운영** — LLM Wiki 기반 문서 질의응답 PoC, Playwright 평가 자동화, OCI 고가용성 전환과 장애 복구 검증을 수행했습니다.
- **SQL 연동과 비동기 처리** — MSSQL 기반 사내 시스템과 ERP 동기화를 경험했고, 문서 생성에서는 `requestId`·Queue·Worker 기반 수명주기를 설계했습니다.
- **테스트·Git·CI/CD·운영** — Playwright 평가 자동화, GitLab/Jenkins CI/CD, OCI 고가용성 전환과 장애 복구 검증을 수행했습니다.

### 우대 역량과 연결

- **MCP·엔터프라이즈 API·사내 시스템 통합** — 사내 디자인 시스템 MCP, Microsoft Graph API, 고객사별 멀티테넌트 시스템을 개발했습니다.
- **LLM 평가·품질 비교** — 36개 golden dataset으로 expected document/span, 검색, 최종 응답을 단계별 비교했습니다.
- **React/TypeScript UI** — AI 결과 표시·sanitize와 React·TypeScript 기반 제품 UI를 함께 구현했습니다.
- **기술 표준·협업** — 공통 디자인 시스템 MCP, CI/CD 기준, AI 개발 하네스의 승인·검증 절차를 구성했습니다.

## Skills

**AI Product** OpenAI SDK · LangChain · LLM Application · RAG · Prompt Engineering · Document AI · Structured Output · Evaluation Automation

**Backend & Infrastructure** Python · Node.js · ASP.NET Core · MSSQL · OCI · Instance Pool · Private Load Balancer · Async Processing

**Engineering** React · TypeScript · Playwright · Git · GitLab CI/CD · Jenkins · MCP · Security Guardrails

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### AI 제품과 평가 체계 · 2026

- 템플릿 문서와 docx·xlsx·pptx 원천 파일을 받아 새 문서를 생성하는 기능을 메인 개발자로 맡아, 구조 추론·포맷별 chunking·슬롯 단위 추론·렌더링 흐름을 설계했습니다.
- API가 `requestId`를 먼저 반환하고 Queue와 Worker가 백그라운드에서 처리하도록 분리했으며, 상태 조회·결과 저장·실패 단계 재처리·정리 작업을 연결했습니다.
- LLM이 임의 코드를 만들지 않도록 제한된 문법과 연산자를 정의하고, 규칙으로 처리할 영역과 LLM이 판단할 영역을 나눴습니다.
- 문서 생성 시간을 4~5분에서 1~2분 수준으로, 슬롯 누락률을 약 20%에서 2% 수준으로 낮췄으며, 문서 1건당 평균 비용을 약 350원에서 100원 수준으로 줄였습니다.
- Wrapsody AI 검색 품질을 위해 다의어·동의어 질의를 분석하고 36개 golden dataset을 구성했습니다. expected document/span, Text2SQL, 문서 검색, 최종 RAG 응답을 분리해 평가했습니다.
- Playwright로 여러 테스트 서버에서 동일 질문을 반복 실행하고 기대 결과와 실제 결과를 비교하는 평가 자동화 흐름을 만들었습니다.
- Mind-SAT AI Python 백엔드에 OpenAI SDK·LangChain 기반 메일 템플릿 추천·생성 기능을 연결하고, 산업군·부서·직급·기술 이해도·위협 수준을 prompt 컨텍스트로 구조화했습니다.
- OCI Instance Pool 2대와 Private Load Balancer 기반으로 AI 서버를 전환해 단일 인스턴스 장애에 대한 복구 구조를 구성하고 중지 테스트로 복구 동작을 확인했습니다.
- TypeScript AST·Storybook·JSDoc·디자인 토큰을 분석해 AI Agent가 사내 디자인 시스템을 조회하는 MCP를 개발했습니다.

#### AI Agent 개발 도구 · 2026.08 – 현재

- Claude Code와 Codex에서 작업 규모 판정, spec 승인, TDD 구현, 테스트 민감도 검증, PR 작성까지 같은 절차로 수행하도록 `agent-orchestration` 하네스를 단독 설계·개발했습니다.
- 결함 주입과 안전한 byte snapshot 복원을 검증 흐름에 넣고, Claude Code·Codex 플러그인으로 배포했습니다.

#### 제품·플랫폼 개발 · 2023–2025

- React·TypeScript·Node.js·ASP.NET Core·MSSQL 기반 제품에서 API, 데이터 모델, 화면, 배포와 운영 이슈를 연결했습니다.
- C#/.NET 레거시 Outlook 클라이언트를 Office.js 기반 M365 Web Add-in으로 전환하고, 제품·M365·shared 경계를 나눈 멀티테넌트 모노레포를 구성했습니다.
- Jenkins와 GitLab CI/CD로 프론트엔드·디자인 시스템·Outlook Add-in의 검증, 빌드, artifact, 환경별 배포 흐름을 표준화했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- Next.js·WebSocket 기반 실시간 제품에서 OAuth PKCE, 다중 사용자 상태, Playwright 다중 세션 E2E, Vercel·GitHub Actions CI/CD를 구현했습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- 검색어 추천 데이터셋을 위해 Python·Selenium·BeautifulSoup으로 리뷰 데이터를 수집하고, Mecab·TF-IDF·클러스터링 기반 전처리 흐름에 참여했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
