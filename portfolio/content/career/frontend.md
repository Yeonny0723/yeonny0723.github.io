# Frontend Engineer Career Description

## 1. 레거시 Outlook 클라이언트를 M365 Web Add-in으로 전환

### 한 줄 요약

새로운 Outlook 환경과 여러 고객사 운영을 동시에 지원하기 위해 제품 도메인·M365 연동·테넌트 설정의 경계를 다시 나눴습니다.

### 배경과 문제

기존 C#/.NET Outlook 클라이언트는 새로운 Outlook 환경에서 확장성과 호환성을 확보하기 어려웠습니다. Wrapsody eCo와 Mind-SAT 메일 신고 앱을 여러 고객사에 제공해야 했지만 제품 기능, M365 연동, 서버 라우팅 책임이 섞여 있었습니다.

### 제약과 선택지

제품별 Add-in을 완전히 분리하면 M365 연동·인증·배포 설정이 중복되고, 서버가 모든 제품 API를 중개하면 제품별 변경이 서버 전체에 번질 수 있었습니다. 공통 M365 계층과 제품 도메인을 분리하는 구조를 선택했습니다.

### 판단과 구현

Office.js 기반 Web Add-in으로 전환하고 React·TypeScript 모노레포에서 `mindsat`, `eco`, `m365`, `shared` 경계를 나눴습니다. `OfficeServiceProvider`와 client/service 계층으로 Office runtime 접근을 UI에서 분리했습니다. Node.js·Express 서버는 Microsoft Graph API 라우팅과 테넌트 컨텍스트에 집중시키고, 제품 API는 각 도메인에서 호출하도록 구성했습니다. 화면·M365 연동·고객사 설정을 한 단위로 묶지 않고 책임별로 나눈 것은 새로운 Outlook 대응과 고객사별 변경을 동시에 감당하기 위한 판단이었습니다.

### 결과와 검증

제품 도메인과 M365 통합 계층을 분리하면서 여러 고객사의 제품 활성화·API URL·Azure AD·dev/prod manifest를 별도로 관리할 수 있게 했습니다. 서버의 책임을 좁혀 제품 API 변경이 전체 라우팅에 번지는 범위를 줄였습니다. 레거시를 전환할 때도 기존 사용자 흐름과 하위 호환 범위를 먼저 확인하고, 변경 가능한 단위부터 분리하는 방식을 택했습니다.

## 2. 보안 교육 제품의 사용자 흐름과 안전한 콘텐츠 처리

Mind-SAT에서 OTP/MFA 인증, 교육 플레이어, 퀴즈, 모바일 화면, 관리자 통계 대시보드 등 사용자가 교육을 시작해 완료하고 결과를 확인하는 흐름을 개발했습니다. 훈련 메일처럼 신뢰할 수 없는 콘텐츠는 CSP·DOM Sanitizing으로 정제하고 `javascript:` 스킴, 허용되지 않은 태그·속성·외부 리소스 실행을 제한했습니다.

## 3. 공통 디자인 시스템과 배포 기준

여러 사내 시스템의 UI 패턴을 분석해 공통 UI 라이브러리와 디자인 시스템으로 정리했습니다. 컴포넌트·훅·아이콘·컬러 토큰을 구조화하고, Storybook·TypeDoc·생성 도구를 연결했습니다. 반복되는 화면과 설정을 자동화해 새로운 기능을 빠르게 적용할 수 있는 개발 단위를 만들고, Jenkins 기반으로 lint/typecheck·build·artifact·환경별 배포와 롤백 판단 기준을 표준화했습니다.

## 4. 성능·상태·E2E를 함께 다루기

초기 로딩·대용량 렌더링 병목을 Code Splitting·Dynamic Import·Virtualization으로 분해하고, 검색·resize·동영상 이벤트에는 debounce/throttle을 적용했습니다. PFPlay에서는 WebSocket 상태와 UI 렌더링이 이어지는 다중 사용자 흐름을 Playwright BrowserContext·storageState로 반복 검증했습니다. 복잡한 상태를 화면별 임시 처리로 남기지 않고 도메인·기능 단위로 나누어, 변경 시 영향을 추적하고 실패 흐름을 재현할 수 있게 하는 것을 중요하게 봅니다.

## 5. 프론트엔드 개발 환경의 공급망 보안

제품 기능과 별개로 팀 개발 환경의 안전성을 높이기 위해 `npm-supply-chain-guard`를 만들었습니다. install script, lockfile, loose semver, dependency tree, npm audit를 점검하고, patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다. 이 경험은 제품 보안 기능이 아니라 개발 생산성·보안 거버넌스 사례입니다.

## 기술 범위

React · TypeScript · Next.js · Office.js · Microsoft Graph API · Node.js · Express · WebSocket · Playwright · Storybook · Jenkins · GitLab CI/CD · Vercel · OAuth PKCE · CSP · DOM Sanitizing
