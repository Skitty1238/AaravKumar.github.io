import { Page, Seo, Animation } from 'gatsby-theme-portfolio-minimal';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';

import React from 'react';
import './cango.css'

export default function CanGo() {
    return (
        <>
            <Seo title="CanGo" />
            <Page useSplashScreenAnimation>
            <div className="cango-wrapper">

                <section>
                    <h1>CanGo</h1>
                    <h3>Discover Events. Meet People. Build Community.</h3>
                    <p>My peers and I found ourselves constantly missing out on events—either because we never saw the emails or because they got buried in endless newsletters. We wanted to build something that made it easier for students like us to actually enjoy what our campus has to offer, without relying on manually checking dozens of calendars.</p>
                    <p>So, four of us got together to build <strong>CanGo</strong>, a platform to make campus events more social, discoverable, and personalized for Brown and RISD students. Instead of getting overwhelmed by Events@Brown or missing word-of-mouth gatherings, students can now find what they care about—and who they'll enjoy it with.</p>
                </section>

                <section>
                    <h2>Who It's For</h2>
                    <ul>
                        <li>📚 Students seeking tailored, interest-based event discovery</li>
                        <li>🤝 Friends coordinating plans and meeting new people</li>
                        <li>🎉 Event organizers aiming for better turnout and engagement</li>
                    </ul>
                    <img
                        className="cango-image"
                        src="/images/CanGo/homepage.png"
                        alt="CanGo Landing Page"
                    />
                </section>

                <section>
                    <h2>Smart Event Recommendations</h2>
                    <p>Our dynamic algorithm sorts events by matching your interests, number of friends attending, and your past feedback— so you always see what matters most. If you're feeling adventurous, you can also use the <em>Try Something New</em> feature to be recommended unqiue events you wouldn't normally attend! </p>
                    <img
                        className="cango-image"
                        src="/images/CanGo/1.png"
                        alt="CanGo Recommendation Feature"
                    />
                </section>

                <section>
                    <h2>Personalized Profiles</h2>
                    <p>Customize your profile with interest tags, a friend list, and past events. This powers your recommendations and helps others connect with you.</p>
                    <img
                        className="cango-image"
                        src="/images/CanGo/3.png"
                        alt="CanGo Profile Customization"
                    />
                </section>

                <section>
                    <h2>Find Events with Friends, Old and New!</h2>
                    <p>Quickly see which events friends are attending or invite them directly. Choose to match with others attending the same events and sharing your interests. You're always in control of who you connect with.</p>

                    <div className="image-stack">
                        <img
                            className="cango-image"
                            src="/images/CanGo/5.png"
                            alt="CanGo Friending Feature"
                        />
                        <img
                            className="overlay-image"
                            src="/images/CanGo/8.png"
                            alt="CanGo Find Friends' Events"
                        />
                    </div>

                </section>

                <section>
                    <h2>Rich Event Pages</h2>
                    <p>Click any event to view details, organizer info, tags, and which friends are attending. RSVP to events and instantly sync them to your Google Calendar—no manual entry needed.</p>
                    <img
                        className="cango-image"
                        src="/images/CanGo/4.png"
                        alt="CanGo Event Pages"
                    />
                </section>

                <section>
                    <h2>Post and Edit Events</h2>
                    <p>Anyone can create their own events and tag them, helping smaller communities get visibility without relying on university bureaucracy.</p>
                    <div className="image-stack">
                    <img
                            className="cango-image"
                            src="/images/CanGo/10.png"
                            alt="CanGo Event Creation Feature"
                        />
                        <img
                                className="overlay-image"
                                src="/images/CanGo/9.png"
                                alt="CanGo Create Events Feature"
                        />
                    </div>
                </section>

                <section>
                    <div className="side-by-side">      
                        <img
                            className="side-image"
                            src="/images/CanGo/clerkerror.png"
                            alt="CanGo Clerk Authentication"
                        />
                        <div className="text-content">
                            <h2>Privacy & Safety</h2>
                            <p>
                                We used secure Clerk authentication so that only Brown/RISD email addresses can access CanGo. Your name is tied to your activity, and only friends can see your RSVPs and event history.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Challenges & Next Steps</h2>
                    <p>While our prototype demonstrates the core features of CanGo, there are problems we would address before considering a full launch:</p>
                    <ul>
                        <li><strong>Moderation Tools:</strong> Right now, anyone can post any kind of event without oversight. We'd need a system for flagging, reviewing, or restricting inappropriate or spammy events to ensure safety and relevance.</li>
                        <li><strong>Event Population:</strong> Our current setup relies heavily on user-submitted events. To prevent an empty feed, we plan to automatically populate events using web scraping from public calendars, student organization sites, and other sources.</li>
                        <li><strong>Scalability & Performance:</strong> As usage grows, features like friend recommendations, smart RSVPs, and personalized feeds would need optimization for speed and scalability.</li>
                        <li><strong>Better Feedback Loops:</strong> We'd also want more ways for users to provide tailored feedback with post-event questionnaires, helping us improve recommendations and trust signals.</li>
                    </ul>
                </section>

                {/* <section>
                    <h2>Our Team</h2>
                    <ul>
                        <li><strong>Christopher Ho</strong>, Class of 2027</li>
                        <li><strong>Aarav Kumar</strong>, Class of 2027</li>
                        <li><strong>Nathan Phan</strong>, Class of 2027</li>
                        <li><strong>Grace Wang</strong>, Class of 2027</li>
                    </ul>
                </section> */}

                <Animation className="MoreProjects" type="fadeIn">
                    <div className="github-button">
                    <Button
                        type={ButtonType.LINK}
                        externalLink={true}
                        url="https://github.com/Skitty1238/CanGo"
                        label="Visit on GitHub"
                    />
                    <p className="built-by">Built by Aarav Kumar, Christopher Ho, Grace Wang, and Nathan Phan</p>
                    </div>
                </Animation>


            </div>
            </Page>
        </>
    );
}