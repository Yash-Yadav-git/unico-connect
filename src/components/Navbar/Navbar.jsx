import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarLinks from "../common-components/NavBarLinks/NavBarLinks";
import Button from "../common-components/Button/Button";
import logo from "../../images/uclogo.svg";
import "./navbar.css";

const servicesProvided = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "AI Development",
  "Tech Consulting",
];

const hireDevelopers = [
  "Mobile App Developer",
  "WeWeb",
  "Bubble",
  "Node JS",
  "Xano",
  "Whsiper",
  "Angular JS",
  "Wordpress",
  "UI/UX Designer",
  "Flutter",
  "Shopify",
  "Website Developer",
  "Laravel",
  "ReactJs",
  "LangChain Developer",
  "Webflow",
  "ChatGPT",
  "Flutterflow",
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navDropdown, setNavDropdown] = useState(null);
  const handleHamburgerClick = () => {
    if (!isDropdownOpen) {
      setNavDropdown(null);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

    const toggleChildDropdown = (data) => {
      console.log(data)
    setNavDropdown((prevData) => (prevData ? null : data));
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <div className="navbar-left-content">
          <div className="navbar-logo-container ">
            <img className="navbar-logo" src={logo} alt="Unico Connect" />
          </div>
          <div className="navbar-menu-hamburger" onClick={handleHamburgerClick}>
            <HamburgerIcon />
          </div>
        </div>
        <div className={`navbar-right-content ${isDropdownOpen ? "show" : ""}`}>
          <div className="navbar-links">
            <NavbarLinks
              label="Services"
              data={servicesProvided}
              onClick={() => toggleChildDropdown("servicesProvided")}
            />
            {servicesProvided && navDropdown === "servicesProvided" ? (
              <div className="navbar-dropdown-mobile">
                {servicesProvided.map((data) => (
                  <div>{data}</div>
                ))}
              </div>
            ) : null}
            <NavbarLinks
              label="Hire Developers"
              data={hireDevelopers}
              columns={3}
              onClick={() => toggleChildDropdown("hireDevelopers")}
            />
            {hireDevelopers && navDropdown === "hireDevelopers" ? (
              <div className="navbar-dropdown-mobile">
                {hireDevelopers.map((data) => (
                  <div>{data}</div>
                ))}
              </div>
            ) : null}
            <NavbarLinks link="#" label="Case Study" />
            <NavbarLinks link="#" label="Pricing Plan" />
            <NavbarLinks link="#" label="No Code Tools" />
            <NavbarLinks link="#" label="About Us" />
          </div>
          <Button type={`primary`} label="Get in touch" onClick={() => {}} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
