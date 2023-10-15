import React, { useState, useRef, useEffect } from "react";
import "./future-ready.css";
import Card from "../common-components/Card/Card";
import shopify from "../../images/shopify.svg";
import wordpress from "../../images/wordpress.png";
import webflow from "../../images/webflow.png";
import xano from "../../images/xano-nocode.png";
import nodejs from "../../images/nodejs.svg";
import hasura from "../../images/hasura.svg";
import laravel from "../../images/laravel.svg";
import react from "../../images/react.svg";
import angular from "../../images/angular.svg";

const noCode = [
  {
    image: {
      url: xano,
      width: 168,
    },
    content:
      "Xano builder provides us with a scalable server, flexible database, and a no-code API that transforms, filters and integrates with data anywhere.",
  },
  {
    image: {
      url: webflow,
      width: 168,
    },
    content:
      "Webflow is a no-code web design tool with excellent support features that helps us design, build and launch websites at lightning-fast speed and uncompromised quality.",
  },
  {
    image: {
      url: wordpress,
      width: 210,
    },
    content:
      "WordPress is a go-to platform for designing simple, modern and flexible websites that make the development process a smooth and adaptable experience for us.",
  },
  {
    image: {
      url: shopify,
      width: 168,
    },
    content:
      "Shopify is an e-commerce platform used to create online e-shops with visually stunning designs. It is secure, reliable and easily customizable at the same time.",
  },
];

const codePlatforms = [
  {
    title: "Front-end",
    content:
      "Dealing with parts of a user interface, the front-end development needs efficient systems to build them up slowly. What your users see, access and interact with is built by us keeping in mind a combination of resources.",
    children: [
      { image: nodejs, title: "Node Js" },
      { image: angular, title: "Angular" },
      { image: react, title: "React" },
    ],
  },
  {
    title: "Back-end",
    content:
      "Delving deep into the machinery of each click, the back-end systems make sure any website or software program accessed by your users works smoothly. Offering the latest software, we make sure to avoid all glitches.",
    children: [
      { image: laravel, title: "Laravel" },
      { image: nodejs, title: "Node JS" },
      { image: hasura, title: "Hasura" },
    ],
  },
];

const Tab = ({ id, label, activeTab, handleTabClick }) => (
  <a
    href={`#${id}`}
    className={`future-ready-tab ${activeTab === id ? "active" : ""}`}
    onClick={() => handleTabClick(id)}
  >
    <p>{label}</p>
    <h2>{id === "nocode" ? "No Code Platform" : "Code Platforms"}</h2>
  </a>
);

const FutureReadyGrid = ({ id, content, cards, refProp }) => (
  <div
    className={`future-ready-grid future-ready-grid-${id}`}
    id={id}
    ref={refProp}
  >
    <div className="future-ready-grid-lhs">
      <p>{content}</p>
      {id === "code" ? (
        <ul>
          <li>Scalable Server</li>
          <li>Flexible Database</li>
          <li>Easy to Transform</li>
          <li>Simple Integrations</li>
        </ul>
      ) : (
        <ul>
          <li>Swift Development</li>
          <li>Well-Organized</li>
          <li>Cost-Effective</li>
          <li>Finest Outcome</li>
        </ul>
      )}
    </div>
    <div className="future-ready-grid-rhs">
      {cards.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  </div>
);

const FutureReady = () => {
  const [activeTab, setActiveTab] = useState("nocode");
  const noCodeRef = useRef(null);
  const codeRef = useRef(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  useEffect(() => {
    if (noCodeRef.current) {
      observer.observe(noCodeRef.current);
    }
    if (codeRef.current) {
      observer.observe(codeRef.current);
    }

    return () => {
      if (noCodeRef.current) {
        observer.unobserve(noCodeRef.current);
      }
      if (codeRef.current) {
        observer.unobserve(codeRef.current);
      }
    };
  }, [observer]);

  return (
    <div className="future-ready-container">
      <h2 className="future-ready-heading">Create Future-Ready Platforms!</h2>
      <img src={xano} className="xano-image" alt="Xano" />
      <p className="future-ready-text">
        We have partnered with Xano to give you the ultimate experience. Xano
        builder provides us with a scalable server, flexible database, and a
        no-code API that transforms, filters and integrates with data anywhere
      </p>

      <div className="future-ready-tab-container">
        <Tab
          id="nocode"
          label="Build Faster"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <Tab
          id="code"
          label="Achieve Scale"
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </div>

      <FutureReadyGrid
        id="nocode"
        content="Developing with no code platforms enables us to deliver outstanding results on time."
        cards={noCode}
        refProp={noCodeRef}
      />

      <FutureReadyGrid
        id="code"
        content="Code platforms help achieve scale easily. Code platforms increase the speed of development and manage developments more efficiently."
        cards={codePlatforms}
        refProp={codeRef}
      />
    </div>
  );
};

export default FutureReady;
