import React from "react";
import "./card.css";

const Card = ({ title, image, content, children }) => {
  const renderTitle = title && <h2 className="card-title">{title}</h2>;
  const renderImage = image && (
    <img
      src={image.url}
      alt={title || "Image"}
      className="card-image"
      width={image.width || 200}
    />
  );
  const renderContent = content && <p className="card-content">{content}</p>;
  const renderChildren = children && children.length > 0 && (
    <div className="card-children-container">
      {children.map((child, index) => (
        <div className="card-child-wrapper">
          <div className="card-child" key={index}>
            <div className="card-child-img-container">
              <img src={child.image} alt={child.title} />
            </div>
          </div>
            <p>{child.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card">
      {renderTitle}
      {renderImage}
      {renderContent}
      {renderChildren}
    </div>
  );
};

export default Card;
