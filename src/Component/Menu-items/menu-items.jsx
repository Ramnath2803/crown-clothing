import React from "react";
import "./menu-items.scss";

export const MenuItems = (props) => {
  console.log(props.img);
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// export default MenuItems;
