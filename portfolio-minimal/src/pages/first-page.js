import { AboutSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';
import React from 'react';

export default function FirstPage() {
    return (
        <>
            <Seo title="FirstPage" />
            <Page useSplashScreenAnimation>
                <AboutSection sectionId="about" heading="About Portfolio Minimal" />
            </Page>
        </>
    );
}