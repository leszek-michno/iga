import React from "react";
import img from "../images/header2.png";
import '../styles/Header.css'

const Header = () => {
  return (
    <>
    <div className="header">
      <img src={img} alt="Iga" />
      <h1>
        Iga Łużniak
      </h1>
    </div>
    

    </>
  );
};

export default Header;
