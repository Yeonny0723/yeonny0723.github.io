# Work Timeline Design

## Goal

포트폴리오에 AI/프론트엔드 직무 구분을 넘어 전체 업무 확장 흐름을 보여주는 `WORK TIMELINE` 섹션을 추가한다. 참고 사이트처럼 연도와 조직을 기준으로 경험을 훑을 수 있게 하되, 현재 포트폴리오의 기존 디자인과 본문 스타일을 유지한다.

## Scope

- 입력 소스: `소스/experiences/`의 25개 경험 파일
- 대상 조직: Fasoo, PFPlay 사이드 프로젝트, Elice, MyCelebs
- 표시 위치: 기존 `Portfolio` 이후, `Skills` 이전
- 표시 언어: 현재 포트폴리오와 동일한 한국어
- 상세도: 압축된 경력 목록. 배경·선택지·회고는 Timeline에 반복하지 않는다.

## Timeline Entry Contract

각 경험은 다음 순서로 표시한다.

1. 기간
2. 경험 또는 프로젝트명
3. 역할·조직·핵심 기술
4. 개발한 내용 — 실제 구현·담당 범위를 한두 문장으로 요약
5. 결과 — 사용자 흐름, 운영 방식, 품질, 자동화, 성능 또는 팀 개발 방식에 생긴 결과를 한 문장으로 요약

결과 수치가 소스에 없는 경우 수치를 만들지 않고, 운영 가능해진 점·반복 작업 감소·검증 가능성·변경 범위 축소처럼 소스가 뒷받침하는 결과만 작성한다.

## Information Architecture

```text
WORK TIMELINE
├── 연도 바로가기: 2026 · 2025 · 2024 · 2023 · 2022 · 2021
├── Fasoo
│   ├── 2026 경험
│   ├── 2025 경험
│   ├── 2024 경험
│   └── 2023 경험
├── PFPlay
├── Elice
└── MyCelebs
```

연도 바로가기는 각 항목의 anchor로 이동한다. 조직별 grouping은 업무 맥락을 유지하고, 연도 정렬은 최근 경험부터 과거 경험 순으로 보여준다. 짧거나 유사한 작업은 같은 연도 아래 여러 entry로 유지하되 문장을 압축한다.

## Rendering and Design

- 기존 `Section`, `Prose`, `Nav` 스타일을 재사용한다.
- 새 색상, 카드 UI, 타임라인 그래픽, 별도 레이아웃은 추가하지 않는다.
- Timeline entry는 기존 본문과 동일한 heading/list/text 계층으로 표현한다.
- 기존 좌측 목차에 `Work Timeline` 항목을 추가한다.
- 전체 포트폴리오 Export to PDF 흐름은 유지한다. Timeline 전체는 기존 Home PDF 출력에 포함한다.
- Timeline 항목별 별도 PDF 버튼은 추가하지 않는다. 압축 목록이라는 목적에 비해 UI를 무겁게 만들기 때문이다.

## Content Rules

- AI Engineer/Frontend Engineer에 직접 연결되지 않는 업무도 포함한다.
- 소스의 `Role / Scope`, `Key Work`, `Results / Impact`, `Tech / Keywords`를 우선 사용한다.
- 경력기술서와 동일한 문장을 복사하지 않고, 구현 내용과 결과만 재구성한다.
- 프로젝트의 실제 담당 범위를 넘겨 쓰지 않는다. 특히 PFPlay는 프론트엔드 개발·프론트 인프라 운영 범위로 한정한다.
- 내부 제품과 고객 정보는 현재 문서에 사용 중인 공개 가능한 수준의 표현만 유지한다.

## Verification

- 25개 소스 파일이 Timeline 데이터에 모두 반영되었는지 확인한다.
- 각 항목의 기간·조직·역할·기술·결과가 원본 소스와 일치하는지 확인한다.
- 연도 anchor와 좌측 목차 이동이 동작하는지 확인한다.
- `Export to PDF` 버튼을 포함한 기존 전체 화면 출력이 깨지지 않는지 확인한다.
- `yarn typecheck && yarn build`를 실행한다.
