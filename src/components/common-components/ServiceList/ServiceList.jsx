import React from "react";
import Button from "../Button/Button";
import "../../Service/service-section.css";

const ServiceList = ({ userData, handleCardHover, hoveredCard, index }) => {
  return (
    <div
      className={`service-card ${
        hoveredCard.includes(index) ? "scaled" : ""
      }`}
      key={index}
      onMouseEnter={() => handleCardHover(index)}
      onMouseLeave={() => handleCardHover(null)}
    >
      <img
        className="service-card-image"
        src={userData.picture.large}
        alt={userData.name.first}
      />
      <div>
        <h3 className="service-card-title">{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h3>
        <p className="service-card-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Button label={"Know More"} type={"white"} onClick={() => {}} />
    </div>
  );
};

export default ServiceList;
