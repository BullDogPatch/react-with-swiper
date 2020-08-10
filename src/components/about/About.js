import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <h1>About Patch the English Bulldog</h1>
      <p>
        Patch is a 8 year old English Bulldog.
        <br />
        We rescued him in late 2017 and we have never looked back since.
      </p>
      <p>
        At times he can be a real pain in the neck, especially when he is
        begging for food and he doesn't stop barking.
      </p>

      <div>
        <img src="./images/patchSwiperImage4.jpg" alt="" />
      </div>

      <a
        href="https://twitter.com/patch_bulldog"
        target="_blank"
        rel="noopener noreferrer">
        <span>@patch_bulldog</span>
      </a>
    </div>
  );
};

export default About;
