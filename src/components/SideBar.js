import React from "react";
import "../css/SideBar.css";
import SidebarOption from "./Sidebaroptions";
import { getTokenFromResponse } from "./Spotify";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon="fa-solid fa-house" option="Home" />
      <SidebarOption Icon='fa-solid fa-magnifying-glass' option="Search" />
      <SidebarOption Icon='fa-solid fa-compact-disc' option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;