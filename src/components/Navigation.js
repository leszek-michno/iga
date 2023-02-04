import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Contact from "./Contact";
import Draws from "./Draws";
import Pictures from "./Pictures";
import Digital from "./Digital";
import Sketches from "./Sketches";
// import Tatoo from "./Tatoo";
import Albums from "./Albums";
import '../styles/NavBar.scss';


export const NaviBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const list = [
    { name: "start", path: "/" },
    { name: "kontakt", path: "/contacts" },
    { name: "rysunki", path: "/draw" },
    { name: "digital", path: "/digital" },
    { name: "szkice", path: "/sketch" },
    { name: "malarstwo", path: "/pictures" },
    // { name: "tatuaże", path: "/tatoo" },
  ];

  const albums = list.map((item) => (
    <li key={item.name}>
      <NavLink onClick={toggleNav} to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>  
          <nav className="list">
            {(toggleMenu || screenWidth > 600) && <ul>{albums}</ul>}
            <button onClick={toggleNav} className="btn">
              <AiOutlineMenu />
            </button>
          </nav>
      <Routes>
        <Route path="/" element={<Albums/>} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/draw" element={<Draws />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/sketch" element={<Sketches />} />
        {/* <Route path="/tatoo" element={<Tatoo/>} /> */}
      </Routes>
    </>
  );
};
