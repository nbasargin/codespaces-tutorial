import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/stable-diffusion-iceland.jpg";

const imageAltText = "Lanscape of Iceland generated with Stable Diffusion";

const Home = ({ name }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem" }}>
        <h1 className="transparent-overlay">{name}</h1>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
