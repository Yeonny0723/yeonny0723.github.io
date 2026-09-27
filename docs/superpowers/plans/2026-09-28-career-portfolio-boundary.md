# Career Description과 Portfolio 역할 분리 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Agentic 문서 생성 경험을 Career Description에서는 개인의 요구사항 제안과 문제 해결 사례로, Portfolio에서는 사용자 흐름과 실제 설계·구현을 증명하는 케이스 스터디로 재작성한다.

**Architecture:** `portfolio/content/career/ai.md`는 텍스트 중심의 의사결정·기여·성과 문서로 유지한다. `portfolio/content/portfolio/ai-platform.md`는 같은 사실을 사용자 흐름, 아키텍처, Agent 단계 선택, 운영·평가 구조로 재구성한다. `timeline.md`와 이력서는 상세 내용을 복제하지 않고 요약된 연결 고리만 유지한다.

**Tech Stack:** Markdown content · Vite · TypeScript · existing portfolio renderer

---

### Task 1: Career Description을 개인 기여 중심으로 재작성

**Files:**
- Modify: `/Users/juyeonkim/orca/projects/career/portfolio/content/career/ai.md`

- [x] **Step 1: 사용자 관점 요구사항을 배경에 고정**

  초기 기획이 문서 생성 자체에 집중했지만, 사용자가 긴 작업을 기다리지 않고 이탈 후 재진입하며 누락 영역만 리뷰해야 한다는 요구를 직접 제안한 맥락을 `배경과 문제`에 포함한다.

- [x] **Step 2: 판단과 구현에 요구사항-설계 연결 추가**

  `requestId`, 상태 수명주기, 누락 슬롯·오류 위치 표시, Agent 단계 선택, 포맷별 operator 제한을 각각 사용성·비용·안전성 요구와 연결해 설명한다.

- [x] **Step 3: Career Description의 결과와 한계 유지**

  생성 시간·비용·누락률 수치와 평가셋·운영 한계를 유지해 개인의 판단이 결과로 이어졌음을 검증 가능하게 한다.

### Task 2: Portfolio를 대표 케이스 스터디로 재작성

**Files:**
- Modify: `/Users/juyeonkim/orca/projects/career/portfolio/content/portfolio/ai-platform.md`

- [x] **Step 1: 사용자 흐름을 케이스 스터디의 시작점으로 작성**

  생성 시작 → 백그라운드 처리 → 화면 이탈 → 재진입 → 결과 확인 → 누락 영역 리뷰 흐름을 문서 생성 섹션의 첫 부분에 둔다.

- [x] **Step 2: 구현 구조를 레이어별로 설명**

  Frontend, API, Agent Orchestrator, 추론 파이프라인, Worker, 결과 저장 관계를 설명하고 `requestId`, Polling/Callback, 상태 저장소를 흐름 안에서 해석한다.

- [x] **Step 3: Agent 의사결정과 안전장치 증명**

  구조 추론 생략 조건, 멀티턴 단계 선택, 포맷별 operator, 문서 생성 문법, 누락 영역 표시를 각각 비용·시간·자율성·리뷰 부담과 연결한다.

- [x] **Step 4: 다른 AI 경험은 짧은 사례로 정리**

  검색·RAG·Text2SQL 평가와 AI 서버 운영은 대표 기술과 결과를 남기되, 문서 생성 케이스 스터디와 같은 깊이의 구현 설명은 반복하지 않는다.

### Task 3: 중복과 연결성 검토

**Files:**
- Review: `/Users/juyeonkim/orca/projects/career/ai.md`
- Review: `/Users/juyeonkim/orca/projects/career/portfolio/content/resume/ai.md`
- Review: `/Users/juyeonkim/orca/projects/career/portfolio/content/timeline.md`

- [x] **Step 1: 동일 문장 복제 여부 확인**

  Career Description은 개인의 판단·기여·수치, Portfolio는 사용자 흐름·구조·검증으로 읽히는지 확인한다.

- [x] **Step 2: Resume와 Timeline의 압축 수준 확인**

  두 문서가 Portfolio의 세부 구조를 다시 복제하지 않고 Agentic 문서 생성, 요구사항 주도성, 대표 성과만 전달하는지 확인한다.

### Task 4: 콘텐츠 검증

**Files:**
- Verify: `/Users/juyeonkim/orca/projects/career/portfolio`

- [x] **Step 1: Markdown whitespace 검사**

  Run: `git diff --check`

- [x] **Step 2: 타입 검사**

  Run: `yarn typecheck`

- [x] **Step 3: 프로덕션 빌드**

  Run: `yarn build`

- [x] **Step 4: 변경 파일만 커밋**

  Career Description과 Portfolio 및 검토 결과에서 실제 수정된 파일만 stage하고, 기존 사용자 변경은 포함하지 않는다.
