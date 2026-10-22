import { useEffect } from 'react';

import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav, type NavItem } from './components/Nav';
import { Prose } from './components/Prose';
import { Section } from './components/Section';
import activitiesDoc from '/content/activities.md';
import certificationsDoc from '/content/certifications.md';
import educationDoc from '/content/education.md';
import linksDoc from '/content/links.md';
import positioningDoc from '/content/positioning.md';
import profileDoc from '/content/profile.md';
import skillsDoc from '/content/skills.md';
import timelineDoc from '/content/timeline.md';
import { getDocumentView } from './content/documents';
import { legacyHashPath, parsePathname, routePath, type Route } from './content/routes';
import resumeAiDoc from '/content/resume/ai.md';
import resumeFrontendDoc from '/content/resume/frontend.md';
import careerAiDoc from '/content/career/ai.md';
import careerFrontendDoc from '/content/career/frontend.md';
import type { Doc, ProfileMeta } from './types';

import styles from './App.module.scss';

type ContentDoc = Doc<Record<string, unknown>>;
const profile = profileDoc as unknown as Doc<ProfileMeta>;
const positioning = positioningDoc as unknown as ContentDoc;
const activities = activitiesDoc as unknown as ContentDoc;
const certifications = certificationsDoc as unknown as ContentDoc;
const education = educationDoc as unknown as ContentDoc;
const links = linksDoc as unknown as ContentDoc;
const skills = skillsDoc as unknown as ContentDoc;
const timeline = timelineDoc as unknown as ContentDoc;
const resumeAi = resumeAiDoc as unknown as ContentDoc;
const resumeFrontend = resumeFrontendDoc as unknown as ContentDoc;
const careerAi = careerAiDoc as unknown as ContentDoc;
const careerFrontend = careerFrontendDoc as unknown as ContentDoc;
const portfolio = getDocumentView({ kind: 'portfolio' });
const BASE_PATH = import.meta.env.BASE_URL;

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'resumes', label: 'Resumes', children: [
    { id: 'resume-ai', label: 'AI Engineer' },
    { id: 'resume-frontend', label: 'Frontend Engineer' },
  ] },
  { id: 'timeline', label: 'Work Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'activities', label: 'Activities' },
  { id: 'links', label: 'Links' },
  { id: 'careers', label: 'Career Description', children: [
    { id: 'career-ai', label: 'AI Engineer' },
    { id: 'career-frontend', label: 'Frontend Engineer' },
  ] },
  { id: 'portfolio', label: 'Portfolio' },
];

function DocumentArticle({ id, title, bodyHtml, showHeader = true }: { id: string; title: string; bodyHtml: string; showHeader?: boolean }) {
  return (
    <article id={id} className={styles.document} tabIndex={-1}>
      {showHeader && <div className={styles.documentHead}>
        <h3>{title}</h3>
      </div>}
      <Prose html={bodyHtml} />
    </article>
  );
}

function HomePage() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">본문 바로가기</a>
      <Nav items={NAV_ITEMS} />
      <div id="home" className={styles.page} tabIndex={-1}>
        <Hero meta={profile.meta} />
        <main id="main">
          <div id="summary" className={styles.summary} tabIndex={-1}>
            <h2>Summary</h2>
            <Prose html={positioning.bodyHtml} />
          </div>

          <Section id="resumes" title="Resumes">
            <nav className={styles.sectionLinks} aria-label="이력서 바로가기">
              <a href={routePath({ kind: 'resume', position: 'ai' }, BASE_PATH)}>AI Engineer</a>
              <a href={routePath({ kind: 'resume', position: 'frontend' }, BASE_PATH)}>Frontend Engineer</a>
            </nav>
            <DocumentArticle id="resume-ai" title="AI Engineer Resume" bodyHtml={resumeAi.bodyHtml} />
            <DocumentArticle id="resume-frontend" title="Frontend Engineer Resume" bodyHtml={resumeFrontend.bodyHtml} />
          </Section>

          <Section id="timeline" title="Work Timeline">
            <Prose html={timeline.bodyHtml} />
          </Section>

          <Section id="skills" title="Skills">
            <Prose html={skills.bodyHtml} />
          </Section>

          <Section id="education" title="Education">
            <Prose html={education.bodyHtml} />
          </Section>

          <Section id="certifications" title="Certifications">
            <Prose html={certifications.bodyHtml} />
          </Section>

          <Section id="activities" title="Activities">
            <Prose html={activities.bodyHtml} />
          </Section>

          <Section id="links" title="Links">
            <Prose html={links.bodyHtml} />
          </Section>

          <Section id="careers" title="Career Description">
            <nav className={styles.sectionLinks} aria-label="경력기술서 바로가기">
              <a href={routePath({ kind: 'career', position: 'ai' }, BASE_PATH)}>AI Engineer</a>
              <a href={routePath({ kind: 'career', position: 'frontend' }, BASE_PATH)}>Frontend Engineer</a>
            </nav>
            <DocumentArticle id="career-ai" title="AI Engineer Career Description" bodyHtml={careerAi.bodyHtml} />
            <DocumentArticle id="career-frontend" title="Frontend Engineer Career Description" bodyHtml={careerFrontend.bodyHtml} />
          </Section>

          <Section id="portfolio" title="Portfolio">
            <nav className={styles.sectionLinks} aria-label="포트폴리오 바로가기">
              <a href={routePath({ kind: 'portfolio', position: 'ai' }, BASE_PATH)}>AI Engineer</a>
              <a href={routePath({ kind: 'portfolio', position: 'frontend' }, BASE_PATH)}>Frontend Engineer</a>
            </nav>
            <Prose html={portfolio.bodyHtml} />
          </Section>
        </main>
        <Footer name={profile.meta.name} />
      </div>
    </>
  );
}

function DocumentIndex({ kind }: { kind: 'resume-index' | 'career-index' | 'portfolio-index' }) {
  const isResume = kind === 'resume-index';
  const isCareer = kind === 'career-index';
  const title = isResume ? 'Resume' : isCareer ? 'Career Description' : 'Portfolio';
  const description = isResume
    ? '지원 포지션에 맞춰 선택할 수 있는 이력서입니다.'
    : isCareer
      ? '지원 포지션에 맞춰 선택할 수 있는 경력기술서입니다.'
      : '지원 포지션에 맞춰 강조점을 달리한 포트폴리오입니다.';
  const routes: Route[] = isResume
    ? [{ kind: 'resume', position: 'ai' }, { kind: 'resume', position: 'frontend' }]
    : isCareer
      ? [{ kind: 'career', position: 'ai' }, { kind: 'career', position: 'frontend' }]
      : [{ kind: 'portfolio', position: 'ai' }, { kind: 'portfolio', position: 'frontend' }];

  return (
    <>
      <main id="main">
        <h2>{title}</h2>
        <p>{description}</p>
        <nav className={styles.routeLinks} aria-label={`${title} 포지션 선택`}>
          <a href={routePath(routes[0], BASE_PATH)}>AI Engineer</a>
          <a href={routePath(routes[1], BASE_PATH)}>Frontend Engineer</a>
        </nav>
      </main>
    </>
  );
}

function DetailPage({ route }: { route: Exclude<Route, { kind: 'home' }> }) {
  const document = route.kind === 'resume' || route.kind === 'career'
    ? getDocumentView({ kind: route.kind, position: route.position })
    : route.kind === 'portfolio'
      ? getDocumentView({ kind: 'portfolio', position: route.position })
      : null;

  useEffect(() => {
    if ('position' in route && route.position) {
      window.document.title = `김주연 · ${route.position === 'ai' ? 'AI Application Engineer' : 'Frontend Engineer'}`;
    }
  }, [route]);

  return (
    <div className={`${styles.page} ${styles.standalonePage}`}>
      <a className="skip-link" href="#main">본문 바로가기</a>
      <Hero meta={profile.meta} showContact={false} />
      {route.kind === 'resume-index' || route.kind === 'career-index' || route.kind === 'portfolio-index' ? (
        <DocumentIndex kind={route.kind} />
      ) : document ? (
        <DocumentArticle id="document-content" title={document.title} bodyHtml={document.bodyHtml} showHeader={route.kind !== 'resume'} />
      ) : null}
      <Footer name={profile.meta.name} />
    </div>
  );
}

function resolveInitialRoute(): Route {
  const legacyPath = legacyHashPath(window.location.hash, BASE_PATH);
  if (legacyPath) {
    window.history.replaceState({}, '', legacyPath);
    return parsePathname(legacyPath, BASE_PATH);
  }
  return parsePathname(window.location.pathname, BASE_PATH);
}

export default function App() {
  const route = resolveInitialRoute();
  return route.kind === 'home' ? <HomePage /> : <DetailPage route={route} />;
}
