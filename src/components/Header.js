import React from "react";
import "../css/Header.css";
import { useDataLayerValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <img style={{borderRadius: '50%'}} alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;