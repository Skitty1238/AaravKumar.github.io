import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Aarav Kumar's Website" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        {/* <ContactSection sectionId="contact" heading="Contact Me" /> */}
      </Page>
    </>
  );
}
