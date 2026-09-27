import { useEffect } from 'react';

import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav, type NavItem } from './components/Nav';
import { PrintButton } from './components/PrintButton';
import { Prose } from './components/Prose';
import { Section } from './components/Section';
import profileDoc from '/content/profile.md';
import positioningDoc from '/content/positioning.md';
import activitiesDoc from '/content/activities.md';
import certificationsDoc from '/content/certifications.md';
import educationDoc from '/content/education.md';
import linksDoc from '/content/links.md';
import skillsDoc from '/content/skills.md';
import timelineDoc from '/content/timeline.md';
import resumeAiDoc from '/content/resume/ai.md';
import resumeFrontendDoc from '/content/resume/frontend.md';
import careerAiDoc from '/content/career/ai.md';
import careerFrontendDoc from '/content/career/frontend.md';
import { getDocumentView } from './content/documents';
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

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'resumes', label: 'Resumes', children: [
    { id: 'resume-ai', label: 'AI Engineer' },
    { id: 'resume-frontend', label: 'Frontend Engineer' },
  ] },
  { id: 'careers', label: 'Career Description', children: [
    { id: 'career-ai', label: 'AI Engineer' },
    { id: 'career-frontend', label: 'Frontend Engineer' },
  ] },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'timeline', label: 'Work Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'activities', label: 'Activities' },
  { id: 'links', label: 'Links' },
];

function DocumentArticle({ id, title, bodyHtml }: { id: string; title: string; bodyHtml: string }) {
  return (
    <article id={id} className={styles.document} tabIndex={-1}>
      <div className={styles.documentHead}>
        <h3>{title}</h3>
        <PrintButton />
      </div>
      <Prose html={bodyHtml} />
    </article>
  );
}

export default function App() {
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
              <a href="#resume-ai">AI Engineer</a>
              <a href="#resume-frontend">Frontend Engineer</a>
            </nav>
            <DocumentArticle id="resume-ai" title="AI Engineer Resume" bodyHtml={resumeAi.bodyHtml} />
            <DocumentArticle id="resume-frontend" title="Frontend Engineer Resume" bodyHtml={resumeFrontend.bodyHtml} />
          </Section>

          <Section id="careers" title="Career Description">
            <nav className={styles.sectionLinks} aria-label="경력기술서 바로가기">
              <a href="#career-ai">AI Engineer</a>
              <a href="#career-frontend">Frontend Engineer</a>
            </nav>
            <DocumentArticle id="career-ai" title="AI Engineer Career Description" bodyHtml={careerAi.bodyHtml} />
            <DocumentArticle id="career-frontend" title="Frontend Engineer Career Description" bodyHtml={careerFrontend.bodyHtml} />
          </Section>

          <Section id="portfolio" title="Portfolio">
            <Prose html={portfolio.bodyHtml} />
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
        </main>
        <Footer name={profile.meta.name} />
      </div>
    </>
  );
}
