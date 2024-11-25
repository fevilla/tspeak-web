import React from "react";
import logoIcon from "../assets/images/logo-icon.png";

const Logo = ({ size = "text-4xl", color = "text-primary" }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoIcon} alt="Logo Icon" className="h-25 w-15" />
      <h1 className={`font-rammetto ${size} ${color}`}>
        Tspeak
      </h1>
    </div>
  );
};

export default Logo;
