# Frontend Engineer Career Description

## 1. 레거시 Outlook 클라이언트를 M365 Web Add-in으로 전환

기존 C#/.NET Outlook 클라이언트를 새로운 Outlook 환경에서도 확장할 수 있는 Web Add-in으로 전환하면서, Wrapsody eCo와 Mind-SAT 메일 신고 앱을 여러 고객사에 제공해야 하는 운영 조건까지 함께 다뤘습니다. 제품 기능·M365 연동·서버 라우팅 책임이 한데 섞인 상태에서 제품별 Add-in을 완전히 분리하면 공통 연동과 인증 설정이 중복되고, 반대로 서버가 모든 제품 API를 중개하면 한 제품의 변경이 전체 라우팅으로 번질 수 있었기 때문에, 공통 M365 계층과 제품 도메인을 분리하는 방향을 선택했습니다.

Office.js 기반 Web Add-in을 React·TypeScript 모노레포로 옮기며 `mindsat`, `eco`, `m365`, `shared` 경계를 나누고, `OfficeServiceProvider`와 client/service 계층으로 Office runtime 접근을 UI에서 분리했습니다. Node.js·Express 서버는 Microsoft Graph API 라우팅과 테넌트 컨텍스트에 집중시키고 제품 API는 각 도메인에서 호출하게 해, 고객사별 제품 활성화·API URL·Azure AD·dev/prod manifest를 독립적으로 관리할 수 있게 했습니다. 이 구조는 새로운 Outlook 대응과 고객사별 변경을 동시에 감당하면서도 기존 사용자 흐름과 하위 호환 범위를 단계적으로 확인할 수 있는 전환 기반이 되었습니다.

## 2. 보안 교육 제품의 사용자 흐름과 안전한 콘텐츠 처리

Mind-SAT에서 사용자가 OTP/MFA 인증을 통과해 교육을 시작하고, 교육 플레이어·퀴즈·모바일 화면을 거쳐 관리자 통계에서 결과를 확인하는 흐름을 개발했습니다. 특히 훈련 메일은 제품이 직접 통제할 수 없는 콘텐츠를 화면에 표시하는 영역이므로 CSP·DOM Sanitizing을 함께 적용하고 `javascript:` 스킴, 허용되지 않은 태그·속성·외부 리소스 실행을 제한했습니다. 교육 경험을 끊지 않으면서도 신뢰할 수 없는 콘텐츠가 실행 컨텍스트로 변하지 않도록 사용자 흐름과 보안 경계를 함께 설계했습니다.

## 3. 공통 디자인 시스템과 배포 기준

여러 사내 시스템에서 반복되는 UI 패턴을 공통 UI 라이브러리와 디자인 시스템으로 정리하고, 컴포넌트·훅·아이콘·컬러 토큰을 Storybook·TypeDoc·생성 도구와 연결했습니다. 화면마다 비슷한 컴포넌트를 다시 만들지 않고 규칙이 있는 개발 단위로 제공해 새로운 기능을 빠르게 적용할 수 있게 했으며, Jenkins 기반으로 lint/typecheck·build·artifact·환경별 배포와 롤백 판단 기준까지 표준화했습니다. 재사용성은 코드 중복을 줄이는 데서 끝나지 않고 팀이 같은 품질 기준으로 제품을 확장하게 하는 장치라고 보았습니다.

## 4. 성능·상태·E2E를 함께 다루기

초기 로딩과 대용량 렌더링이 사용자 경험을 늦추는 화면은 Code Splitting·Dynamic Import·Virtualization으로 병목을 나누고, 검색·resize·동영상 이벤트에는 debounce/throttle을 적용했습니다. PFPlay에서는 WebSocket 상태와 UI 렌더링이 이어지는 다중 사용자 흐름을 Playwright BrowserContext·storageState로 반복 검증했으며, 복잡한 상태를 화면별 임시 처리로 남기지 않고 도메인·기능 단위로 나누어 변경 영향과 실패 흐름을 추적할 수 있게 했습니다. 성능 최적화와 상태 설계를 별도 작업으로 보지 않고, 사용자가 기다리거나 재시도하는 순간까지 포함한 제품 흐름으로 검증하는 방식을 중요하게 봅니다.

## 5. 프론트엔드 개발 환경의 공급망 보안

제품 기능과 별개로 팀 개발 환경의 안전성을 높이기 위해 `npm-supply-chain-guard`를 만들었습니다. install script·lockfile·loose semver·dependency tree·npm audit를 점검하되, 모든 업데이트를 자동화하면 major 변경이나 강제 설치가 개발 흐름을 깨뜨릴 수 있어 patch/minor 자동 수정과 major/force 사람 검토를 분리했습니다. 팀원이 반복적으로 확인해야 하는 공급망 위험은 도구가 먼저 좁히고, 호환성 판단이 필요한 변경만 사람이 검토하게 해 개발 생산성과 보안 거버넌스를 함께 고려한 사례입니다.

## 기술 범위

React · TypeScript · Next.js · Office.js · Microsoft Graph API · Node.js · Express · WebSocket · Playwright · Storybook · Jenkins · GitLab CI/CD · Vercel · OAuth PKCE · CSP · DOM Sanitizing
