import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="albums">
    <div className="catchMe">
      <p>Można się ze mna skontaktować:</p>
      <br />
      <a
        href={"https://www.instagram.com/taiga.tattoo/"}
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href={"https://www.facebook.com/iga10.24"}
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineFacebook />
      </a>
      <a href={"mailto:Iga.luzniak@wp.pl"}>
        <AiOutlineMail />
      </a>
    </div>
    </div>
  );
};

export default Contact;
