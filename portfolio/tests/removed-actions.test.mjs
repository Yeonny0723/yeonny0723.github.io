import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('does not render removed document actions', async () => {
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
  const hero = await readFile(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(app, /Export to PDF|Portfolio home|PrintButton/);
  assert.doesNotMatch(hero, /Export to PDF|PrintButton|showPrintButton/);
});
