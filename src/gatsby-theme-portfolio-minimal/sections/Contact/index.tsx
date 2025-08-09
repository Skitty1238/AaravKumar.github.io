import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Contact/data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';;
import './contact.css';

export function ContactSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allContactJson.sections[0];

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading} additionalClasses={["Contact"]}>
                {data.description && <p className="Description">{data.description}</p>}
                <div className="Profile">
                    {data.image.src && (
                        <GatsbyImage
                            className="Avatar"
                            image={data.image.src.childImageSharp.gatsbyImageData}
                            alt={data.image.alt || `Profile ${data.name}`}
                        />
                    )}
                    <div className="ContactDetails">
                        <div className="Name">{data.name}</div>
                        <u>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </u>
                    </div>
                    
                </div>
                {data.socialProfiles && (
                    <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                )}
            </Section>
        </Animation>
    );
}
