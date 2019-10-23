import React from 'react';

const AboutUs = (props) => {
  return(
    <div className="about-page">
      <p className="about-title">About Us</p>
      <div className="about-name"><p>Diane The Wonderful</p><a href="https://github.com/DianeEugenie"><img className="github-img" src="http://pngimg.com/uploads/github/github_PNG20.png" alt="Diane's GitHub Link"/></a></div>
      <div className="about-name"><p>Martin The Awesome</p><a href="https://github.com/Martinporter13"><img className="github-img" src="http://pngimg.com/uploads/github/github_PNG20.png" alt="Martin's GitHub Link"/></a></div>
      <div className="about-name"><p>Gillian The Fabulous</p><a href="https://github.com/GillianShanks"><img className="github-img" src="http://pngimg.com/uploads/github/github_PNG20.png" alt="Gillian's GitHub Link"/></a></div>
      <div className="about-name"><p>The code for Sparkotter: </p><a href="https://github.com/DianeEugenie/ProjectSparkotter"><img className="github-img" src="http://pngimg.com/uploads/github/github_PNG20.png" alt="Sparkotter's GitHub Link"/></a></div>

    </div>
  )
}
export default AboutUs;
