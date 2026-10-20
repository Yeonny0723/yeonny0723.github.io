# **김주연 · AI Application Engineer**

[kkjuyeon@gmail.com](mailto:kkjuyeon@gmail.com) · [GitHub](https://github.com/Yeonny0723) · [LinkedIn](http://www.linkedin.com/in/juyeon-kim-6a227a207) · [Blog](https://yeonny0723.github.io/blog/)

## Summary

팀과 제품의 성장을 우선하고, 호기심을 바탕으로 업무의 경계를 넓혀온 4년차 개발자입니다. 현재 보안 문서 플랫폼 Wrapsody와 보안교육 제품 Mind-SAT에서 문서 생성 Agent, 멀티모달 훈련 콘텐츠 생성 Agent, RAG·Text2SQL 품질 평가를 개발하고 AI 서버를 운영하고 있습니다.

프론트엔드에서 시작해 백엔드, AI 애플리케이션, 운영까지 범위를 넓혀 오며, 하나의 기능을 제품의 전체 흐름으로 보는 기준을 세웠습니다. 새로운 기술을 많이 쓰기보다 복잡한 문제를 적절한 경계로 나누고, 코드·규칙·AI가 책임질 범위를 명확히 하는 것을 중요하게 생각합니다. AI 기능에서도 평가셋, 모델 비교, 비용 관리로 LLM의 불확실성을 운영 가능한 기준으로 바꾸어 왔습니다. 이 경험으로 새로운 AI 기능을 기존 제품에 안정적으로 도입하고, 팀이 더 빠르게 시도하며 안전하게 제품을 발전시킬 수 있도록 기여하겠습니다.

## Core Skills

| 분야 | 기술 |
| --- | --- |
| AI·LLM | OpenAI SDK · LangChain · MCP |
| Backend | Python · FastAPI · Java · Spring Boot · JPA · MySQL · Redis · Node.js · Express |
| Infra | OCI · Jenkins · GitLab CI/CD |
| Frontend·Quality | React · TypeScript · Next.js · Flutter · Playwright |

## Work Experience

### Fasoo AI · Software Engineer · 2023.04 – 현재

#### AI 제품 개발 · 2025 – 현재

**Wrapsody 템플릿 기반 문서 생성 Agent (메인 개발)**

- 템플릿 문서와 여러 원천 파일을 입력받아 양식을 채운 docx·xlsx·pptx 문서를 생성하는 Agent를 설계: 문서 구조 분석 → 변경 영역 확인 → 변경 계획 → Python 코드 생성 → 샌드박스 실행 → 렌더링 → 보안 검증으로 단계를 나누고, 규칙으로 결정 가능한 단계는 LLM 없이 처리
- 요구가 불명확하면 바로 실행하지 않고 역질문으로 변경 대상·범위·출력 형식을 좁힌 뒤, 멀티턴 세션 맥락을 바탕으로 실행 계획을 확정
- 청킹이 없던 구조 추론에 문서 구조 기준 청킹을 도입하고 크기를 실험해 8,000자로 확정, 변경과 관련된 청크만 전달해 추론 성공률 약 20% 향상
- GPT-5.6 Luna·Terra·Sol을 정확도·비용 기준으로 비교 평가해, 최저가 Luna로 목표 정확도를 충족하고 Sol 대비 비용 약 1/10로 절감
- OpenAI Responses API·Code Interpreter로 생성한 Python 코드를 격리된 샌드박스에서 실행하고, 실행·렌더링 오류를 모델에 다시 전달해 수정 코드를 재생성하는 피드백 루프 구성
- 사용자 지침·멀티턴 이력·원천 파일·템플릿의 Prompt Injection을 실행 전 검사하고 Network Policy로 외부 접근을 차단, 결과 Office 파일을 ZIP/XML로 해제해 Macro·VBA·ActiveX·OLE·외부 참조를 검사
- Spring Boot·MySQL(세션·작업 상태)과 Python 문서 처리 서버를 분리하고, requestId·Queue·ThreadPool 워커 기반 비동기 처리와 SSE 단계별 상태 전달로 수 분 걸리는 작업도 재접속 시 복원, Cleanup Scheduler로 자원 회수

**검색·RAG 답변 품질 평가 체계**

- 로컬 LLM(Qwen, vLLM)의 모델·파라미터가 바뀌어도 바로 성능을 확인할 수 있도록, 기대 문서·구간·답변을 정의한 36개 평가셋으로 Text2SQL·검색·답변 단계를 분리 검증하는 회귀 평가를 Playwright로 자동화
- 평가에서 드러난 동의어·다의어 질의 오류를 Text2SQL 시멘틱 레이어(동의어 사전·컬럼 설명) 보강으로 해결, 평가셋 정답 20/36 → 36/36
- 동일 프롬프트·파이프라인에서 Gemma 4 26B-A4B와 Qwen3.5-27B(모두 FP8, RTX 5090)를 비교해, Qwen3.5의 상대 시간 표현(어제, 최근 등)과 파일 유형에서 확장자 확장 등의 질의 누락·오류를 확인
- 고객 문서가 외부로 나가지 않도록 내부망의 로컬 LLM으로 처리하고, 기존 인증 서버의 JWT 검증·문서 권한 체크와 연동

**Mind-SAT 보안 훈련 콘텐츠 생성 Agent (메인 개발)**

- 산업군·직급·위협 수준을 반영해 훈련 메일·보안 퀴즈를 생성하는 멀티턴 Agent를 OpenAI SDK·LangChain으로 개발
- 담당자가 수신 메일을 추출해 직접 보안 검사 후 HTML로 등록하던 과정을, 메일 캡처 이미지 업로드만으로 OCR 해석 → 위협 링크 제거 → UI 요소만 템플릿으로 재구성하도록 대체 (31개 고객사 사용)
- LLM이 생성한 HTML을 신뢰할 수 없는 입력으로 보고 sanitize와 인라인 CSS 속성 화이트리스트로 스크립트 실행 가능 요소를 제거

**Mind-SAT AI 서버 단독 개발·고가용성 구축**

- OCI Instance Pool·Load Balancer로 트래픽을 분산하고 장애 인스턴스를 자동 교체해 단일 장애점을 없애고, 장애 시 1분 이내 복구

#### 제품·플랫폼 개발 · 2023 – 2025

- **Mind-SAT 프론트엔드**: 31개 고객사가 쓰는 OTP/MFA·권한별 화면·학습·퀴즈·관리자 통계 흐름 구현. 메일·AI·백엔드·프론트 서버를 잇는 종단 E2E 테스트로 다중 서버 검증 시간 80% 단축
- **디자인 시스템·MCP 서버**: 공통 UI 라이브러리를 사내 시스템 6개·제품 3개에 적용. 컴포넌트·디자인 토큰 검색 Tool을 제공하는 MCP 서버를 개발해, AI가 UI 생성 시 기존 컴포넌트·훅·아이콘을 재사용하도록 유도하고 중복 구현을 줄임
- **M365 Web Add-in 멀티테넌트 플랫폼**: C#/.NET Outlook 클라이언트를 Office.js 기반 React·TypeScript로 전환하고, Node.js·Express 프록시 서버와 모노레포 공통 계층 구축
- **사내 정보관리 시스템**: 인사·결재·고객 관리 시스템을 React·ASP.NET Core·MSSQL로 마이그레이션하고 ERP 동기화 스케줄러 개발. GitLab Runner·Jenkins로 빌드·검증·배포 자동화

### 엘리스 · React 코치 · 2021.08 – 2021.11

- SW 트랙 3기·AI 트랙 7기 예비 개발자 약 120명 대상 React 개념 강의, 실습 문제 풀이, 코드 리뷰

### MyCelebs · Data Engineer Intern · 2021.08 – 2021.11

- 리뷰 데이터 수집과 Mecab·TF-IDF·클러스터링 전처리로 검색어 추천 모델의 학습 데이터셋 구축 지원

## Side Projects

### OnCue Labs · AI 페르소나 음성 통화 서비스 · 2026.09 · [GitHub](https://github.com/oncue-labs)

1인 개발 Flutter · Spring Boot · FastAPI · WebRTC · OpenAI Realtime API

- 예약 시각에 AI 페르소나가 iOS 앱으로 전화를 거는 서비스. APNs VoIP Push → CallKit 수신 → WebSocket 시그널링 → WebRTC 음성 연결로 구성

### agent-orchestration · AI 개발 워크플로우 플러그인 · 2026.08 – 현재 · [GitHub](https://github.com/Yeonny0723/agent-orchestration)

- AI 코딩 에이전트가 변경이 쉬운 living spec을 기준으로 작은 Task 단위의 구현·리뷰·커밋 루프를 돌도록 하는 Claude Code·Codex 플러그인
- TDD, 테스트 민감도(mutation) 검증, 설계 비판 리뷰, Issue/PR 작성 등 15개 스킬을 제작해 Claude Code·Codex 플러그인 마켓플레이스로 배포

### PFPlay · 실시간 음악 스트리밍 DJ 플랫폼 · 2025.06 – 현재 · [GitHub](https://github.com/pfplay/pfplay-web)

- Next.js 기반 OAuth PKCE 인증, NFT 지갑 연결, WebSocket 기반 재생·대기열 이벤트 흐름 구현
- 수동 재현이 어려운 다중 사용자 실시간 상태 전이를 Playwright E2E로 자동화, GCP → Vercel 인프라 이전

## Education

- RMIT University · Information Systems · 2018.07 – 2022.12 · GPA 3.8 / 4.0
- 멋쟁이사자처럼 AI 스쿨 · 2021.03 – 2021.08 · Python 기반 데이터 수집·전처리, 통계 분석, 머신러닝 모델 학습·평가

## Certifications

- AWS Certified Solutions Architect – Associate (SAA)
- ITT 비즈니스 영어-한국어 통번역

## Activities

- 한국 오픈소스 기여 모임 10기
- UN 한국·호주 전자정부 웹표준 평가 참여
