import React from "react";
import Button from "../Button/Button";
import "../../Service/service-section.css";

const ServiceList = ({ userData, handleCardHover, hoveredCard, index }) => {
  const isCardHovered = hoveredCard.includes(index);
  const { first_name, last_name, avatar } = userData;

  return (
    <div
      className={`service-card ${isCardHovered ? "scaled" : ""}`}
      key={index}
      onMouseEnter={() => handleCardHover(index)}
      onMouseLeave={() => handleCardHover(null)}
    >
      <img
        className="service-card-image"
        src={avatar}
        alt={`profile-picture`}
      />
      <div>
        <h3 className="service-card-title">{` ${first_name} ${last_name}`}</h3>
        <p className="service-card-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Button label={"Know More"} type={"primary"} onClick={() => {}} />
    </div>
  );
};

export default ServiceList;
