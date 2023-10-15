import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./navbar-links.css";

const ServiceItem = ({ item, index }) => (
  <div key={index} className="service-item">
    <p>{item}</p>
    <span className="right-icon">
      <ChevronRightIcon />
    </span>
  </div>
);

const DropdownContent = ({ data }) => (
  <div className={`dropdown ${data.length < 6 ? "service-list" : "service-list-col"}`}>
    {data.map((item, index) => (
      <ServiceItem key={index} item={item} index={index} />
    ))}
  </div>
);

const NavbarLink = ({ label, link, data, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return data ? (
    <div className="dropdown-container" onMouseLeave={closeDropdown}>
      <DropdownContent data={data} />
      <a className="dropdown-link" onMouseEnter={toggleDropdown} onClick={onClick}>
        {label}
      </a>
    </div>
  ) : (
    <a className="link" href={link}>
      {label || "Click me"}
    </a>
  );
};

export default NavbarLink;
