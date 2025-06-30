import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Interests/data';
import './interests.css';
import { useRef, useEffect, useState } from 'react';


function useInView(threshold = 0.1) {
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


  function useMediaQuery(query: string) {
    const [matches, setMatches] = useState<boolean>(() =>
      typeof window !== "undefined" ? window.matchMedia(query).matches : false
    );
  
    useEffect(() => {
      const mql = window.matchMedia(query);
      const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }, [query]);
  
    return matches;
}

export function InterestsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allInterestsJson.sections[0];
    // const shouldShowButton = data.button.visible !== false;
    // const initiallyShownInterests = data.button.initiallyShownInterests ?? 5;
    // const [shownInterests, setShownInterests] = React.useState<number>(
    //     shouldShowButton ? initiallyShownInterests : data.interests.length,
    // );
    const [shownInterests, setShownInterests] = React.useState<number>(data.interests.length);
    const [leafRef, inView] = useInView();
    const showWideLeaves = useMediaQuery("(min-width: 1400px)");
    const leafDelayBase = showWideLeaves ? 1000 : 0;

    function loadMoreHandler() {
        setShownInterests(data.interests.length);
    }

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                {/* <div className="Spiral SpiralLeft" />
                <div className="Spiral SpiralRight" /> */}

                <div className="LeavesWrapper" ref={leafRef}>
                    <div className={`Leaf LeafLeft1 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafLeft2 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafLeft3 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafLeft4 ${inView ? 'fade-down' : ''}`} />

                    <div className={`Leaf LeafRight1 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafRight2 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafRight3 ${inView ? 'fade-down' : ''}`} />
                    <div className={`Leaf LeafRight4 ${inView ? 'fade-down' : ''}`} />
                </div>

                <div className="Interests">
                    {data.interests.slice(0, shownInterests).map((interest, key) => {
                        return (
                            <div key={key} className="Interest">
                                <Animation type="scaleIn" delay={leafDelayBase + key * 100}>
                                    <>
                                        {interest.image.src && (
                                            <GatsbyImage
                                                image={interest.image.src.childImageSharp.gatsbyImageData}
                                                className="Icon"
                                                alt={interest.image.alt || `Interest ${interest.label}`}
                                            />
                                        )}
                                        {interest.label}
                                    </>
                                </Animation>
                            </div>
                        );
                    })}

                    {/* {shouldShowButton && shownInterests < data.interests.length && (
                        <Animation type="scaleIn" delay={(shownInterests + 1) * 100}>
                            <Button
                                type={ButtonType.BUTTON}
                                onClickHandler={loadMoreHandler}
                                label={data.button.label}
                            />
                        </Animation>
                    )} */}
                </div>
            </Section>
        </Animation>
    );
}
