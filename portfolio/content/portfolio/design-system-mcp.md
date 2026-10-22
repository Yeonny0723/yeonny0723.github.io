# 디자인 시스템 공통 라이브러리와 MCP 서버

React·TypeScript 공통 UI 패키지를 만들어 사내 시스템 6개·제품 3개에 적용하고, Jenkins로 GitLab Packages 배포와 버전 관리를 직접 맡았습니다. 이후 AI 개발 도구가 이 디자인 시스템을 직접 조회하는 MCP 서버로 확장했습니다.

- **문제** AI가 재사용할 컴포넌트를 찾지 못해 이미 있는 모듈을 다시 만들거나, 없는 props와 표준에 없는 색상·아이콘을 썼습니다.
- **판단** 디자인 시스템을 매번 프롬프트에 넣지 않고, AI가 필요할 때 도구로 조회하게 했습니다. Storybook 문서와 JSDoc을 레지스트리로 컴파일하고, 소스가 바뀔 때마다 자동으로 다시 컴파일합니다.
- **결과** AI가 실제 디자인 시스템 기준으로 코드를 쓰고, 문서와 코드가 어긋나지 않습니다. 프론트엔드 엔지니어 4명이 사용합니다.

<figure class="diagram"><img src="/diagrams/design-system-mcp.svg" alt="패키지 배포와 MCP 레지스트리 흐름" loading="lazy"></figure>

<figure class="diagram"><img src="/diagrams/placeholder-mcp-toolcall.svg" alt="임시 이미지: AI 도구가 MCP로 컴포넌트를 조회하는 화면" loading="lazy"></figure>
