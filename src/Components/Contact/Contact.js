import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@mui/material";
import "./Contact.css";
import { Icon } from "@iconify/react";
import Animation from "./Animation";
// import Postit from './../Images/postit.png';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gpnfnk",
        "template_sgmp2xj",
        form.current,
        "user_YeUwC6WQsK1xiMGVBrKzC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    alert("Thanks for contacting me! I will reply you soon! 📧");
  }

  return (
    <>
      <div className="contact_header" id="contact">
        <div className="postit_text">
          <p>
            Did you enjoy my work and would like to <br /> develop a project?
            Just drop me a line! <br/>You can use the Form, or write directly to this <br/> <a href = "mailto: franmelopepe2@gmail.com">Email</a><br /> Francine 🙂
          </p>

          <div className="animation">
            <Animation />
          </div>
        </div>

        <div className="background_container">
          <Container
            fluid="true"
            className="contact_container mt-5"
            sx={{
              display: "flex",
              marginTop: 5,
              justifyContent: "center",

              "& .MuiContainer-root": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              },
            }}
          >
            {/* <img className="postit" src={Postit} alt="postit" width="500" height="500" /> */}

            <form className="form_box" onSubmit={sendEmail} ref={form}>
              <label>Name:</label>
              <input type="text" name="user_name" />
              <label>Email:</label>
              <input type="email" name="user_email" />
              <label>Message:</label>
              <textarea name="message" />
              <button type="submit" value="Send">
                <Icon
                  icon="fluent:send-28-regular"
                  color="#F8F8F8"
                  width="40"
                  height="35"
                />
              </button>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
}
