import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Me from "../../assets/images/me.jpg";

const About = () => {
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
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <h2>
            I'm a junior developer looking for a role in an established software
            company where I can leverage and enhance my analytical, technical,
            and computer skills.
          </h2>
          <h2>
            I am quietly confident, naturally curious, and perpetually working
            to improve my technique and knowledge. I'm a student of Udemy to
            keep up-to-date with modern design.
          </h2>
          <h2>
            I'm happily married and settled in Northern Vermont. My wife and I
            recently adopted a rescue puppy. I enjoy traveling, playing chess
            and listening to 90's rock.
          </h2>
        </div>
        <div className="image-wrapper">
          <img className="pic" src={Me} />
        </div>
      </div>
    </>
  );
};

export default About;
