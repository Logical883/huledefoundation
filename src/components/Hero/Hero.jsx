import React from "react";
import "./Hero.css";
import white_arrow from "../../assets/white_arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        {" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>The Hulede Foundation</h1>
        <p>
          Our strength lies not only in the words we stand by, but most
          importantly in the actions of our initiatives. We purposely create
          opportunities for the underprivileged in our society to better their
          lives. We strive to make a positive change and make a difference in
          the lives of all of our pursuits
        </p>
        <button className="btn">
          Explore more <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
