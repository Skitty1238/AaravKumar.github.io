import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import React from 'react';
import './dash.css'


export default function Dash() {
    return (
        <>
            <Seo title="Dash" />
            <Page useSplashScreenAnimation>
            <div className="dash-wrapper">
                {/* Intro */}
                <section>
                    <h1>Dash</h1>
                    <h3 id="tagline">Tools for Thinking, Writing, and Connecting</h3>
                    <p>
                        Dash is a hypertext media platform for composing, arranging, and connecting rich, interlinked documents. 
                        As a full-time summer intern in 2025 and year-round lead developer, I've worked on building tools in Dash that help people reflect, 
                        write, and connect scattered ideas in one place.
                    </p>
                    <p>
                        Below are three projects I've worked on so far:
                    </p>
                    <ul>
                        <li><strong>Journaling Nodes:</strong> active journaling with custom prompts and inline guidance</li>
                        <li><strong>Task Management:</strong> flexible, multi-context tasks that integrate with other media</li>
                        <li><strong>Writing Assistant:</strong> in-place, agentic suggestions and context-aware assistance</li>
                    </ul>
                </section>

                {/* Project 1 — Journaling */}
                <section id="journaling" className="dash-section">
                    <h2>Project 1 — Journaling & Reflection</h2>

                    <img
                        src="/images/Dash/journal-board.png"
                        alt="Journaling Overview"
                        className="full-width-image"
                    />

                    <p>
                    Journaling has always been a personal and grounding practice for me,
                    offering a way to make sense of scattered thoughts. But over time, 
                    I found myself lacking a journaling space where I could write freely, 
                    and one that also remained connected to the rest of my life: 
                    readings from class, images I captured, assignments I completed, 
                    moments I wanted to revisit. Most journaling apps felt either too 
                    rigid or too disconnected from the broader context of my thinking.
                    </p>

                    <p>
                    When I looked at Dash, I saw the beginnings of a solution. 
                    It already offered the spatial flexibility and cross-media 
                    linking I needed to anchor ideas across different formats. 
                    That's what led me to build a
                    dedicated journaling system within Dash—one that not only integrated 
                    with my broader workspace, but also deepened my reflection and 
                    helped push my thinking further.
                    </p>

                    <h3>Features</h3>

                    <div className="feature-block feature-left">
                    <img src="/images/Dash/journal-create.gif" alt="Daily Journal Node Creation" className="feature-gif" />
                    <p>
                        <strong>Daily Journal Nodes</strong> are customizable rich-text documents designed for daily 
                        use and automatically assigned to the calendar day. 
                        
                        <br />
                        <br />
                        
                        Because journal entries live alongside other 
                        Dash nodes, they can be placed near and linked to related readings, notes, tasks, or reflections, making them 
                        part of a broader spatial workflow. 
                    </p>
                    </div>

                    <div className="feature-block feature-right">
                    <img src="/images/Dash/generate.gif" alt="Prompt Generation" className="feature-gif" />
                    <p>
                        <strong>Custom Prompt Generation</strong> enables a more active journaling process.
                        <br />
                        <br />
                        Instead of pulling from static templates, Dash uses GPT to generate prompts tailored to 
                        what you've already written, nudging deeper reflection in real time.
                    </p>
                    </div>

                    <div className="feature-block feature-left">
                    <img src="/images/Dash/inline.gif" alt="Inline Prompting" className="feature-gif" />
                    <p>
                        <strong>Inline Prompting</strong> introduces lightweight, contextual questions that appear naturally 
                        as you pause while writing. As you start typing again, the prompt disappears, allowing
                        you to seamlessly continue your flow of writing.

                        <br />
                        <br />
                        
                        These prompts are designed to feel like gentle suggestions rather than 
                        interruptions, and they can be toggled on or off at any time.
                    </p>
                    </div>

                    <div className="feature-block feature-right">
                    <img src="/images/Dash/force.gif" alt="/ask trigger" className="feature-gif" />
                    <p>
                        <strong>Forcing a Prompt with <code>/ask</code></strong> lets you instantly request a new inline prompt 
                        whenever you want. 
                        
                        <br />
                        <br />
                        
                        Simply type <code>/ask</code> and Dash will surface a relevant reflective question—
                        useful when you're feeling stuck or want to shift perspective.
                    </p>
                    </div>

                </section>

                {/* Project 2 — Task Management (placeholder) */}
                <section id="tasks" className="dash-section placeholder">
                    <h2>Project 2 — Task Management</h2>
                    <p>Details coming soon.</p>
                </section>

                {/* Project 3 — Writing Augmentation (placeholder) */}
                <section id="writing" className="dash-section placeholder">
                    <h2>Project 3 — Writing Augmentation</h2>
                    <p>Details coming soon.</p>
                </section>
            </div>
            </Page>
        </>
    );
}