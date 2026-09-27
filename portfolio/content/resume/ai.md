# AI Engineer Resume

## 한 줄 소개

LLM에 맡길 일과 코드가 검증할 일을 나누고, 품질·비용·보안·운영까지 고려해 AI 기능을 제품으로 연결해 온 개발자입니다.

## Summary

- **AI 기능 개발** — 사내 반복 문서 생성과 보안 교육 메일 작성을 LLM 기능으로 제품에 연결했습니다.
- **품질 검증** — 검색·RAG·Text2SQL과 문서 생성을 기준 데이터로 비교해 모델과 프롬프트를 개선했습니다.
- **운영 안정성** — 오래 걸리는 AI 작업의 실패·재처리 흐름과 서버 장애 복구까지 제품 구조에 포함했습니다.

## AI Position Fit

### 필수 역량과 연결

- **Python 기반 백엔드 API** — 응답이 긴 AI 기능을 Python API와 백그라운드 작업으로 나누어 사용자 요청과 처리를 분리했습니다.
- **LLM API·RAG·Agent 서비스** — OpenAI SDK·LangChain 기반 생성·검색 기능과 Claude Code·Codex 기반 개발 도구를 제품과 개발 흐름에 연결했습니다.
- **Prototype·협업 검증·운영** — 문서 질의응답 PoC를 검증하고, Playwright 평가와 서버 중지 테스트로 품질과 복구를 확인했습니다.
- **SQL 연동과 비동기 처리** — MSSQL·ERP 데이터를 동기화하고, 오래 걸리는 문서 작업을 접수·처리·결과 조회 단계로 나누었습니다.
- **테스트·Git·CI/CD** — 반복 검증과 배포 이력 추적이 가능하도록 Playwright·GitLab/Jenkins CI/CD를 구성했습니다.

### 우대 역량과 연결

- **MCP·엔터프라이즈 통합** — 사내 디자인 시스템과 Microsoft Graph API를 AI·제품 기능에서 조회할 수 있게 연결했습니다.
- **LLM 평가·품질 비교** — 36개 기준 데이터로 모델 변경 전후의 검색·RAG 품질을 비교했습니다.
- **React/TypeScript UI** — AI 결과를 안전하게 표시하고 사용자가 확인·수정할 수 있는 제품 흐름으로 연결했습니다.
- **기술 표준·협업** — AI 개발 절차와 디자인 시스템 사용 기준을 팀이 반복 적용할 수 있게 정리했습니다.

## Skills

**AI Product** OpenAI SDK · LangChain · LLM Application · RAG · Text2SQL · Prompt Engineering · Golden Dataset · Evaluation Automation

**Backend & Operations** Python · Node.js · MSSQL · Async Processing · Queue/Worker · OCI · Instance Pool · Private Load Balancer

**Engineering** React · TypeScript · Playwright · Git · GitLab CI/CD · Jenkins · MCP · Security Guardrails

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### AI 제품과 평가 체계 · 2026

- **사내 반복 문서 생성 업무를 자동화하는 LLM 기능 개발** — 원천 문서와 템플릿 문서를 결합해 보고서·신청서·검토서·제안서 형태의 신규 문서를 생성하는 기능을 개발했습니다.
  - **복잡성** — docx·xlsx·pptx마다 구조와 표현 단위가 달라 단순 치환으로는 교체 영역이 누락되고, 긴 문서를 한 번에 처리하면 생성 품질이 흔들렸습니다.
  - **판단과 구현** — 파일 구조 추론 → 교체 영역 추론 → 내용 추론 → 규칙 기반 렌더링으로 단계를 나누고, LLM이 판단할 부분과 코드가 검증할 부분을 분리했습니다. LLM이 임의 코드를 실행하지 못하도록 문서 생성용 문법과 연산자도 제한했습니다.
  - **품질·성능 검증** — 청킹 전략과 모델·프롬프트 조합을 같은 문서 기준 데이터로 비교하고, 재사용 가능한 입력은 캐시하며 독립 단계는 병렬 처리했습니다.
  - **결과** — 생성 시간은 4~5분에서 1~2분, 문서 1건 평균 비용은 약 350원에서 100원, 슬롯 누락률은 약 20%에서 2% 수준으로 줄였습니다.

- **긴 문서 생성 작업을 안정적으로 처리하는 비동기 파이프라인 개발** — 수 분이 걸리는 문서 생성을 사용자가 기다리는 API 요청과 분리했습니다.
  - **문제** — 처리 중 API가 timeout되거나 서버가 중단되면 사용자는 결과와 실패 위치를 알기 어려웠습니다.
  - **판단과 구현** — 접수 번호를 먼저 반환하고 백그라운드 작업이 생성·상태 갱신·결과 저장을 맡도록 구성했습니다. 완료·실패·시간초과를 화면에서 확인하고 중단된 작업을 다시 처리한 뒤 남은 자원을 정리할 수 있게 했습니다.
  - **결과** — 긴 작업의 진행 상태와 실패를 제품 흐름 안에서 추적하고, 재시작 이후에도 작업을 이어갈 수 있는 구조를 마련했습니다.

- **Wrapsody AI 검색·RAG·Text2SQL 품질 평가 체계 구축** — 문서보안 솔루션의 검색 결과와 AI 답변 품질을 같은 기준으로 반복 검증했습니다.
  - **복잡성** — 사용자의 다의어·동의어 표현과 문서 표현이 달라 기대 문서를 놓칠 수 있었고, Text2SQL·문서 검색·최종 RAG 답변을 한 번에 보면 실패 단계를 구분하기 어려웠습니다.
  - **판단과 구현** — expected document/span과 기대 답변을 정의한 36개 golden dataset을 구성하고, Playwright로 여러 테스트 서버에서 같은 질문을 반복 실행했습니다.
  - **검증 결과** — Text2SQL 결과·문서 검색 결과·최종 답변을 단계별로 비교해 검색 문제인지 생성 문제인지 추적할 수 있게 했고, 모델 변경 전후를 같은 평가셋으로 비교했습니다.

- **Mind-SAT AI 메일 템플릿 추천·생성 기능 개발** — 보안 교육 제품에서 산업군·부서·직급·위협 수준에 맞는 훈련 메일을 추천·생성하는 기능을 Python 백엔드에 연결했습니다.
  - **복잡성** — 메일 유형별 필수 요소와 대상자 컨텍스트가 prompt에 빠지면 결과 품질이 흔들리고, LLM 응답 지연이 사용자 요청을 오래 붙잡을 수 있었습니다.
  - **판단과 구현** — OpenAI SDK·LangChain을 연결하고 메일 유형·산업군·부서·직급·기술 이해도·위협 수준을 prompt 컨텍스트로 분리했습니다. 생성 결과는 프론트엔드에서 안전하게 표시하도록 sanitize 처리했습니다.
  - **결과** — 메일 유형별 생성 기준을 분리해 결과 일관성을 높이고, 긴 LLM 요청을 고려한 Python 서버의 동시성·비동기 처리 기준을 정리했습니다.

- **AI 서버 장애 복구 구조 개발** — 단일 인스턴스 장애로 AI 기능 전체가 중단되는 위험을 줄였습니다.
  - **판단과 구현** — 애플리케이션 변경을 최소화하기 위해 OCI Instance Pool 2대와 Private Load Balancer, Health Check를 구성했습니다.
  - **검증 결과** — 실제 인스턴스 중지 테스트에서 장애 인스턴스 제외와 신규 인스턴스 보충을 확인하고 PROD 컷오버까지 완료했습니다.

#### AI Agent 개발 도구 · 2026.08 – 현재

- **AI Agent 기반 개발 하네스 개발** — 작업 규모에 따라 spec 승인·TDD 구현·테스트 검증·PR 작성 절차를 달리하는 `agent-orchestration`을 단독 설계·개발했습니다.
  - **문제** — 모든 작업에 같은 절차를 적용하면 단순 작업은 느려지고, 복잡한 작업은 검증 단계가 빠질 수 있었습니다.
  - **판단과 구현** — 작업 규모에 따라 기획 깊이와 승인 경계를 나누고, Claude Code·Codex의 차이는 plugin adapter로 감싸 공통 skill에서 판단 기준을 유지했습니다.
  - **안전성 검증** — 결함 주입 시 사용자 변경사항이 손실되지 않도록 byte snapshot·SHA-256 검증·무조건 복원 절차를 구성했습니다.

#### 제품·플랫폼 개발 · 2023–2025

- **M365 Web Add-in 멀티테넌트 플랫폼 개발** — C#/.NET Outlook 클라이언트를 Office.js 기반으로 전환하고, 제품 기능·M365 연동·고객사 설정을 분리했습니다.
  - **결과** — React·TypeScript 모노레포와 Provider 계층으로 제품 도메인·M365·shared 경계를 나누고, 고객사별 설정과 제품별 배포를 독립적으로 관리했습니다.

- **제품 전반의 개발·배포 흐름 구현** — React·TypeScript·Node.js·ASP.NET Core·MSSQL 제품에서 화면·API·데이터·배포를 함께 다뤘습니다.
  - **결과** — Jenkins/GitLab CI/CD를 연결해 반복 검증과 배포 산출물 추적이 가능하도록 했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- **다중 사용자가 참여하는 실시간 음악 서비스 개발** — Next.js·WebSocket 기반으로 OAuth PKCE 인증, playlist·DJ 대기열·moderation 흐름을 구현했습니다.
  - **검증과 결과** — 여러 사용자의 상태 전이를 Playwright 다중 세션으로 검증하고, Vercel·GitHub Actions CI/CD까지 연결했습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- **검색어 추천 데이터셋 구축** — Python·Selenium·BeautifulSoup으로 리뷰를 수집하고 Mecab·TF-IDF·클러스터링 전처리 흐름에 참여했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
