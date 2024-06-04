import React from 'react';
import './Test.css'; 
import Image1 from '../assets/image-daniel.jpg';
import Image2 from '../assets/image-jeanette.jpg';
import Image3 from '../assets/image-jonathan.jpg';
import Image4 from '../assets/image-patrick.jpg';
import Image5 from '../assets/image-kira.jpg';

const TestimonialsGrid = () => {
    return (
        <main>
          <div className="award-recognition">
        <h1>Testimonials</h1>
      </div>
      <div className="award-recognition">
        <h3>Of Our Prominant Employees About Our Work Environment</h3>
      </div>
            <section className="testimonials-section">
            <section className="section-1">
            <section className="author">
            <img src={Image1} alt="Header"/>
                    <section className="author-info">
                    <p className="authorName">"Asif Munir"</p>
                    <p className= "authorDescription">"Verified Graduate"</p>
                    </section>
                    </section>

                    <section cassName="highlightedContent">
                      <p>"I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
                    </p>
                    </section>
                    <section className="content">
                      <q>
                      "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter, The next 12 weeks was the best- and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
                      </q>
                    </section>
</section>

<section className="section-2">
            <section className="author">
            <img src={Image2} alt="Header"/>
                    <section className="author-info">
                    <p className="authorName">"Maryam Nawaz"</p>
                    <p className= "authorDescription">"Verified Graduate"</p>
                    </section>
                    </section>

                    <section cassName="highlightedContent">
                      <p>"The team was very
                        supportive and kept me
                        motivated </p>
                    </section>
                    <section className="content">
                      <q>I started as a total newble with
                        virtually no coding skills. I now work
                        as a mobile engineer for a big
                        company. This was one of the best
                        investments I've made in myself</q>
                    </section>
</section>
<section className="section-3">
            <section className="author">
            <img src={Image3} alt="Header"/>
                    <section className="author-info">
                    <p className="authorName">"Momin Kango"</p>
                    <p className= "authorDescription">"Verified Graduate"</p>
                    </section>
                    </section>

                    <section cassName="highlightedContent">
                      <p>Such a life-changing
                        experience. Highly
                        recommended!</p>
                    </section>
                    <section className="content">
                      <q>Before joining the bootcamp, I've
                        never written a line of code, I needed
                        some structure from professionals
                        who can help me learn programming
                        step by step. I was encouraged to
                        enroll by a former student of theirs
                        who can only say wonderful things
                        about the program. The entire
                        curriculum and staff did not
                        disappoint. They were very hands-on
                        and I never had to wait long for
                        assistance. The agile team project, in
                        particular, was outstanding. It took
                        my learning to the next level in a way
                        that no tutorial could ever have, in
                        fact, I've often referred to it during
                        interviews as an example of my
                        developent experience. It certainly
                        helped me land a job as a full-stack
                        developer after receiving multiple
                        offers, 100% recommend</q>
                    </section>
</section>
<section className="section-4">
            <section className="author">
            <img src={Image4} alt="Header"/>
                    <section className="author-info">
                    <p className="authorName">"Ali Raza"</p>
                    <p className= "authorDescription">"Verified Graduate"</p>
                    </section>
                    </section>

                    <section cassName="highlightedContent">
                      <p>An overall wonderful
                        and rewarding
                        experience</p>
                    </section>
                    <section className="content">
                      <q>Thank you for the wonderful
                        experience! I now have a job I really
                        enjoy, and make a good living while
                        doing something I love </q>
                    </section>
</section>
<section className="section-5">
            <section className="author">
            <img src={Image5} alt="Header"/>
                    <section className="author-info">
                    <p className="authorName">"Fatima Jinnah"</p>
                    <p className= "authorDescription">"Verified Graduate"</p>
                    </section>
                    </section>

                    <section cassName="highlightedContent">
                      <p>Awesome teaching support from TAs who did the bootcamp
                        themselves. Getting guidance from them and learning from
                        their experiences was easy.
                     </p>
                    </section>
                    <section className="content">
                      <q>The staff seem genuinely concerned about my progress which I find really refreshing. The
                        program gave me the confidence necessary to be able to go out in the world and present
                        myself as a capable junior developer. The standard is above the rest. You will get the
                        personal attention you need from an incredible community of smart and amazing people </q>
                    </section>
</section>
</section>
    </main>
  
    );
};


export default TestimonialsGrid;
