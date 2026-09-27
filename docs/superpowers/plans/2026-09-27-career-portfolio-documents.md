# Career Portfolio Documents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing portfolio with a position-aware Korean career document system that switches between AI/Frontend resumes, career descriptions, and a shared portfolio, then prints the active document to PDF.

**Architecture:** Keep the existing Vite + React + Sass stack. Build a small typed document registry from Markdown imports, let `App` resolve the active `{document, position}` view from the URL hash, and render one shared shell around the selected document. Use `window.print()` plus print-only CSS instead of adding a PDF dependency.

**Tech Stack:** React 19, TypeScript, Vite, Sass, existing Markdown content plugin, `window.print()`.

---

## File map

### New files

- `portfolio/src/content/documents.ts` — typed registry for the six document states and safe hash parsing.
- `portfolio/src/components/DocumentSwitcher.tsx` — document and position controls.
- `portfolio/src/components/DocumentSwitcher.module.scss` — responsive controls and active states.
- `portfolio/src/components/DocumentView.tsx` — selected document header and Markdown body.
- `portfolio/src/components/DocumentView.module.scss` — document layout and evidence callouts.
- `portfolio/src/components/PrintButton.tsx` — print action with accessible label.
- `portfolio/src/components/PrintButton.module.scss` — print button styling.
- `portfolio/content/positioning.md` — shared positioning statement.
- `portfolio/content/resume/ai.md` — AI Engineer resume.
- `portfolio/content/resume/frontend.md` — Frontend Engineer resume.
- `portfolio/content/career/ai.md` — AI-focused career description.
- `portfolio/content/career/frontend.md` — Frontend-focused career description.
- `portfolio/content/portfolio/product-philosophy.md` — product development philosophy.
- `portfolio/content/portfolio/security-domain.md` — product security domain.
- `portfolio/content/portfolio/ai-platform.md` — AI application and evaluation platform.
- `portfolio/content/portfolio/frontend-platform.md` — frontend platform and product engineering.
- `portfolio/content/portfolio/engineering-security.md` — npm supply-chain guard as team security tooling.
- `portfolio/content/portfolio/pfplay.md` — personal real-time product.
- `portfolio/content/certifications.md` — verified certifications.

### Modified files

- `portfolio/src/App.tsx` — replace the old timeline renderer with document-state rendering.
- `portfolio/src/types.ts` — add document/position types and retain only types used by the new shell.
- `portfolio/src/components/Hero.tsx` — show 김주연’s positioning and contact information.
- `portfolio/src/components/Hero.module.scss` — implement the editorial hero layout.
- `portfolio/src/styles/tokens.scss` — replace the old generic palette with a warm paper/ink/rust system.
- `portfolio/src/styles/global.scss` — add document typography, focus states, print rules, and reduced-motion support.
- `portfolio/src/App.module.scss` — style the shell grid, document stage, and responsive layout.
- `portfolio/index.html` — change title and meta description to 김주연’s portfolio.
- `portfolio/content/profile.md` — replace the existing person’s profile with 김주연’s verified profile.
- `portfolio/content/education.md` — replace the existing education content using the approved resume draft only after resolving conflicts.
- `portfolio/content/activities.md` — replace the existing activities content with the approved draft facts.
- `portfolio/content/links.md` — replace links with 김주연’s verified links.
- `portfolio/content/skills.md` — replace the old skills list with role-oriented skills.

### Deleted files

- `portfolio/content/timeline/*.md` — old person’s timeline documents no longer used by the new registry.
- `portfolio/content/experience/*.md` — old person’s experience documents no longer used by the new registry.
- `portfolio/content/ai.md` — replaced by position-aware document files.
- `portfolio/content/summary.md` — replaced by `positioning.md` and resume documents.
- `portfolio/content/companies.yml` — old company timeline is no longer the source of document ordering.
- `portfolio/src/content/loader.ts` — old timeline/experience loader is no longer needed.
- `portfolio/src/components/CompanyBlock.tsx`, `CompanyBlock.module.scss`, `ProjectCard.tsx`, `ProjectCard.module.scss`, `ExperienceNote.tsx`, `ExperienceNote.module.scss`, `Chips.tsx`, `Chips.module.scss`, `EmptyNote.tsx`, `EmptyNote.module.scss`, `Section.tsx`, `Section.module.scss`, `Prose.tsx`, `Footer.tsx`, `Footer.module.scss`, `Nav.tsx`, `Nav.module.scss` — old timeline navigation components not used by the new document shell.

The deletion list is limited to files made obsolete by the new renderer. Source notes outside `portfolio/` remain unchanged.

---

### Task 1: Create the evidence-grounded content set

**Files:**
- Create: all Markdown files under `portfolio/content/resume/`, `portfolio/content/career/`, and `portfolio/content/portfolio/` listed in the file map.
- Modify: `portfolio/content/profile.md`, `education.md`, `activities.md`, `links.md`, `skills.md`.
- Delete: old timeline, experience, summary, AI, and company content files listed above.

- [ ] **Step 1: Build the shared profile and positioning copy from verified sources**

Use `초안/RESUME/ai.md`, `초안/RESUME/frontend.md`, `초안/PORTFOLIO/*.md`, `소스/experiences/*.md`, and `ocr_정리.md`. Keep the shared thesis concrete: frontend usability, backend stability, and AI operating efficiency meet in a working product. Do not copy the old `이해창` identity or its contact information.

- [ ] **Step 2: Write the AI resume with one unified evaluation capability**

Represent Golden Dataset, search, RAG, and Text2SQL as one bullet titled `AI 품질 평가 체계`; do not present them as separate achievements. Put document generation, asynchronous processing, cost/latency control, guardrails, HA infrastructure, and security-aware product operation before supporting tooling.

- [ ] **Step 3: Write the Frontend resume with product and platform emphasis**

Lead with M365 Web Add-in migration, React/TypeScript product work, design systems, performance, Playwright E2E, CI/CD, and PFPlay. Include `npm-supply-chain-guard` as frontend developer tooling and security governance, not as a customer-facing product feature.

- [ ] **Step 4: Write both career descriptions using the same evidence schema**

Each major project must use these headings where the source supports them:

```markdown
## 프로젝트명

### 한 줄 요약
### 배경과 문제
### 제약과 선택지
### 판단과 구현
### 결과와 검증
### 운영 기반
### 한계와 다음 단계
```

The AI and Frontend files may reorder the same project set, but they must not change role, scope, technologies, or outcomes.

- [ ] **Step 5: Write shared portfolio case studies**

Create separate cases for product philosophy, product security domain, AI platform/evaluation, frontend platform, engineering security tooling, and PFPlay. The engineering-security case must say that the plugin was built for teammates’ development workflow and must not be described as a product security feature.

- [ ] **Step 6: Remove obsolete content and run a stale-identity scan**

Run:

```bash
rg -n '이해창|Hae-chang|gail5135|React, Electron 기반' portfolio/content portfolio/src portfolio/index.html
```

Expected: no matches. Then remove the obsolete content files from the deletion list with `apply_patch` and verify the remaining files with `rg --files portfolio/content`.

- [ ] **Step 7: Commit the content set**

```bash
git add portfolio/content
git commit -m "replace portfolio content with evidence-led career documents" -m "Constraint: Keep every claim grounded in the supplied resume drafts and experience sources.\nRejected: Reusing the existing timeline content | it belongs to another person.\nConfidence: high\nScope-risk: moderate\nDirective: Preserve the distinction between product security and engineering security tooling.\nTested: Stale-identity scan and content file listing.\nNot-tested: React rendering is covered in later tasks."
```

---

### Task 2: Add typed document state and content registry

**Files:**
- Create: `portfolio/src/content/documents.ts`
- Modify: `portfolio/src/types.ts`

- [ ] **Step 1: Define the document state types**

Add these types:

```ts
export type Position = 'ai' | 'frontend';
export type DocumentKind = 'resume' | 'career' | 'portfolio';

export interface DocumentView {
  kind: DocumentKind;
  position?: Position;
  label: string;
  title: string;
  slug: string;
  bodyHtml: string;
}
```

- [ ] **Step 2: Register the six Markdown documents**

Import the Markdown modules directly and build a `DOCUMENTS` array with this order:

```ts
const DOCUMENTS: DocumentView[] = [
  { kind: 'resume', position: 'ai', label: 'AI 이력서', title: 'AI Engineer Resume', slug: 'resume-ai', bodyHtml: resumeAi.bodyHtml },
  { kind: 'resume', position: 'frontend', label: 'Frontend 이력서', title: 'Frontend Engineer Resume', slug: 'resume-frontend', bodyHtml: resumeFrontend.bodyHtml },
  { kind: 'career', position: 'ai', label: 'AI 경력기술서', title: 'AI Engineer Career Description', slug: 'career-ai', bodyHtml: careerAi.bodyHtml },
  { kind: 'career', position: 'frontend', label: 'Frontend 경력기술서', title: 'Frontend Engineer Career Description', slug: 'career-frontend', bodyHtml: careerFrontend.bodyHtml },
  { kind: 'portfolio', label: 'Portfolio', title: 'Product Engineering Portfolio', slug: 'portfolio', bodyHtml: portfolio.bodyHtml },
];
```

The portfolio body can be composed from imported case-study documents with a small helper that joins their rendered HTML in a stable order.

- [ ] **Step 3: Implement hash parsing and serialization**

Implement pure functions with this behavior:

```ts
export const DEFAULT_VIEW = { kind: 'portfolio' as const };

export function parseViewHash(hash: string): { kind: DocumentKind; position?: Position } {
  const value = hash.replace(/^#/, '');
  if (value === 'resume') return { kind: 'resume', position: 'ai' };
  if (value === 'career') return { kind: 'career', position: 'ai' };
  if (value === 'resume/ai' || value === 'resume/frontend') {
    const [, position] = value.split('/');
    return { kind: 'resume', position: position as Position };
  }
  if (value === 'career/ai' || value === 'career/frontend') {
    const [, position] = value.split('/');
    return { kind: 'career', position: position as Position };
  }
  return DEFAULT_VIEW;
}

export function viewHash(view: { kind: DocumentKind; position?: Position }): string {
  return view.kind === 'portfolio' ? '#portfolio' : `#${view.kind}/${view.position}`;
}
```

Resolve an invalid resume/career state to `{ kind: 'resume', position: 'ai' }` only when the requested kind is valid but position is missing; otherwise use the portfolio default.

- [ ] **Step 4: Run typecheck before integrating the UI**

Run:

```bash
cd portfolio
yarn typecheck
```

Expected: PASS. The app may still reference old imports at this checkpoint; if so, keep the registry typecheckable and finish the integration in Task 3 before treating the build as the final gate.

- [ ] **Step 5: Commit the registry**

```bash
git add portfolio/src/types.ts portfolio/src/content/documents.ts
git commit -m "add typed document view registry" -m "Constraint: Keep content selection deterministic and hash-addressable without a new dependency.\nRejected: Runtime directory scanning in the browser | Vite Markdown imports are already the project convention.\nConfidence: high\nScope-risk: narrow\nDirective: Add new documents through the typed registry so print and navigation share one source of truth.\nTested: yarn typecheck.\nNot-tested: Browser switching is covered in Task 4."
```

---

### Task 3: Implement the document shell and responsive visual system

**Files:**
- Create: `portfolio/src/components/DocumentSwitcher.tsx`, `DocumentSwitcher.module.scss`, `DocumentView.tsx`, `DocumentView.module.scss`, `PrintButton.tsx`, `PrintButton.module.scss`.
- Modify: `portfolio/src/App.tsx`, `App.module.scss`, `Hero.tsx`, `Hero.module.scss`, `styles/tokens.scss`, `styles/global.scss`.
- Delete: obsolete timeline/navigation components listed in the file map after the new shell compiles.

- [ ] **Step 1: Implement accessible document and position controls**

`DocumentSwitcher` receives the active view and an `onChange` callback. Render three document buttons and two position buttons. Disable or hide the position control for Portfolio, use `aria-pressed` on every button, and keep each button keyboard-focusable.

```tsx
<button
  type="button"
  className={active ? styles.active : undefined}
  aria-pressed={active}
  onClick={() => onChange({ kind: 'resume', position: 'ai' })}
>
  AI 이력서
</button>
```

- [ ] **Step 2: Implement the document view**

`DocumentView` renders the selected document’s title, a small position label, and `dangerouslySetInnerHTML` only for HTML produced by the existing Markdown plugin. Give the article a stable `id="document-content"` and keep the document body as the only print target.

- [ ] **Step 3: Implement the print button**

`PrintButton` calls `window.print()` and has an explicit label such as `Export to PDF`. Do not attempt to download or upload a file; the browser’s print dialog supplies the PDF destination.

- [ ] **Step 4: Replace `App.tsx` with hash-driven state**

Use `useState` initialized from `parseViewHash(window.location.hash)`, listen for `hashchange`, and update the hash from the switcher. Resolve the selected `DocumentView` from the registry. Render:

```tsx
<NavBar>
  <span>JY / CAREER SYSTEM</span>
  <PrintButton />
</NavBar>
<div className={styles.page}>
  <Hero meta={profile.meta} />
  <DocumentSwitcher view={view} onChange={selectView} />
  <DocumentView document={document} />
</div>
```

Do not import `loadTimeline`, `loadExperiences`, or the old `ai`, `summary`, and `links` documents.

- [ ] **Step 5: Apply the visual direction**

Use a warm paper background, dark ink text, one rust accent, and a compact monospace label style. Keep the layout editorial but functional: a two-column desktop grid with a fixed left rail for identity/navigation and a single readable document column; collapse to one column on mobile. Avoid gradients, excessive cards, and decorative UI that competes with the documents.

- [ ] **Step 6: Add responsive and accessibility rules**

Ensure focus-visible outlines, 44px minimum tap targets, readable Korean line length, `prefers-reduced-motion`, and no horizontal overflow. Use semantic `header`, `nav`, `main`, `article`, and `footer` elements.

- [ ] **Step 7: Add print CSS**

In `global.scss`:

```scss
@media print {
  @page { size: A4; margin: 14mm 15mm; }
  body { background: #fff; color: #111; font-size: 10.5pt; }
  .screen-only { display: none !important; }
  #document-content { display: block !important; max-width: none; }
  a { color: inherit; text-decoration: none; }
  h2, h3 { break-after: avoid; }
  article, section { break-inside: avoid; }
}
```

- [ ] **Step 8: Run build and fix compile errors**

Run:

```bash
cd portfolio
yarn build
```

Expected: TypeScript and Vite both complete successfully.

- [ ] **Step 9: Commit the shell**

```bash
git add portfolio/src portfolio/index.html
git commit -m "build position-aware career document shell" -m "Constraint: Keep the existing Vite/React/Sass stack and avoid a PDF dependency.\nRejected: Separate pages for every document | a single switchable shell keeps shared evidence consistent and makes print behavior predictable.\nConfidence: high\nScope-risk: moderate\nDirective: Keep screen-only controls outside the print target.\nTested: yarn build.\nNot-tested: Manual hash and print checks are covered in Task 4."
```

---

### Task 4: Verify document switching, content boundaries, and PDF output

**Files:**
- Modify: `portfolio/src/content/documents.ts`, `portfolio/src/App.tsx`, or Sass files only when a verification step identifies a concrete defect.

- [ ] **Step 1: Start the local app**

Run:

```bash
cd portfolio
yarn dev --host 127.0.0.1
```

Open the printed local URL in a browser.

- [ ] **Step 2: Verify each URL state**

Open each URL and confirm the visible title and document body change without a full page navigation:

```text
#resume/ai
#resume/frontend
#career/ai
#career/frontend
#portfolio
```

Confirm that the AI evaluation capability appears once as a unified Golden Dataset/search/RAG/Text2SQL story, and that npm supply-chain guard appears under engineering security tooling rather than product security.

- [ ] **Step 3: Verify invalid hashes**

Open `#resume`, `#career/unknown`, and `#not-a-document`. Expected behavior: `#resume` resolves to the AI resume, while unknown states resolve to `#portfolio` without a blank page or exception.

- [ ] **Step 4: Verify responsive behavior**

At a narrow viewport, confirm the switcher wraps or scrolls without horizontal page overflow, all buttons remain keyboard reachable, and document text remains readable. At a wide viewport, confirm the left identity rail and document column align as designed.

- [ ] **Step 5: Verify PDF output**

With each document selected, activate `Export to PDF` and inspect the print preview. Expected:

- only the selected document appears;
- switchers, print button, and screen-only navigation are hidden;
- links and headings remain readable;
- the document fits A4 margins without clipped text;
- the portfolio case studies preserve section headings and page breaks.

- [ ] **Step 6: Run final static checks**

Run:

```bash
cd portfolio
yarn typecheck
yarn build
```

Expected: both commands exit with status 0.

- [ ] **Step 7: Run final repository scans**

Run:

```bash
rg -n '이해창|Hae-chang|gail5135|React, Electron 기반' portfolio || true
rg -n 'Golden Dataset|검색|RAG|Text2SQL' portfolio/content/resume/ai.md portfolio/content/career/ai.md
rg -n 'npm-supply-chain-guard|engineering-security|개발 생산성|보안 거버넌스' portfolio/content
```

Expected: the stale identity scan returns no matches; the AI evaluation terms occur in the unified evaluation sections; the supply-chain terms occur in engineering-security content and only the intended role summaries.

- [ ] **Step 8: Commit verified delivery**

```bash
git add portfolio docs/superpowers/plans/2026-09-27-career-portfolio-documents.md
git commit -m "verify career document export flow" -m "Constraint: Delivery must remain local and print-based.\nRejected: Adding a server-side PDF pipeline | browser print satisfies the requested export without new infrastructure.\nConfidence: high\nScope-risk: narrow\nDirective: Re-run the stale-identity and security-category scans when content changes.\nTested: yarn typecheck, yarn build, URL switching, responsive checks, print preview.\nNot-tested: External browser PDF rendering differences may remain."
```

---

## Self-review

- Spec coverage: position-aware resumes and career descriptions are covered by Tasks 1–3; shared portfolio and the four-layer positioning are covered by Task 1; product security versus engineering security is covered by Tasks 1 and 4; URL state and PDF export are covered by Tasks 2–4; build verification is covered by Tasks 3–4.
- Placeholder scan: no `TBD`, `TODO`, or unspecified “appropriate” implementation steps are present.
- Type consistency: `Position`, `DocumentKind`, `DocumentView`, `parseViewHash`, and `viewHash` are defined in Task 2 and used consistently in Tasks 3–4.
- Scope: the plan stays within the existing portfolio app and supplied career sources. It does not introduce deployment, CMS, new dependencies, or external submission behavior.
