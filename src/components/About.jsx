import React from 'react';
import '../styling/about.css';

const About = () => {
  return (
    <div>
      <div className="about-flex">
        <div className="about">
          <p className="about-me">About Me</p>
          <p>
            Hi! I'm Katie. I am a Miami-based web developer, designer and
            educator. I graduated from Florida State University with a B.A. in
            Creative Writing in 2011. I came to tech after an exciting tango in
            the events, marketing and communications industry. When I'm not
            coding, I am cuddling with my pets, working out, or sipping a
            delicious-iced-caffeinated beverage, in no specific order.
          </p>
        </div>
        <div className="about">
          <p className="about-me">Skills</p>
          <p>
           HTML • CSS • JavaScript • Node.js • React • MongoDB • Express • Firebase • Gatsby • Heroku • AWS • Netlify • Mongoose • Socket.io • Dokku • Postgres • NoSQL • MVC • Sanity.io 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
