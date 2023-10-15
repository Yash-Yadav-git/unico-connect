import React, { useEffect, useState } from "react";
import Button from "../common-components/Button/Button";
import "./service-section.css";
import ServiceList from "../common-components/ServiceList/ServiceList";

const ServiceSection = () => {
  const [userData, setUserData] = useState([]);
  const [hoveredCard, setHoveredCard] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        const users = data.results;
        setUserData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleCardHover = (index) =>
    setHoveredCard((prevIndices) =>
      prevIndices.includes(index) ? prevIndices : [...prevIndices, index]
    );

  return (
    <div className="service-section-container">
      <p className="service-section-header">Services</p>
      <div className="service-section-header-container">
        <p className="services-section-title">The</p>
        <p className="services-title-strike">Unique</p>
        <p className="services-section-title">Unico Approach</p>
      </div>
        <div className="service-section-users-container">
          {userData.map((user, index) => (
            <ServiceList
              userData={user}
              hoveredCard={hoveredCard}
              handleCardHover={handleCardHover}
              index={index}
            />
          ))}
        </div>
      </div>
  );
};

export default ServiceSection;
