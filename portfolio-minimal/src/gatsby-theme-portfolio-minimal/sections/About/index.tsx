import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/About/data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useState, useEffect, useRef } from 'react';
import './about.css';

export function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );
  
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [threshold]);
  
    return [ref, isVisible] as const;
  }

export function AboutSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAboutMarkdown.sections[0];
    const [croissantRef, inView] = useInView();

    return (
        <Animation type="fadeUp">
            
          <Section anchor={props.sectionId} heading={props.heading}>
            <div className="AboutContainer">             
              <div className="About">
                <div className="Description" dangerouslySetInnerHTML={{ __html: data.html }} />
                {data.frontmatter.imageSrc && (
                    <div>
                        <Animation type="fadeLeft" delay={200}>
                            <div className="ImageWrapper">
                            <GatsbyImage
                                image={data.frontmatter.imageSrc.childImageSharp.gatsbyImageData}
                                className="MeImage"
                                alt={data.frontmatter.imageAlt || `About Image`}
                            />
                            </div>
                            
                        </Animation>
                        <div 
                            ref={croissantRef}
                            className={`CroissantWrapper ${inView ? 'fade-croissant' : ''}`}
                        >
                            <div className="CroissantImage" />
                        </div>

                    </div>
                )}
              </div>
            </div>
          </Section>
        </Animation>
      );
      
}
