# Outlook Add-in 개발

## 문제 상황

기존 C#/.NET Outlook 클라이언트를 새 Outlook 환경에 맞춰 전환해야 했습니다. 고객사마다 Add-in 서버를 따로 두면 고객이 늘 때마다 서버 리소스와 설정 관리 부담도 늘어납니다. Mind-SAT 메일 신고와 Wrapsody eCo 문서 공유는 제품 API가 다르지만 Office 초기화, 메일 컨텍스트, Microsoft Graph API 권한 처리는 공통으로 필요했습니다.

## 선택한 접근과 이유

2인 협업으로 React·TypeScript와 Office.js 기반 M365 Web Add-in을 만들었습니다. 고객사별 서버를 늘리는 대신 공통 Node.js/Express 서버를 Graph API 프록시로 두고, 제품 API는 각 제품에서 직접 호출하게 했습니다. 메일 작업은 메모리 큐로 처리하고, 테넌트별 권한과 암호화된 설정을 분리해 공통 서버에서도 고객사 경계를 유지했습니다. `mindsat`, `eco`, `m365`, `shared` 모듈을 나눈 이유는 제품 기능을 추가할 때 Office 연동 코드를 다시 만들지 않기 위해서입니다.

## 구현과 검증

기존 클라이언트의 메일 작성·수신 흐름을 분석해 Office.js로 사용자·메일 컨텍스트를 읽는 계층을 만들었습니다. `OfficeServiceProvider`와 `MailClient`가 Office runtime 접근을 맡고, 제품별 service가 신고·문서 공유 동작을 담당합니다. 서버는 Graph API가 필요한 메일 조회·전달·삭제를 중개합니다. 테넌트별 제품 활성화, API 주소, 권한과 암호화된 설정, 개발·운영 manifest를 분리해 고객사 환경에 맞춰 배포했습니다. Wrapsody eCo에는 메일 작성, 문서 첨부, 수신 메일 기반 액션을 연결하고 Outlook 환경·다국어 차이를 확인했습니다.

## 결과

공통 M365·Graph 연동 모듈을 재사용하면서 Wrapsody eCo Add-in의 추가 개발 기간을 기존 방식 대비 절반으로 줄였습니다. 고객사마다 서버를 따로 마련하던 부담도 공통 프록시 구조로 낮췄습니다. eCo Add-in은 2026년 5월 기준 24개 고객사·273명 운영 환경에 제공됐습니다.
