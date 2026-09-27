# 팀 개발 환경에 보안 가드레일을 심기

npm 의존성은 설치 과정에서 lifecycle script를 실행할 수 있고, lockfile 누락이나 느슨한 semver가 의도하지 않은 변경을 만들 수 있지만 `npm audit`만으로는 설치 시점의 위험과 의존성 커밋을 함께 검토하기 어려웠습니다. 팀 개발 흐름을 멈추지 않으면서 위험도에 따라 자동 점검·안내·사람 검토를 나누기 위해 Claude Code 플러그인과 PreToolUse hook을 구성하고, `/init`, `/audit`, `/git:commit`에서 npm/yarn 설정·lockfile·semver·dependency tree·audit 결과를 함께 확인하도록 만들었습니다.

자동 수정은 patch/minor safe fix로 제한하고 major/force 변경은 사람 검토로 넘겼으며, install 명령에는 안전한 설치 방식을 안내하도록 했습니다. 그 결과 의존성 변경을 일반 코드 변경과 다른 기준으로 검토하고, lockfile·install script·semver·dependency tree를 한 흐름에서 확인할 수 있는 개발 생산성·보안 거버넌스 기준을 만들었습니다. 제품 기능이 아니라 팀이 안전하게 개발하기 위한 도구였기 때문에 실제 도입률이나 시간 절감 수치는 과장하지 않고, 자동화 범위와 사람의 승인 경계를 명확히 남겼습니다.
