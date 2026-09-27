# AI 기능을 운영 가능한 제품으로 만들기

## 문서 생성

템플릿과 여러 원천 파일을 받아 docx·xlsx·pptx를 생성하는 기능에서 API와 worker를 분리하고 `requestId` 기반 상태 수명주기를 만들었습니다. 구조 추론·포맷별 chunking·슬롯 단위 추론·규칙 기반 렌더링을 조합해 LLM의 역할을 제한하고, 비용·지연시간·누락률을 함께 관리했습니다.

## 검색과 평가

Wrapsody AI 문서 검색 품질에서는 36개 golden dataset을 기준으로 expected document/span, Text2SQL, 문서 검색, 최종 RAG 응답을 분리해 평가했습니다. Playwright로 여러 테스트 서버를 반복 실행하고, 다의어·동의어 실패 로그를 검색과 prompt 개선으로 연결했습니다.

## 서비스 운영

Mind-SAT AI Python 백엔드에 OpenAI SDK·LangChain 기반 메일 템플릿 추천·생성을 연결했습니다. 단일 AI 서버의 장애 위험은 OCI Instance Pool과 Private Load Balancer로 줄이고, 실제 인스턴스 중지 테스트로 복구 동작을 확인했습니다.

## 제가 중요하게 생각하는 기준

- LLM이 판단할 영역과 프로그램이 검증할 영역을 나눈다.
- 결과 품질을 같은 평가셋으로 비교할 수 있게 한다.
- 비용·지연시간·동시성·재처리를 사용자 흐름과 함께 설계한다.
- 인증·권한·개인정보·Prompt Injection 같은 보안 위협을 제품 조건으로 본다.

## Agentic AI와 개발 표준

개인 프로젝트 `agent-orchestration`에서는 AI Agent의 작업 규모 판정·spec 승인·TDD 구현·테스트 민감도 검증·PR 작성 흐름을 하나의 하네스로 묶었습니다. Claude Code와 Codex 양쪽에서 같은 판단 기준을 사용하도록 plugin은 얇게 두고, 공통 skill에 절차와 검증 규칙을 모았습니다.

이 경험은 Agentic AI를 단순히 호출하는 데서 그치지 않고, 승인 경계·복원 안전성·테스트 감지력·외부 쓰기 권한까지 포함한 운영 기준으로 확장한 사례입니다.
