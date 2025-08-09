import { Page, Seo, Animation } from 'gatsby-theme-portfolio-minimal';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './vrearthquake.css'

export default function VrEarthquake() {
    return (
        <>
            <Seo title="VR Earthquake Visualization" />
            <Page useSplashScreenAnimation>
            <div className="vreq-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                    <h1>VR Earthquake Visualization</h1>

                    <section>
                    <Carousel
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            interval={3500}
                            showStatus={false}
                            className="eq-carousel"
                        >
                            <div>
                                <img src="/images/VREarthquake/vr.jpg" alt="AR Earthquake Visualization" />
                            </div>
                            <div>
                                <img src="/images/VREarthquake/tabl-viz.jpg" alt="AR Earthquake Visualization Tabletop View" />
                            </div>
                            <div>
                                <img src="/images/VREarthquake/underside.jpg" alt="AR Earthquake Visualization Underside View" />
                            </div>
                            <div>
                                <img src="/images/VREarthquake/2D.png" alt="2D Visualization" />
                            </div>
                        </Carousel>
                    </section>
                    <section>

                        <p>
                            I built this interactive AR app to visualize real earthquake data on a 3D map overlay. Built using using Unity and Mapbox, and
                            designed for the Meta Quest headset, the visualization displays different earthquakes in Indonesia's Sumatra region over a 25-year period (2000-2025). 
                        </p>
                        <p>
                        I designed the app to test how haptics, visualization complexity, and AR presentation affect user comprehension of data, as well as engagement and recall. 
                        In a loosely structured study with 10 participants, I compared multiple versions of the app to evaluate differences between multiple modes, in particular:
                        </p>

                        <ul>
                            <li>
                            <strong>Focused Mode</strong>: shows only scale and magnitude, with no toggling or haptics
                            </li>
                            <li>
                            <strong>Comprehensive Mode</strong>: includes additional variables, toggles, and haptics
                            </li>
                        </ul>
                        
                        <p>I also compared these AR versions to a traditional 2D visualization to better understand the advantages and tradeoffs of immersive interaction.</p>
                        
                    </section>

                    <section>
                        <h2>Main Interactive Features:</h2>
                        <ul>
                            <li><strong>Toggleable Data Layers</strong>: Users can enable/disable variables like magnitude, depth, depth error, and elevation using on-screen controls.</li>
                            <li><strong>Map Interactions</strong>: Users can move and zoom the map in real space, as well as toggle map modes, fault line overlays, and terrain exaggeration though trigger-based controls.</li>
                            <li><strong>Haptic Feedback</strong>: Users can interact with individual earthquakes by placing their controller on an earthquake epicenter. As they do this, the app plays an audio clip of the corresponding earthquake and generates haptic feedback based on the earthquake's magnitude and seismographic waveform. This allows users to actually "feel" the earthquake's vibrations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Datasets</h2>
                        <ul>
                            <li>
                                USGS Earthquake Catalog
                            </li>
                            <li>
                                SAGE Wilber 3 tool (seismographic waveforms + audio clips)
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Haptics Process</h2>
                        <p>
                            To configure the haptics, I extracted seismographic waveforms and audio clips for each earthquake using the Wilber3 tool. 
                            With a custom Python script, I altered the amplitude of each audio clip to match the extracted waveform, and converted the ouput audio to a .haptic file to use with Meta Haptic Studio. 
                        </p>
                        <img
                            className="vr-image"
                            src="/images/VREarthquake/haptics.png"
                            alt="Seismographic Waveform to Haptics Process"
                        />
                    </section>

                    <section>
                        <h2>Results</h2>
                        <ul>
                            <li>
                                <strong>AR vs 2D Visualization:</strong> Users strongly preferred AR over 2D, citing higher immersion, better comprehension, 
                                and improved data recall. The 2D version was described as less engaging and harder to navigate cognitively.
                            </li>
                            <li>
                                <strong>User Control & Comprehension:</strong> Participants favored AR versions with customizable controls. Most reported that 
                                toggling visual features improved understanding, though too many options caused mild overwhelm for some.
                            </li>
                            <li>
                                <strong>Effectiveness of Haptics:</strong> Haptic feedback significantly enhanced engagement. Users found it memorable and used 
                                it to quickly compare quake magnitudes, though some needed visual cues to fully distinguish intensity levels.
                            </li>
                            <li>
                                <strong>Interface Observations:</strong> Button-mapped features were intuitive, while trigger-based map movement was often confusing. 
                                Error bars were helpful but visually dense for some users.
                            </li>
                        </ul>

                        <div className="chart-grid">
                            <img className="vr-chart" src="/images/VREarthquake/chart.jpg" alt="Chart 0" />
                            <img className="vr-chart" src="/images/VREarthquake/chart-1.jpg" alt="Chart 1" />
                        </div>

                        
                        <div className="chart-grid row-2">
                            <p>
                                5 = Strongly Agree, 1 = Strongly Disagree
                            </p>
                        
                            <img className="vr-chart" src="/images/VREarthquake/chart-2.jpg" alt="Chart 2" />
                            <img className="vr-chart" src="/images/VREarthquake/chart-3.jpg" alt="Chart 3" />
                        </div> 
                    
                        <div className="chart-grid row-3">
                            <img className="vr-chart" src="/images/VREarthquake/chart-5.png" alt="Chart 5" />
                            <p>
                                Part 1 = Focused (no haptics or toggles). Part 2 = Comprehensive (haptics + toggle features).
                            </p>
                        </div>
                    </section>
                </div>
            </Page>
        </>
    );
}