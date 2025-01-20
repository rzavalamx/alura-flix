// src/components/Footer/Footer.jsx
import React from "react";
import logo from "../../assets/logo.png";
import { FooterContainer, Logo } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="AluraFlix logo" />
      <p>Developer desarrollado por Rafael Zavala Cruz Curso Front End Alura Latam &copy; 2025</p>
    </FooterContainer>
  );
};

export default Footer;
