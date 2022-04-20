import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  function noReturn() {
    setTimeout(() => {
      setLetterClass("text-animate-hover colored");
    }, 4000);
  }

  useEffect(() => {
    noReturn();
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t"]}
              idx={15}
            />
          </h1>
          <h2>
            Let's build something great together! I'd love to hear from you.
          </h2>
          <div className="form-wrap">
            <form
              action="https://formsubmit.co/dubedeveloper@gmail.com"
              method="POST"
            >
              <div className="form-container">
                <div className="name-email">
                  <input type="text" name="name" placeholder="Name" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-container">
                <div className="name-email">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-container">
                <button className="flat-button" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
