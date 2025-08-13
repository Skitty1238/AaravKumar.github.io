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
                </section>

                {/* Project 1 */}
                <section id="journaling" className="dash-section">
                    <h2>Journaling & Reflection</h2>

                    <p>
                    Journaling has always been a grounding practice for me,
                    offering a way to make sense of scattered thoughts. However, 
                    existing journaling apps felt too rigid, with pre-set prompts 
                    and lacking the broader context of my thinking: from pictures I took that
                    I wanted to journal about, to readings I completed that I wanted to reflect on. Thus, I built a dedicated journaling system 
                    within Dash, one that not only integrated with my broader workspace, but also
                    helped push my thinking.
                    </p>

                    <h3>Features</h3>

                    <div className="scroll-container horizontal-scroll-journaling">

                    <div className="feature-card">
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

                    <div className="feature-card">
                    <img src="/images/Dash/generate.gif" alt="Prompt Generation" className="feature-gif" />
                    <p>
                        <strong>Custom Prompt Generation</strong> enables a more active journaling process.
                        <br />
                        <br />
                        Instead of pulling from static templates, Dash uses GPT to generate prompts tailored to 
                        what you've already written, nudging deeper reflection in real time.
                    </p>
                    </div>

                    <div className="feature-card">
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

                    <div className="feature-card">
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
                    </div>

                </section>

                <hr className="section-divider" />


                {/* Project 2 */}
                <section id="writing" className="dash-section placeholder horizontal-scroll">
                <h2>Writing Augmentation</h2>

                <p>
                    Building on the success of predictive prompting in my journaling system, I began exploring how similar techniques could enhance the writing process itself.
                    I developed a suite of writing assistance features in Dash that provide real-time, context-aware suggestions—helping users express ideas more clearly and refine their writing as they go.
                </p>

                <h3>Features</h3>

                <div className="scroll-container">
                <div className="feature-card">
                    <img src="/images/Dash/text/text_settings.gif" alt="Suggestions Sidebar" className="feature-gif" />
                    <p>
                    <strong>Suggestions Sidebar</strong>
                    <br /><br />
                    Each text node now includes an integrated sidebar where users can define their writing goals—such as tone, style, or intended impact.
                    The system then generates targeted suggestions aligned with these goals, making writing assistance more personalized and relevant.
                    </p>
                </div>

                <div className="feature-card">
                    <img src="/images/Dash//text/text_master.gif" alt="Targeted Suggestions Highlighting" className="feature-gif" />
                    <p>
                    <strong>Targeted Suggestions</strong>
                    <br /><br />
                    Suggestions are specific, actionable, and visually anchored. Hovering over a suggestion highlights the corresponding portion of text,
                    helping users clearly see what the suggestion refers to and how to apply it.
                    </p>
                </div>

                <div className="feature-card">
                    <img src="/images/Dash/text/text_inline.gif" alt="Inline Suggestions" className="feature-gif" />
                    <p>
                    <strong>Inline Suggestions</strong>
                    <br /><br />
                    Users receive brief, non-intrusive inline prompts when they pause during writing—offering guidance without breaking their flow.
                    These can also be triggered manually using the <code>//suggest</code> command.
                    </p>
                </div>

                <div className="feature-card">
                    <img src="/images/Dash/text/text_bell.gif" alt="Active Suggestions" className="feature-gif" />
                    <p>
                        <strong>Active Suggestions</strong>
                        <br /><br />
                        In addition to manual prompts and inline nudges, users can enable an active writing assistant that continuously analyzes the text in real time.
                        <br /><br />
                        This mode acts like a thoughtful colleague looking over your shoulder, offering critiques as you type.
                        Each suggestion is grounded in a specific passage or sentence, focusing on elements like clarity, tone, structure, and consistency.
                    </p>
                </div>


                <div className="feature-card">
                    <img src="/images/Dash/text/text_scrolltext.gif" alt="Suggestion Storage" className="feature-gif" />
                    <p>
                        <strong>Suggestion Storage and Navigation</strong>
                        <br /><br />
                        Active suggestions are stored in a persistent sidebar log, keeping users' writing process uninterrupted while suggestions accumulate.
                        <br /><br />
                        In the text itself, small bubbles appear next to the specific passages each suggestion targets. These act as visual anchors: 
                        clicking a bubble scrolls directly to the corresponding suggestion in the sidebar, and vice versa.
                    </p>
                </div>


                <div className="feature-card">
                    <img src="/images/Dash/text/text-sugg-options.png" alt="Suggestion Resolution" className="feature-gif" />
                    <p>
                    <strong>Resolving Suggestions</strong>
                    <br /><br />
                    Users can interact with suggestions in several ways: resolve them, reject them (to prevent similar ones in the future), 
                    or ask AI to apply an "auto-fix", rewriting the relevant passage.
                    <br /><br />
                    This adaptive feedback loop helps the assistant learn the user's writing style and preferences, 
                    allowing it to improve over time.
                    </p>
                </div>

                <div className="feature-card">
                    <img src="/images/Dash/text/text-suggestions-agent.png" alt="Suggestions Chatbot" className="feature-gif" />
                    <p>
                        <strong>Suggestions Chatbot</strong>
                        <br /><br />
                        Often, suggestions may seem vague, irrelevant, or even incorrect without further context.
                        To address this, users can open a chat with the writing assistant to ask follow-up questions about any suggestion.
                        <br /><br />
                        The chatbot explains the reasoning behind the feedback, offers examples, 
                        and allows users to understand their own writing patterns through natural conversation.
                    </p>
                </div>
                {/* <div className="scroll-spacer" /> */}
                </div>
                </section>

                <hr className="section-divider" />

                {/* Project 3 */}
                <section id="tasks" className="dash-section placeholder horizontal-scroll-task">
                <h2>Task Management</h2>

                <p>
                    Staying organized is difficult when tasks live separately from the work they're tied to. 
                    Most existing tools (like Google Tasks) have an unintuitive UI, lack full calendar integration, 
                    and don't support contextual linking. So, I built Dash's task system to keep action items and 
                    their context in one connected space and fill the gaps in existing task management tools.
                </p>

                <h3>Features</h3>

                <div className="scroll-container">
                    <div className="feature-card">
                    <img
                        src="/images/Dash/tasks/task.png"
                        alt="Creating and completing a Task node"
                        className="feature-gif"
                    />
                    <p>
                        <strong>Create Tasks with Time Windows</strong>
                        <br /><br />
                        Add tasks directly to your dashboard with a title, description, and either an
                        all-day flag or precise start-end times. Mark tasks complete to prevent future 
                        changes by collaborators.
                    </p>
                    </div>

                    <div className="feature-card">
                    <img
                        src="/images/Dash/tasks/task_calendar.gif"
                        alt="Task nodes shown in calendar view with drag-and-drop"
                        className="feature-gif"
                    />
                    <p>
                        <strong>Calendar View with Drag & Drop</strong>
                        <br /><br />
                        See tasks in a custom calendar view. Drag to reschedule, stretch to change duration,
                        and check off items directly from the calendar. You can also sync your tasks to Google Tasks,
                        automatically seeing updates on either end whenever a task is created, changed, or deleted.
                    </p>
                    </div>

                    <div className="feature-card">
                    <img
                        src="/images/Dash/tasks/task_links.png"
                        alt="Task nodes linked to related documents in Dash"
                        className="feature-gif"
                    />
                    <p>
                        <strong>Tasks in a Hypermedia Space</strong>
                        <br /><br />
                        With Dash, you can link a task to the exact artifacts it references: whether an essay draft, a PDF, a lecture
                        video, a notes doc, or a slideshow. Opening tasks directly in context of other documents streamlines your workflow,
                        allowing you to focus on tasks without losing sight of their background.
                    </p>
                    </div>

                    <div className="scroll-spacer" />
                </div>
                </section>

                </div>
            </Page>
        </>
    );
}