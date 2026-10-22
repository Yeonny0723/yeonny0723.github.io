import type { Position } from '../types';

export type Route =
  | { kind: 'home' }
  | { kind: 'resume-index' }
  | { kind: 'resume'; position: Position }
  | { kind: 'career-index' }
  | { kind: 'career'; position: Position }
  | { kind: 'portfolio-index' }
  | { kind: 'portfolio'; position: Position };

const DEFAULT_BASE_PATH = '/portfolio/';

function normalizeBasePath(basePath: string) {
  const trimmed = basePath.trim();
  if (!trimmed || trimmed === '/') return '';
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

function normalizePath(pathname: string) {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, '');
  return withoutTrailingSlash || '/';
}

function relativePath(pathname: string, basePath: string) {
  const normalizedPath = normalizePath(pathname);
  const normalizedBase = normalizeBasePath(basePath);
  if (!normalizedBase) return normalizedPath;
  if (normalizedPath === normalizedBase) return '/';
  if (normalizedPath.startsWith(`${normalizedBase}/`)) {
    return normalizedPath.slice(normalizedBase.length) || '/';
  }
  return normalizedPath;
}

export function parsePathname(pathname: string, basePath = DEFAULT_BASE_PATH): Route {
  const path = relativePath(pathname, basePath);

  if (path === '/') return { kind: 'home' };
  if (path === '/resume') return { kind: 'resume-index' };
  if (path === '/career-description') return { kind: 'career-index' };
  if (path === '/portfolio') return { kind: 'portfolio-index' };

  const portfolioMatch = path.match(/^\/portfolio\/(ai-engineer|frontend-engineer)$/);
  if (portfolioMatch) {
    return { kind: 'portfolio', position: portfolioMatch[1] === 'ai-engineer' ? 'ai' : 'frontend' };
  }

  const resumeMatch = path.match(/^\/resume\/(ai-engineer|frontend-engineer)$/);
  if (resumeMatch) {
    return { kind: 'resume', position: resumeMatch[1] === 'ai-engineer' ? 'ai' : 'frontend' };
  }

  const careerMatch = path.match(/^\/career-description\/(ai-engineer|frontend-engineer)$/);
  if (careerMatch) {
    return { kind: 'career', position: careerMatch[1] === 'ai-engineer' ? 'ai' : 'frontend' };
  }

  return { kind: 'home' };
}

export function routePath(route: Route, basePath = DEFAULT_BASE_PATH) {
  const base = normalizeBasePath(basePath);
  const suffix = (() => {
    switch (route.kind) {
      case 'home': return '/';
      case 'resume-index': return '/resume/';
      case 'resume': return `/resume/${route.position === 'ai' ? 'ai-engineer' : 'frontend-engineer'}/`;
      case 'career-index': return '/career-description/';
      case 'career': return `/career-description/${route.position === 'ai' ? 'ai-engineer' : 'frontend-engineer'}/`;
      case 'portfolio-index': return '/portfolio/';
      case 'portfolio': return `/portfolio/${route.position === 'ai' ? 'ai-engineer' : 'frontend-engineer'}/`;
    }
  })();
  return `${base}${suffix}` || '/';
}

export function legacyHashPath(hash: string, basePath = DEFAULT_BASE_PATH) {
  const value = decodeURIComponent(hash.replace(/^#/, ''));
  const legacyRoute = (() => {
    switch (value) {
      case 'resume/ai': return { kind: 'resume', position: 'ai' } as const;
      case 'resume/frontend': return { kind: 'resume', position: 'frontend' } as const;
      case 'career/ai': return { kind: 'career', position: 'ai' } as const;
      case 'career/frontend': return { kind: 'career', position: 'frontend' } as const;
      case 'portfolio': return { kind: 'portfolio-index' } as const;
      default: return null;
    }
  })();
  return legacyRoute ? routePath(legacyRoute, basePath) : null;
}
