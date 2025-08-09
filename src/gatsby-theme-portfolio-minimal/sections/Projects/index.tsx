import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { Project } from 'gatsby-theme-portfolio-minimal/src/components/Project';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Projects/data';
import './projects.css';

export function ProjectsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allProjectsJson.sections[0];

    return (
        <Animation type="fadeIn">
            <div className='SectionWrapper'>
                
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className="ProjectsContainer">
                <p>Click on a project image or link icons to learn more!</p>
                    <Slider additionalClasses={["Projects"]}>
                        {data.projects.map((project, key) => {
                            return project.visible ? <Project key={key} index={key} data={project} /> : null;
                        })}
                    </Slider>
                    {/* {data.button !== undefined && data.button.visible !== false && (
                        <Animation className="MoreProjects" type="fadeIn">
                            <Button
                                type={ButtonType.LINK}
                                externalLink={true}
                                url={data.button.url}
                                label={data.button.label}
                            />
                        </Animation>
                    )} */}

                    <div className="RedPaintWrapper">
                        <div className="RedPaintImage" />
                    </div>

                    <div className="YellowPaintWrapper">
                        <div className="YellowPaintImage" />
                    </div>

                    <div className="GreenPaintWrapper">
                        <div className="GreenPaintImage" />
                    </div>

                    <div className="BluePaintWrapper">
                        <div className="BluePaintImage" />
                    </div>

                </div>
            </Section>
            </div>
        </Animation>
    );
}
