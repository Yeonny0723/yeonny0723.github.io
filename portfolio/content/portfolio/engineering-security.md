# 팀 개발 환경에 보안 가드레일을 심기

## 문제

npm install은 lifecycle script를 실행할 수 있고, lockfile 누락이나 loose semver는 의도하지 않은 패키지 변경을 만들 수 있습니다. `npm audit`만으로는 설치 시점의 위험과 의존성 변경 커밋 기준을 함께 관리하기 어려웠습니다.

## 판단과 구현

팀의 개발 흐름을 막지 않으면서 위험도에 따라 경고·차단·사람 검토를 나누기 위해 Claude Code 플러그인과 PreToolUse hook을 구성했습니다. `/init`, `/audit`, `/git:commit`으로 npm/yarn 설정·lockfile·semver·dependency tree·audit 결과·의존성 커밋을 점검하고, install 명령 실행 시 안전한 설치 방식을 안내하도록 했습니다.

자동 수정은 patch/minor safe fix 범위로 제한하고 major/force 변경은 사람 검토로 넘겼습니다. 제품 기능이 아니라 팀이 안전하게 개발하도록 만든 **개발 생산성·보안 거버넌스 도구**이며, 실제 팀 도입률이나 시간 절감 수치는 주장하지 않습니다.

## 결과

의존성 변경을 일반 코드 변경과 분리해 검토하는 기준을 만들고, lockfile·install script·semver·dependency tree를 한 흐름에서 확인할 수 있게 했습니다. 보안 자동화의 범위를 제한하는 것 자체가 운영 안전성의 일부라는 기준을 세운 경험입니다.
