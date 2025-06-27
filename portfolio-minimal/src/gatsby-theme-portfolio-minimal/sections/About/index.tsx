import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/About/data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';

import './about.css';

export function AboutSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAboutMarkdown.sections[0];


    return (
        <Animation type="fadeUp">
            
          <Section anchor={props.sectionId} heading={props.heading}>
            <div className="AboutContainer">             
              <div className="About">
                <div className="Description" dangerouslySetInnerHTML={{ __html: data.html }} />
                {data.frontmatter.imageSrc && (
                  <Animation type="fadeLeft" delay={200}>
                    <div className="ImageWrapper">
                      <GatsbyImage
                        image={data.frontmatter.imageSrc.childImageSharp.gatsbyImageData}
                        className="MeImage"
                        alt={data.frontmatter.imageAlt || `About Image`}
                      />
                      <div className="CroissantImage" />
                    </div>
                  </Animation>
                )}
              </div>
            </div>
          </Section>
        </Animation>
      );
      
}
