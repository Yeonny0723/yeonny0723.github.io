import positioningDoc from '/content/positioning.md';
import resumeAiDoc from '/content/resume/ai.md';
import resumeFrontendDoc from '/content/resume/frontend.md';
import careerAiDoc from '/content/career/ai.md';
import careerFrontendDoc from '/content/career/frontend.md';
import productPhilosophyDoc from '/content/portfolio/product-philosophy.md';
import securityDomainDoc from '/content/portfolio/security-domain.md';
import aiPlatformDoc from '/content/portfolio/ai-platform.md';
import frontendPlatformDoc from '/content/portfolio/frontend-platform.md';
import engineeringSecurityDoc from '/content/portfolio/engineering-security.md';
import pfplayDoc from '/content/portfolio/pfplay.md';

import type { CareerDocument, Doc, DocumentKind, Position, ViewState } from '../types';

type RawDocument = Doc<Record<string, unknown>>;

const positioning = positioningDoc as unknown as RawDocument;
const resumeAi = resumeAiDoc as unknown as RawDocument;
const resumeFrontend = resumeFrontendDoc as unknown as RawDocument;
const careerAi = careerAiDoc as unknown as RawDocument;
const careerFrontend = careerFrontendDoc as unknown as RawDocument;

function html(...docs: RawDocument[]) {
  return docs.map((doc) => doc.bodyHtml).join('\n');
}

const portfolioBodyHtml = html(
  positioning,
  productPhilosophyDoc as unknown as RawDocument,
  securityDomainDoc as unknown as RawDocument,
  aiPlatformDoc as unknown as RawDocument,
  frontendPlatformDoc as unknown as RawDocument,
  engineeringSecurityDoc as unknown as RawDocument,
  pfplayDoc as unknown as RawDocument,
);

export const DEFAULT_VIEW: ViewState = { kind: 'portfolio' };

export const DOCUMENTS: CareerDocument[] = [
  { kind: 'resume', position: 'ai', label: 'AI 이력서', title: 'AI Engineer Resume', slug: 'resume-ai', bodyHtml: resumeAi.bodyHtml },
  { kind: 'resume', position: 'frontend', label: 'Frontend 이력서', title: 'Frontend Engineer Resume', slug: 'resume-frontend', bodyHtml: resumeFrontend.bodyHtml },
  { kind: 'career', position: 'ai', label: 'AI 경력기술서', title: 'AI Engineer Career Description', slug: 'career-ai', bodyHtml: careerAi.bodyHtml },
  { kind: 'career', position: 'frontend', label: 'Frontend 경력기술서', title: 'Frontend Engineer Career Description', slug: 'career-frontend', bodyHtml: careerFrontend.bodyHtml },
  { kind: 'portfolio', label: 'Portfolio', title: 'Product Engineering Portfolio', slug: 'portfolio', bodyHtml: portfolioBodyHtml },
];

export const DOCUMENT_TABS = [
  { kind: 'resume' as const, label: 'Resume' },
  { kind: 'career' as const, label: 'Career Description' },
  { kind: 'portfolio' as const, label: 'Portfolio' },
];

export const POSITION_TABS = [
  { position: 'ai' as const, label: 'AI Engineer' },
  { position: 'frontend' as const, label: 'Frontend Engineer' },
];

export function parseViewHash(hash: string): ViewState {
  const value = decodeURIComponent(hash.replace(/^#/, ''));
  if (value === 'resume' || value === 'career') {
    return { kind: value as 'resume' | 'career', position: 'ai' };
  }
  const match = value.match(/^(resume|career)\/(ai|frontend)$/);
  if (match) {
    return { kind: match[1] as 'resume' | 'career', position: match[2] as Position };
  }
  return DEFAULT_VIEW;
}

export function viewHash(view: ViewState) {
  return view.kind === 'portfolio' ? '#portfolio' : `#${view.kind}/${view.position ?? 'ai'}`;
}

export function getDocumentView(view: ViewState) {
  const resolved = view.kind === 'portfolio'
    ? view
    : { kind: view.kind as DocumentKind, position: view.position ?? 'ai' as Position };
  return DOCUMENTS.find((document) => (
    document.kind === resolved.kind && document.position === resolved.position
  )) ?? DOCUMENTS[DOCUMENTS.length - 1];
}
