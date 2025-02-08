import React from "react";
import "../App.css";


const MenuItem = ({ title, description, imageName, price }) => {
  return (
    <div className="menu-item">
      {/* Image */}
      <div className="menu-img-wrapper">
        <img src={`/public/images/${imageName}`} alt={title} className="menu-img" />
      </div>


      {/* Text */}
      <div className="menu-text">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-desc">{description}</p>
        <div className="menu-footer">
          <span className="menu-price">${price.toFixed(2)}</span>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};


export default MenuItem;



