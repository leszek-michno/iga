import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import Contact from './Contact';
import Home from './Home';
import '../styles/navBar.css'
import Draws from './Draws';
import Pictures from './Pictures';
import Digital from './Digital';
import Sketches from './Sketches';

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
  
     
    return (
    <>
      <div>
            <div>
              <nav>
              {(toggleMenu || screenWidth > 600) && (
                  <ul className="list">
                    <li>
                      <NavLink onClick={toggleNav} to="/">
                        start
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleNav} to="/contacts">
                        kontakt
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleNav} to="/draw">
                        rysunki
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleNav} to="/digital">
                        digital
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleNav} to="/sketch">
                        szkice
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleNav} to="/pictures">
                        malarstwo
                      </NavLink>
                    </li>
                  </ul>
                )}
                <button onClick={toggleNav} className="btn">
                  <AiOutlineMenu />
                </button>
              </nav>
            </div>
            </div>
        
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contacts" element={<Contact />} />
              {/* <Route path="/albums" element={<Albums />} /> */}
              <Route path="/draw" element={<Draws/>} />
              <Route path="/pictures" element={<Pictures/>} />
              <Route path="/digital" element={<Digital/>} />
              <Route path="/sketch" element={<Sketches />} />
            </Routes>
            </>
            )
            }
