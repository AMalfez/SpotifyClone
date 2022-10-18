import React from "react";
import "../css/Sidebaroptions.css";

function SidebarOption({ Icon, option }) {
  return (
    <div className="sidebarOption">
      <i className={Icon}></i>
      <p>{option}</p>
    </div>
  );
}

export default SidebarOption;