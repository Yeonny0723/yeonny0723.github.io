# Work Timeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or **superpowers:executing-plans** to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a compact Work Timeline that represents all 25 source experiences by year and organization without changing the established portfolio design.

**Architecture:** Store the timeline as one Markdown content document, using explicit HTML anchors for year navigation and the existing content plugin for rendering. Import the document in `App.tsx`, place it after Portfolio and before Skills, and add one `Nav` item so the existing sidebar and hash scrolling handle navigation.

**Tech Stack:** React 19, TypeScript, Vite content plugin, Marked Markdown, existing SCSS modules.

---

### Task 1: Curate the compressed timeline content

**Files:**
- Create: `portfolio/content/timeline.md`
- Read: `소스/experiences/*.md`

- [ ] **Step 1: Create the document skeleton and navigation anchors**

Create a Markdown document with the following structure. The raw HTML anchors are required because the Markdown renderer intentionally does not generate heading IDs.

```markdown
<nav aria-label="연도별 바로가기">
  <a href="#timeline-2026">2026</a> ·
  <a href="#timeline-2025">2025</a> ·
  <a href="#timeline-2024">2024</a> ·
  <a href="#timeline-2023">2023</a> ·
  <a href="#timeline-2022">2022</a> ·
  <a href="#timeline-2021">2021</a>
</nav>

<div id="timeline-2026"></div>
## 2026
```

Repeat the year anchor before each year heading. Keep the document title out of the file because `App.tsx` supplies the section title.

- [ ] **Step 2: Add every source experience exactly once**

Use recent-first order and group entries by organization. Include these 25 source files once each:

```text
2026: 2026-claude-code-team-plugin, 2026-design-system-mcp,
      2026-mindsat-ai-backend, 2026-mindsat-e2e-testing,
      2026-npm-supply-chain-guard, 2026-oci-ha-infrastructure,
      2026-wrapsody-ai-search-evaluation,
      2026-wrapsody-template-document-generation,
      side-agent-orchestration
2025: 2025-common-design-system, 2025-frontend-performance-optimization,
      2025-jenkins-cicd, 2025-m365-web-addin-platform,
      2025-mindsat-security-training, 2025-wrapsody-eco-outlook-addin,
      side-pfplay
2024: 2024-erp-sync, 2024-frontend-dev-environment-modernization,
      2024-gitlab-cicd, 2024-internal-design-system,
      2024-legacy-migration
2023: 2023-flutter-webview, 2023-marketing-visitor-analytics
2022: 2022-elice-react-tutor
2021: 2021-mycelebs-data-engineer-intern
```

If a source period spans multiple years, place the entry under its primary/latest work year and retain the complete period in the entry metadata.

- [ ] **Step 3: Apply the compact entry format**

For each source, write one heading and two short paragraphs using this exact shape:

```markdown
### 프로젝트명

`기간` · `조직` · `역할` · `핵심 기술`

**개발한 내용** — 실제로 구현·담당한 기능과 범위를 한두 문장으로 요약한다.

**결과** — 소스의 Results / Impact를 우선하고, 수치가 없으면 운영 가능성·자동화·검증 가능성·변경 범위 축소·협업 개선처럼 근거가 있는 결과만 한 문장으로 쓴다.
```

Do not copy the full Context, Constraints, Options Considered, or Decision sections. Do not add unsupported metrics, ownership, customer counts, or technologies.

- [ ] **Step 4: Verify source coverage before integration**

Run this source-title checklist after writing the file:

```bash
source_count=\$(find 소스/experiences -maxdepth 1 -type f -name '*.md' ! -name README.md | wc -l)
timeline_count=\$(rg -c '^### ' portfolio/content/timeline.md | awk -F: '{print \$NF}')
test "\$source_count" -eq 25
test "\$timeline_count" -eq 25
```

Expected: all commands succeed with no output; inspection should show `source_count=25` and `timeline_count=25`.

### Task 2: Connect Timeline to the existing page and navigation

**Files:**
- Modify: `portfolio/src/App.tsx`

- [ ] **Step 1: Import and type the timeline document**

Add the import beside the other content imports:

```tsx
import timelineDoc from '/content/timeline.md';
```

Add the typed constant beside `skills`:

```tsx
const timeline = timelineDoc as unknown as ContentDoc;
```

- [ ] **Step 2: Add the Nav item**

Add this item after `portfolio` and before `skills` so the sidebar order matches page order:

```tsx
{ id: 'timeline', label: 'Work Timeline' },
```

- [ ] **Step 3: Render the section without new visual styles**

Add this section after the existing Portfolio section and before Skills:

```tsx
<Section id="timeline" title="Work Timeline">
  <Prose html={timeline.bodyHtml} />
</Section>
```

Do not add new colors, card components, timeline graphics, or per-entry PDF buttons. The existing Hero PDF button remains the full-page export path.

### Task 3: Verify content, anchors, and build output

**Files:**
- Verify: `portfolio/content/timeline.md`
- Verify: `portfolio/src/App.tsx`

- [ ] **Step 1: Run static checks**

Run:

```bash
cd portfolio
yarn typecheck
yarn build
```

Expected: both commands pass with no TypeScript errors and Vite produces `dist/` assets.

- [ ] **Step 2: Run the local browser smoke check**

With `yarn dev` running, reload `http://127.0.0.1:5173/portfolio/#timeline`, then verify:

1. The left navigation contains `Work Timeline`.
2. The section appears after `Portfolio` and before `Skills`.
3. Year links move to `timeline-2026` through `timeline-2021`.
4. Fasoo, PFPlay, Elice, and MyCelebs entries are visible.
5. The existing `Export to PDF` button remains visible and no new visual language appears.

- [ ] **Step 3: Check the final diff and commit the implementation**

Run:

```bash
git diff --check
git status --short
git add portfolio/content/timeline.md portfolio/src/App.tsx
git commit -m "add compressed work timeline"
```

Expected: only the Timeline content and its page integration are included in the implementation commit. Existing unrelated `profile.md` and `links.md` working-tree changes remain untouched.
