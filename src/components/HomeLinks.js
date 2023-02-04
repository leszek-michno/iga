import React from "react";
import { Link } from "react-router-dom";
import "../styles/Albums.scss";
import imgD from "../images/d7.jpeg";
import imgM from "../images/m3b.jpeg";
import imgS from "../images/s8.jpeg";
import imgDr from "../images/dr8.jpeg";

const HomeLinks = () => {
  const albums = [
    { name: "rysunki", path: "/draw", img: imgDr },
    { name: "digital", path: "/digital", img: imgD },
    { name: "szkice", path: "/sketch", img: imgS },
    { name: "malarstwo", path: "/pictures", img: imgM }
    // { name: "tatuaże", path: "/tatoo", img: },
  ];
  
  const album = albums.map((item) => (
    <Link key={item.name} to={item.path}>
      <figure>
        <figcaption>{item.name}</figcaption>
        <img src={item.img} alt="" />
      </figure>
    </Link>
  ));

  return (
    <>
      <h2>Albumy</h2>
      <div className="albums">
        <div className="links">
          {album}
          </div>
      </div>
    </>
  );
};

export default HomeLinks;
