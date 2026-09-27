/** Build-time Markdown document. */
export interface Doc<TMeta = Record<string, unknown>> {
  slug: string;
  meta: TMeta;
  bodyHtml: string;
}

export interface ProfileMeta {
  name: string;
  englishName?: string;
  title: string;
  email?: string;
  github?: string;
  linkedin?: string;
  blog?: string;
}

export type Position = 'ai' | 'frontend';
export type DocumentKind = 'resume' | 'career' | 'portfolio';

export interface ViewState {
  kind: DocumentKind;
  position?: Position;
}

export interface CareerDocument {
  kind: DocumentKind;
  position?: Position;
  label: string;
  title: string;
  slug: string;
  bodyHtml: string;
}
