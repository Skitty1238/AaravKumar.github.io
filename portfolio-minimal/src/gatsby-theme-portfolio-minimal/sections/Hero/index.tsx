import React, { useCallback } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { useCalendlyWidget } from 'gatsby-theme-portfolio-minimal/src/hooks/useCalendlyWidget';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Hero/data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

import './hero.css';

export function HeroSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    const CalendlyWidget = useCalendlyWidget(data.calendly);

    const particlesInit = useCallback(async (engine) => {
        console.log("Loading slim engine...");
        await loadSlim(engine);
      }, []);
      
    return (
        <div className="hero-wrapper">

            <div style={{ position: 'relative', zIndex: 1 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                    number: { value: 15 },
                    color: { value: ['#341A04', '#733907', '#385400', '#224003'] },
                    opacity: { value: 1 },
                    size: { value: 38, random: false },
                    move: {
                        enable: true,
                        direction: 'bottom',
                        speed: 2, 
                        straight: false, 
                        gravity: {
                          enable: true,
                          acceleration: 0 
                        },
                        outModes: {
                          default: 'out'
                        }
                    },
                    shape: { 
                        type: 'image',
                        image: [
                            {
                                src: '/images/leafRed.PNG',
                                width: 100,
                                height: 100
                            },
                            {
                                src: '/images/leafGreen.PNG',
                                width: 100,
                                height: 100
                            },
                            {
                                src: '/images/leafYellow.PNG',
                                width: 100,
                                height: 100
                            },
                            {
                                src: '/images/leafOrange.PNG',
                                width: 100,
                                height: 100
                            },
                        ]
                    }
                    },
                    interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' }
                    },
                    modes: {
                        repulse: { distance: 30, duration: 10, speed: 0.05 }
                    }
                    }
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
                />
                <Animation type="fadeUp" delay={400}>
                    {CalendlyWidget}
                    <Section anchor={props.sectionId} additionalClasses={["HeroContainer"]}>
                        {data.heroPhoto?.src && (
                            <div className="heroImageCont">
                                <GatsbyImage
                                    className="heroImage"
                                    image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
                                    alt={data.heroPhoto.alt || `Profile Image`}
                                    loading="eager"
                                />
                            </div>
                        )}
                        <div className="Hero">
                        <div className="HeroContentBox">
                            <div className="Intro">
                                {data.intro && <span className="ImagePrefix">{data.intro}</span>}
                                {data.image?.src && (
                                    <Animation className="Image" type="waving-hand" duration={2500} iterationCount={3}>
                                        <GatsbyImage
                                            image={data.image.src.childImageSharp.gatsbyImageData}
                                            alt={data.image.alt || `Intro Image`}
                                            loading="eager"
                                        />
                                    </Animation>
                                )}
                            </div>
                            <h1 className="Title">{data.title}</h1>
                            <h2 className="Subtitle">
                                {data.subtitle.prefix}
                                <u>{data.subtitle.highlight}</u>
                                {data.subtitle.suffix}
                            </h2>
                            <p>{data.description}</p>
                            <Animation type="fadeLeft" delay={600}>
                                {data.socialProfiles && (
                                    <SocialProfiles
                                        from={data.socialProfiles.from}
                                        showIcon={data.socialProfiles.showIcons}
                                    />
                                )}
                            </Animation>
                            </div>
                        </div>
                    </Section>
                </Animation>
            </div>
        </div>
    );
}
