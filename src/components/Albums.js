import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Albums.scss";
import imgD from "../images/d7.jpeg";
import imgM from "../images/m3b.jpeg";
import imgS from "../images/s8.jpeg";
import imgDr from "../images/dr8.jpeg";

const Albums = () => {
  return (
    <>
      <h2>Albumy</h2>
      <div className="albums">
        <div className="links">
          <NavLink to="./draw">
            <figure>
              <figcaption>rysunki</figcaption>
              <img src={imgDr} alt="" />
            </figure>
          </NavLink>
          <NavLink to="./digital">
            <figure>
              <figcaption>digital</figcaption>
              <img src={imgD} alt="" />
            </figure>
          </NavLink>
          <NavLink to="./sketch">
            <figure>
              <figcaption>szkice</figcaption>
              <img src={imgS} alt="" />
            </figure>
          </NavLink>
          <NavLink to="./pictures">
            <figure>
              <figcaption>malarstwo</figcaption>
              <img src={imgM} alt="" />
            </figure>
          </NavLink>
          <NavLink to="./tatoo">
            <figure>
              <figcaption>tatuaże</figcaption>
              <img src={imgS} alt="" />
            </figure>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Albums;
