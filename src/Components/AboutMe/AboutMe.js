import React from "react";
import "./AboutMe.css";
import ArrowAnimation from "./ArrowAnimation";

function AboutMe() {
  return (
    <>
    
      <div className="about_me_parallax" id="about">
      
        <div className="opacity_container">
           
          <p className="text_container">
            Hi, my name is Francine and I am a Frontend Developer!
            I am currently based in Hamburg, Germany, but I was born in Brazil. I
            love to create stuff, and that is why I first worked as a Fashion
            Designer for almost 10 years. After moving to Germany, I felt like
            changing my career as well, but I still wanted to continue working
            creatively, so, here I am creating beautiful and functional Websites
            and Apps. I am passionate about visual design and animation, which I
            guess I express myself in the most effective and clean way.
            <br />
            And what do I do? 
          </p>
          <div>
            <ArrowAnimation />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
