import React, { useEffect, useState } from "react";
import "./service-section.css";
import ServiceList from "../common-components/ServiceList/ServiceList";

const ServiceSection = () => {
  const [userData, setUserData] = useState([]);
  const [hoveredCard, setHoveredCard] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        const users = data.data.slice(0, 4);
        setUserData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard((prevIndices) => {
      const newIndices = new Set(prevIndices);
      newIndices.add(index);
      return Array.from(newIndices);
    });
  };

  return (
    <div className="service-section-container">
      <p className="service-section-header">Services</p>
      <div className="service-section-header-container">
        <p className="services-section-title">The</p>
        <p className="services-title-strike">Unique</p>
        <p className="services-section-title">Unico Approach</p>
      </div>
      {userData.length > 0 ? (
        <div className="service-section-users-container">
          {userData.map((user, index) => (
            <ServiceList
              key={index}
              userData={user}
              hoveredCard={hoveredCard}
              handleCardHover={handleCardHover}
              index={index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ServiceSection;
