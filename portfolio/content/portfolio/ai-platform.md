# Wrapsody AI 문서 생성 Agent와 품질 평가

템플릿 문서와 여러 원천 파일로 DOCX·XLSX·PPTX를 만들어 주는 Agent를 메인 개발자로 설계·구현했고, 검색·RAG 기능에서는 품질을 판단하는 평가 체계를 맡았습니다.

<figure class="diagram"><img src="/diagrams/wrapsody-pipeline.svg" alt="문서 생성 파이프라인과 비동기 처리 구조" loading="lazy"></figure>

## 핵심 판단

### 역질문으로 요구를 좁히는 멀티턴 흐름

- **문제** 사용자의 요구가 처음부터 구체적이지 않아, 바로 실행하면 원하지 않는 문서가 만들어지고 처음부터 다시 요청해야 했습니다.
- **판단** 요구가 불명확하면 바로 파일을 바꾸지 않고 변경할 대상·범위·출력 형식·제약을 역질문으로 확인한 뒤, 실행 가능한 수준이 됐을 때만 파이프라인을 시작하게 했습니다. 답변과 이전 대화는 세션에 저장해 다음 수정 요청에서도 이어서 씁니다.
- **결과** 사양을 대화로 먼저 좁힌 뒤 생성하고, 같은 세션 안에서 이어서 고칠 수 있습니다.

<figure class="diagram"><img src="/diagrams/placeholder-wrapsody-chat.svg" alt="임시 이미지: 역질문으로 요구를 좁히는 대화 화면" loading="lazy"></figure>

### 최대 10분 걸리는 작업을 백그라운드로 분리

- **문제** 전체 파이프라인이 최대 10분까지 걸려, 요청을 붙잡고 기다리면 사용자가 화면을 벗어날 수 없었습니다.
- **판단** 세션·작업 상태(Spring Boot·MySQL)와 문서 처리(Python)를 나누고, 문서 생성 전용 스레드 풀 워커와 SSE로 단계별 상태를 전달했습니다.
- **결과** 화면을 닫았다 돌아와도 진행 상태와 결과를 이어서 확인할 수 있습니다.

### 청킹과 모델은 실험으로 결정

- **문제** 긴 문서를 한 번에 넘기면 추론할 영역이 너무 많아 정확도가 떨어지고 추론에 실패했습니다.
- **판단** 문서 구조 기준 청킹을 도입해 크기를 실험했고(8,000자보다 작으면 표 안의 영역이 잘림), GPT-5.6 Luna·Terra·Sol을 정확도와 비용으로 비교했습니다.
- **결과** 추론 성공률 약 20% 향상, 가장 저렴한 Luna로 목표 정확도를 맞춰 비용 약 1/10.

### 생성 코드와 결과물을 신뢰하지 않는 실행 환경

- **판단** 생성 코드는 OpenAI Code Interpreter 샌드박스와 Network Policy로 격리해 실행하고, 실패하면 오류를 되돌려 재생성합니다. 입력의 Prompt Injection과 결과 Office 파일의 Macro·ActiveX·OLE를 검사합니다.

## 검색·RAG 품질 평가 체계

RAG·Text2SQL 기능에는 지원 역할로 참여했고, 그중 평가 체계와 Text2SQL 시멘틱 레이어 개선을 맡았습니다. 질문마다 찾아야 할 문서·본문 위치·답변을 정해 둔 36개 평가셋으로, 실패가 어느 단계에서 났는지 가릴 수 있게 했습니다.

<figure class="diagram"><img src="/diagrams/eval-structure.svg" alt="36개 정답 기준 평가셋과 단계별 검증 구조" loading="lazy"></figure>

<figure class="diagram"><img src="/diagrams/eval-result.svg" alt="시멘틱 레이어 보강 전후 정답 수" loading="lazy"></figure>
