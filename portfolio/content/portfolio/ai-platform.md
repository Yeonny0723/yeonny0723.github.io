# AI 기능을 운영 가능한 제품으로 만들기

## 문서 생성

템플릿과 여러 원천 파일을 받아 docx·xlsx·pptx를 생성하는 기능에서, 입력에 따라 필요한 단계만 실행하는 Agentic 멀티턴 파이프라인을 설계했습니다. 구조 추론·교체 영역 추론·내용 추론·렌더링을 분리하고 값 변환처럼 구조 추론이 필요 없는 경우에는 해당 단계를 건너뛰어 LLM 호출 비용과 처리 시간을 줄였습니다. 포맷별 허용 연산자와 문서 생성용 문법으로 Agent의 자율 실행 범위를 제한하고, API와 worker를 분리해 `requestId` 기반 상태 수명주기를 만들었습니다. 비용·지연시간·누락률을 함께 관리하며 Polling·Callback은 같은 상태 저장소를 읽게 하고, 완료·실패·timeout·재시작 뒤에는 Cleanup Scheduler가 작업 자원을 회수하도록 했습니다.

모델별 input/output token 단가를 설정값으로 분리하고 실제 사용량으로 호출 비용을 계산하는 cost guard를 구성했습니다. GPT-5.4-luna·GPT-5.4-terra를 같은 문서 golden dataset으로 비교하고, 파일 단위 입력 분할·cached input·단계 내 병렬 처리로 품질과 비용·지연시간을 함께 조정했습니다.

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
