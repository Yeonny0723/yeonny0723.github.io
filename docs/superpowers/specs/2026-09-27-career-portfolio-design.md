# 커리어 포트폴리오 문서 시스템 설계

## 목표

`portfolio`를 김주연의 AI 개발자·프론트엔드 개발자 지원용 문서 시스템으로 전환한다. 한 화면에서 포지션별 이력서와 경력기술서, 공통 포트폴리오를 선택해 읽고 현재 문서를 PDF로 저장할 수 있어야 한다.

핵심 메시지는 다음과 같다.

> 프론트엔드의 사용성, 백엔드의 안정성, AI의 가능성과 운영 효율을 함께 고려해 실제 제품으로 완성하는 개발자

현재 회사에서 다뤄온 보안 도메인은 제품 맥락과 개발 방식의 근거로 함께 보여준다. OTP/MFA, Zero Trust, 고객사·테넌트 권한 격리, DRM 연계 권한 정책, 악성 메일 콘텐츠 정제, 보안 교육·피싱 훈련 경험을 제품 보안 축으로 정리한다. npm 공급망 보안 플러그인은 제품 기능이 아니라 개발 생산성·보안 거버넌스 경험으로 분리한다.

## 정보 구조

첫 화면은 문서 시스템의 진입점이다.

1. Hero: 이름, 한 줄 소개, 핵심 신념, 연락처
2. Position switcher: `AI Engineer`, `Frontend Engineer`
3. Document switcher: `Resume`, `Career Description`, `Portfolio`
4. 현재 선택한 문서의 본문
5. `Export to PDF` 버튼

선택 상태는 URL hash에 반영한다.

- `#resume/ai`
- `#resume/frontend`
- `#career/ai`
- `#career/frontend`
- `#portfolio`

포지션별 문서는 같은 사실 원장을 공유하되, 첫 화면 요약과 프로젝트 순서를 다르게 구성한다. 포트폴리오는 포지션과 무관하게 제품을 만드는 방식과 여러 레이어를 연결한 판단을 보여준다.

## 콘텐츠 원칙

첨부된 Korean Career Story Writer 지침과 `소스/experiences/`의 스키마를 따른다.

- 경험마다 상황과 변화의 필요성을 먼저 쓴다.
- 실제 선택지와 제약을 설명하고, 최종 판단의 이유를 쓴다.
- 본인이 설계·구현·조율·검증한 범위를 팀의 결과와 구분한다.
- 결과는 확인 가능한 변화 중심으로 쓴다.
- 수치, 기술, 권한, 비즈니스 효과를 추정하거나 새로 만들지 않는다.
- 근거가 없는 개선 수치는 초안으로 쓰지 않고 `Evidence To Add`에 남긴다.
- 약점이나 한계는 트레이드오프와 현재의 보완 기준을 함께 제시한다.

공통 서사는 다음 업무 확장 흐름으로 구성한다.

`Frontend → Backend/Domain → AI Application → Product Operations`

- Frontend: 복잡한 상태와 UI 로직 분리, UX, E2E 안정성, 빠른 개발 경험
- Backend/Domain: 레거시·하위 호환, 결합도, 트랜잭션, 장애·동시성 처리, 멀티테넌트
- AI: LLM 위임 범위와 가드레일, 비동기 작업, 평가셋, 모델 A/B, 비용·품질 최적화
- Product Operations: 보안, 인증·권한, 고객사 운영, 장애 복구, 공급망 대응

## 문서별 강조점

### AI Engineer 이력서

AI 제품 개발과 운영 품질을 앞에 둔다.

- 템플릿 기반 문서 생성 파이프라인
- 비동기·병렬 처리, 비용·지연시간 제어
- **AI 품질 평가 체계**: Golden Dataset을 기반으로 검색·RAG·Text2SQL의 품질과 모델·프롬프트·청킹 변경을 검증
- 가드레일과 수동 리뷰 포인트
- OCI 기반 고가용성 인프라
- AI 기능의 사용자 흐름과 운영 검증
- 개발 생산성·보안 거버넌스는 보조 사례로 포함

### Frontend Engineer 이력서

제품 UI와 프론트엔드 플랫폼 경험을 앞에 둔다.

- M365 Web Add-in 전환
- React·TypeScript 제품 개발과 멀티테넌트 구조
- 공통 디자인 시스템
- 렌더링·번들·대용량 테이블 성능 개선
- Playwright E2E와 CI/CD
- PFPlay 실시간 서비스
- npm 공급망 보안 플러그인은 프론트엔드 개발 환경의 안전성과 팀 생산성 사례로 강조

### 경력기술서

각 프로젝트를 다음 순서로 쓴다.

`문제 → 제약 → 고려한 선택지 → 판단 → 구현 → 결과 → 한계와 다음 단계`

AI 모드와 Frontend 모드는 프로젝트 순서와 리드 문장만 바꾸고, 공통 사실과 상세 사례는 재사용한다.

### 포트폴리오

공통 포트폴리오는 다음 세 축으로 구성한다.

1. 제품 개발 관점: 사용성·안정성·운영 효율을 함께 판단하는 방식
2. 보안 도메인: 인증·권한·멀티테넌트·악성 콘텐츠·엔터프라이즈 운영
3. 개발 시스템: 디자인 시스템, E2E, AI 평가 인프라, npm 공급망 보안 플러그인

각 프로젝트는 `Problem`, `Role`, `Analysis`, `Results`, `Operations`, `AI usage`, `Limitations` 중 근거가 있는 항목만 보여준다.

## 콘텐츠 파일 구조

기존 타인의 내용을 담은 `portfolio/content/` 파일은 김주연의 사실 원장과 초안으로 교체한다.

```text
portfolio/content/
├── profile.md
├── positioning.md
├── resume/
│   ├── ai.md
│   └── frontend.md
├── career/
│   ├── ai.md
│   └── frontend.md
├── portfolio/
│   ├── product-philosophy.md
│   ├── security-domain.md
│   ├── ai-platform.md
│   ├── frontend-platform.md
│   ├── engineering-security.md
│   └── pfplay.md
├── education.md
├── certifications.md
└── activities.md
```

출처 우선순위는 다음과 같다.

1. `소스/experiences/`: 경험의 사실, 역할, 제약, 결과
2. `초안/RESUME/`, `초안/PORTFOLIO/`: 기존에 정리된 문장과 포지션별 강조점
3. `ocr_정리.md`: 업무 확장, 인정받은 역할, 개발 관점과 연결 논리
4. 기존 `portfolio/content/`: 다른 사람의 콘텐츠이므로 사실 출처로 사용하지 않음

서로 다른 이력·연락처·학력 정보가 있을 경우 임의로 섞지 않고, 확인 가능한 최신 사실만 사용하거나 콘텐츠에 넣지 않는다.

## UI와 상태

현재의 Vite + React + Sass 구조를 유지한다. 새 의존성은 추가하지 않는다.

- `App`은 문서/포지션 상태를 관리한다.
- 문서 스위처와 포지션 스위처는 키보드로 조작 가능해야 한다.
- hash 변경은 새로고침 없이 문서 상태를 갱신한다.
- 직접 URL hash로 진입해도 유효한 문서가 선택된다.
- 존재하지 않는 hash는 기본 포트폴리오 또는 AI 이력서로 안전하게 복구한다.
- 인쇄 시 사이드바, 탭, export 버튼, 안내용 장식은 숨긴다.
- 본문은 A4 인쇄 폭과 페이지 나눔을 고려한다.

## PDF export

별도 PDF 라이브러리 없이 브라우저의 `window.print()`를 사용한다.

1. 현재 선택 상태를 확인한다.
2. `document.documentElement`에 인쇄 모드 클래스를 잠시 적용한다.
3. 현재 문서만 표시하는 print stylesheet를 사용한다.
4. `window.print()`를 호출한다.
5. `afterprint`에서 상태를 정리한다.

PDF 출력물에는 문서 제목, 포지션, 이름, 연락처, 본문이 남아야 하며, 화면 전용 인터랙션은 포함하지 않는다.

## 검증 기준

- AI/Frontend 이력서와 경력기술서가 각각 올바른 강조 순서로 전환된다.
- 포트폴리오는 포지션 전환과 무관하게 공통 콘텐츠를 보여준다.
- 모든 문서가 실제 소스의 역할·기술·결과와 일치한다.
- AI 품질 평가 체계가 Golden Dataset·검색·RAG·Text2SQL을 하나의 역량으로 표현한다.
- 제품 보안 경험과 npm 공급망 보안 플러그인이 서로 다른 범주로 표시된다.
- 모바일과 데스크톱에서 문서 스위처를 사용할 수 있다.
- 직접 hash URL 진입과 잘못된 hash 복구가 동작한다.
- `window.print()` 호출 전후에 현재 문서만 인쇄 대상으로 남는다.
- `yarn typecheck`와 `yarn build`가 통과한다.

## 범위 밖

- 외부 호스팅·배포
- 실제 채용 지원서 제출
- 외부 CMS나 관리자 편집 기능
- 사용자가 제공하지 않은 수치·회사명·기술·성과의 보강
- 별도 PDF 생성 서버 또는 유료 PDF 라이브러리 도입
