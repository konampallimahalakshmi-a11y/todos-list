import React from "react";
import searchbar from "./assets/searchbar.svg";
import notification from "./assets/notification.svg";
import picture from "./assets/picture.svg";
import arrow from "./assets/arrow.svg";

const Header = () => {
  const headerIcons = [
    {
      image: searchbar,
    },
    {
      image: notification,
    },
    {
      image: picture,
    },
  ];

  return (
    <div className="navbar">
      <p className="page-title">Farmers</p>

      <div className="header-right">
        {headerIcons.map((icon) => (
          <img
            key={icon.id}
            src={icon.image}
            alt="Header icon"
          />
        ))}

        <div className="profile-info">
          <h6>
            Eleanor Pena
            <img className="arrow" src={arrow} alt="Arrow" />
          </h6>

          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Header;