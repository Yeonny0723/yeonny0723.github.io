# 오픈소스 · AI 개발 도구

AI 코딩 에이전트와 일하면서 직접 겪은 문제를 도구로 만들어 공개하고 팀에 공유했습니다.

## agent-orchestration

[GitHub](https://github.com/Yeonny0723/agent-orchestration) · Claude Code·Codex 플러그인 · 15개 스킬

큰 사양을 한 번에 맡기고 마지막에 몰아서 리뷰하다 보니, 어제 무엇을 시켰는지도 설명하지 못하는 **이해의 부채**가 쌓였습니다. 사양이 바뀌자 영향 범위를 알 수 없었고, 결국 생성에 든 시간만큼 다시 리뷰해야 했습니다. 그래서 구현보다 사양을 먼저 다루는 흐름을 만들었습니다. 회귀 위험이 큰 행위에는 운영 코드에 결함을 일부러 넣어 테스트가 실제로 실패하는지 확인하고, 파일 해시로 원본 복원까지 검증합니다.

<figure class="diagram"><img src="/diagrams/agent-orchestration.svg" alt="기존 방식과 agent-orchestration 워크플로 비교" loading="lazy"></figure>

```bash
claude plugin marketplace add "https://github.com/Yeonny0723/agent-orchestration.git#master" --scope user
claude plugin install agent-orchestration@agent-orchestration-marketplace --scope user
```

## npm-supply-chain-guard

[GitHub](https://github.com/Yeonny0723/npm-supply-chain-guard) · Claude Code 플러그인

AI 에이전트는 필요한 패키지를 스스로 설치합니다. lockfile 없이 재해석된 의존성, 느슨한 semver 범위로 들어오는 악성 버전, 설치 스크립트가 사람이 보지 않는 사이 공급망 공격의 통로가 될 수 있어, 설치를 보안 민감 작업으로 보고 설치 시점에 막도록 만들었습니다.

<figure class="diagram"><img src="/diagrams/npm-supply-chain-guard.svg" alt="설치 시점 가드와 설치 이후 감사 흐름" loading="lazy"></figure>

```bash
/plugin marketplace add yeonny0723/npm-supply-chain-guard
/plugin install npm-supply-chain-guard@yeonny0723
```
