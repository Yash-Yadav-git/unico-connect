import React from "react";
import Button from "../common-components/Button/Button";
import mobile from "../../images/1.svg";
import code from "../../images/2.svg";
import star from "../../images/3.svg";
import "./banner.css";

const featureData = [
  { id: 0, title: "Top Mobile App Developers", image: mobile },
  { id: 1, title: "Expert in No code Web Development", image: code },
  { id: 2, title: "Top Design Agency", image: star },
];

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-wrapper">
        <h1 className="banner-title">
          <span className="banner-title-bold">Transform your Ideas</span> into
          Stunning Products with Unico's Expert Team
        </h1>
        <p className="banner-sub-title">
          Build, Launch, and Scale your Products with Unmatched Efficiency
        </p>
        <div className="button-wrapper">
          <Button label={"Get Started"} onClick={() => {}} type={"white"} />
        </div>
        <div className="banner-feature-section">
          {featureData.map((data) => (
            <div key={data.id} className="banner-features">
              <img src={data.image} alt={data.title} />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
