import React from "react";
import "./AboutMe.css";
import { Icon } from "@iconify/react";

function AboutMe() {
  return (
    <>
    
      <div className="about_me_parallax">
      
        <div className="opacity_container">
           {/* <div><Animation /></div>  */}
          <p className="text_container">
            my name is Francine Pêpe, and I am a Frontend Developer! I am
            ocurrently based in Hamburg, Germany, but I was born in Brazil. I
            love to create stuff, and that is why I first worked as a Fashion
            Designer for almost 10 years. After moving to Germany, I felt like
            changing my career as well, but I still wanted to continue working
            creatively, so, here I am creating beautiful and functional Websites
            and Apps. I am passionate about visual design and animation, which I
            guess I express myself in the most effective and clean way.
            <br />
            I work mainly with HTML 5, CSS 3, JavaScript and React.js
            Applications, but during this new journey, I felt the need to learn
            other libraries and frameworks, such as Vue.js and Sass. But I won't
            deny my preference for React{" "}
            <Icon icon="vscode-icons:file-type-reactts" width="32" height="32" />
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
