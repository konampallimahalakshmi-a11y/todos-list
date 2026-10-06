import React, { useState } from "react";

import image from "./assets/image1.png";
import dash from "./assets/dash.svg";
import docter from "./assets/docter.svg";
import data from "./assets/data.svg";
import cart from "./assets/cart.svg";
import farmers from "./assets/farmers.svg";
import stores from "./assets/stores.svg";
import dealers from "./assets/dealers.svg";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const menuItems = [
    { id: 1, image: dash, name: "Dashboard" },
    { id: 2, image: docter, name: "Crop Doctor" },
    { id: 3, image: data, name: "Crop Data" },
    { id: 4, image: cart, name: "Orders" },
    { id: 5, image: farmers, name: "Farmers" },
    { id: 6, image: stores, name: "Stores" },
    { id: 7, image: dealers, name: "Dealers" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>

      <div className="images">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={activeMenu == item.id ? "menu-item active" : "menu-item"}
            onClick={() => setActiveMenu(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
