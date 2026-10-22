import test from 'node:test';
import assert from 'node:assert/strict';

import { parsePathname, routePath, legacyHashPath } from '../src/content/routes.ts';

test('parses canonical resume routes under the deployed base path', () => {
  assert.deepEqual(parsePathname('/portfolio/resume/ai-engineer/'), {
    kind: 'resume',
    position: 'ai',
  });
  assert.deepEqual(parsePathname('/portfolio/resume/frontend-engineer/'), {
    kind: 'resume',
    position: 'frontend',
  });
});

test('parses document indexes and portfolio route', () => {
  assert.deepEqual(parsePathname('/portfolio/resume/'), { kind: 'resume-index' });
  assert.deepEqual(parsePathname('/portfolio/career-description/'), { kind: 'career-index' });
  assert.deepEqual(parsePathname('/portfolio/portfolio/'), { kind: 'portfolio-index' });
  assert.deepEqual(parsePathname('/portfolio/portfolio/ai-engineer/'), {
    kind: 'portfolio',
    position: 'ai',
  });
});

test('builds stable canonical URLs for document routes', () => {
  assert.equal(routePath({ kind: 'resume', position: 'ai' }), '/portfolio/resume/ai-engineer/');
  assert.equal(routePath({ kind: 'career', position: 'frontend' }), '/portfolio/career-description/frontend-engineer/');
  assert.equal(routePath({ kind: 'portfolio-index' }), '/portfolio/portfolio/');
  assert.equal(routePath({ kind: 'portfolio', position: 'frontend' }), '/portfolio/portfolio/frontend-engineer/');
});

test('supports the user site root deployment without a project prefix', () => {
  assert.deepEqual(parsePathname('/resume/ai-engineer/', '/'), {
    kind: 'resume',
    position: 'ai',
  });
  assert.equal(routePath({ kind: 'portfolio', position: 'frontend' }, '/'), '/portfolio/frontend-engineer/');
});

test('keeps legacy hash document links usable through canonical paths', () => {
  assert.equal(legacyHashPath('#resume/ai'), '/portfolio/resume/ai-engineer/');
  assert.equal(legacyHashPath('#career/frontend'), '/portfolio/career-description/frontend-engineer/');
  assert.equal(legacyHashPath('#skills'), null);
});
