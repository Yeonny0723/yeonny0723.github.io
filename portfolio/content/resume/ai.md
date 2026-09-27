# AI Engineer Resume

## 한 줄 소개

LLM에 위임할 일과 코드가 책임질 일을 나누고, 품질·비용·보안·운영을 함께 설계해 AI 기능을 제품으로 연결해 온 개발자입니다.

## Summary

- 문서마다 구조가 달라 단순 치환으로는 내용이 빠졌습니다. 파일 구조를 먼저 읽고 필요한 부분만 생성한 뒤 규칙으로 결과를 조합해 슬롯 누락을 약 20%에서 2% 수준으로 줄였습니다.
- 문서 생성에 수 분이 걸려 사용자가 API 응답을 기다리지 않도록 접수 번호를 먼저 반환하고, 백그라운드 작업과 상태 조회·실패 재처리를 분리했습니다.
- 답변만 보면 검색과 생성 중 어디서 실패했는지 알기 어려워, 36개 기준 데이터로 검색 결과·근거 문장·최종 답변을 따로 비교했습니다.
- AI 서버 한 대가 멈추면 기능 전체가 중단될 수 있어 서버 2대와 로드밸런서를 구성하고, 실제 서버 중지로 자동 복구를 확인했습니다.

## AI Position Fit

### 필수 역량과 연결

- **Python 기반 백엔드 API** — 응답이 긴 AI 기능은 Python API와 백그라운드 작업으로 나누어, 사용자가 처리 시간만큼 기다리지 않게 했습니다.
- **LLM API·RAG·Agent 서비스** — OpenAI SDK·LangChain으로 메일 생성과 문서 검색을 제품에 연결하고, Claude Code·Codex 기반 개발 도구도 만들었습니다.
- **Prototype·협업 검증·운영** — 문서 질의응답 PoC를 빠르게 검증한 뒤 Playwright 평가와 서버 중지 테스트로 품질·복구를 확인했습니다.
- **SQL 연동과 비동기 처리** — MSSQL·ERP 데이터를 동기화하고, 오래 걸리는 문서 작업은 접수·처리·결과 조회 단계로 나누었습니다.
- **테스트·Git·CI/CD** — 반복 검증과 배포 이력 추적이 가능하도록 Playwright·GitLab/Jenkins CI/CD를 연결했습니다.

### 우대 역량과 연결

- **MCP·엔터프라이즈 통합** — 사내 디자인 시스템과 Microsoft Graph API를 AI·제품 기능에서 조회할 수 있게 연결했습니다.
- **LLM 평가·품질 비교** — 36개 기준 데이터로 모델 변경 전후의 검색·RAG 품질을 같은 기준으로 비교했습니다.
- **React/TypeScript UI** — AI 결과를 화면에 안전하게 표시하고, 사용자가 확인·수정할 수 있는 흐름으로 연결했습니다.
- **기술 표준·협업** — AI 개발 절차와 디자인 시스템 사용 기준을 팀이 반복해서 적용할 수 있게 정리했습니다.

## Skills

**AI Product** OpenAI SDK · LangChain · LLM Application · RAG · Text2SQL · Prompt Engineering · Golden Dataset · Evaluation Automation

**Backend & Operations** Python · Node.js · MSSQL · Async Processing · Queue/Worker · OCI · Instance Pool · Private Load Balancer

**Engineering** React · TypeScript · Playwright · Git · GitLab CI/CD · Jenkins · MCP · Security Guardrails

## Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### AI 제품과 평가 체계 · 2026

- docx·xlsx·pptx마다 구조와 표현 단위가 달라 단순 치환으로 처리하기 어려워, 파일 구조를 읽고 필요한 내용만 생성한 뒤 규칙으로 결과를 조합했습니다.
- LLM이 임의 코드를 실행할 위험을 막기 위해 문서 생성용 문법과 연산자를 제한하고, 규칙으로 처리할 단계와 LLM이 판단할 단계만 분리했습니다.
- 문서 생성이 수 분 걸려 사용자가 요청 중 멈추거나 timeout을 만날 수 있어 접수 번호를 먼저 반환하고, 백그라운드 작업이 생성·상태 갱신·결과 저장을 맡게 했습니다. 완료·실패·시간초과를 화면에서 확인하고 중단된 작업을 다시 처리할 수 있게 해 긴 작업의 실패를 제품 흐름 안에서 다뤘습니다.
- 품질을 답변만으로 판단하면 검색과 생성 중 어디서 실패했는지 알기 어려워 36개 기준 데이터로 기대 문서·근거 문장·Text2SQL·최종 답변을 단계별 비교하고, Playwright로 서버별 결과를 반복 확인했습니다.
- 생성 비용과 지연시간을 줄이기 위해 모델·프롬프트·입력 분할 방식을 같은 기준 데이터로 비교하고, 재사용 가능한 입력은 캐시하고 독립 단계는 병렬 처리했습니다. 생성 시간은 4~5분에서 1~2분, 평균 비용은 약 350원에서 100원 수준으로 줄었습니다.
- Mind-SAT AI의 Python 백엔드에 OpenAI SDK·LangChain 기반 메일 템플릿 추천·생성을 연결하고, 산업군·부서·직급·기술 이해도·위협 수준을 prompt 컨텍스트로 구조화했습니다.

#### AI Agent 개발 도구 · 2026.08 – 현재

- AI Agent가 작업 규모에 따라 spec 승인·TDD 구현·테스트 검증·PR 작성 절차를 달리하도록 `agent-orchestration` 하네스를 단독 설계·개발했습니다.
- 운영 코드에 결함을 주입할 때 사용자 변경사항이 손실될 위험을 막기 위해 byte snapshot·SHA-256 검증·무조건 복원 절차를 구성하고 Claude Code·Codex 플러그인으로 배포했습니다.

#### 제품·플랫폼 개발 · 2023–2025

- React·TypeScript·Node.js·ASP.NET Core·MSSQL 제품에서 화면·API·데이터·배포를 함께 다뤘고, C#/.NET Outlook 클라이언트를 Office.js M365 Web Add-in으로 전환했습니다.
- 제품 도메인·M365·shared 경계를 나눈 멀티테넌트 모노레포와 Jenkins/GitLab CI/CD를 구성해 고객사별 설정과 제품별 배포를 분리했습니다.

### PFPlay · Frontend / Realtime / Infra · 2025.06 – 현재

- Next.js·WebSocket 제품에서 OAuth PKCE·다중 사용자 상태·Playwright 다중 세션 E2E·Vercel/GitHub Actions CI/CD를 구현했습니다.

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- 검색어 추천 데이터셋을 위해 Python·Selenium·BeautifulSoup으로 리뷰를 수집하고 Mecab·TF-IDF·클러스터링 전처리 흐름에 참여했습니다.

## Education

- RMIT University 정보시스템학과 · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08

## Certifications & Activities

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역 자격증
- 오픈소스 기여 모임 10기
- Elice React 실습 코치 · 약 120명의 예비 개발자 대상
