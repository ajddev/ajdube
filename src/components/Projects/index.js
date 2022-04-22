import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import EggFlipImg from "../../assets/images/eggflip.png";
import ANTSImg from "../../assets/images/ants.PNG";
import TomTomCatImg from "../../assets/images/tomtomcat.PNG";
import AmoraImg from "../../assets/images/amora.png";

const images = [
  {
    original: ANTSImg,
    description: "A.N.T.S. (Administrative Notification Tracking System)",
  },
  {
    original: EggFlipImg,
    description: "EggFlip: Simply the best breakfast recipes.",
  },
  {
    original: TomTomCatImg,
    description: "TomTomCat: Track your pet.",
  },
  {
    original: AmoraImg,
    description: "Amora: Love freely.",
  },
];

const Projects = () => {
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
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <h2>Below are some of my current projects. Check them out!</h2>

        <div className="projects-container">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
