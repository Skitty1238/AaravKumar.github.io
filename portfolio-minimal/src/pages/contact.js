import { ContactSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';
import React from 'react';

export default function Contact() {
    return (
        <>
            <Seo title="ContactPage" />
            <Page useSplashScreenAnimation>
                <ContactSection sectionId="contact" heading="Contact Me" />
            </Page>
        </>
    );
}