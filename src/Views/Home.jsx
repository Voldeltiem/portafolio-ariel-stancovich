import React from "react";
import fotoPerfil from "../assets/img/FotoPerfil.jpg";
import { FaLinkedin,FaGithub,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';

export default function Home() {
  
  return (
    
      <div className="conteiner-home">
        <div className="conteiner-perfil">
          <img
            className="foto-perfil"
            src={fotoPerfil}
            alt="Foto de Ariel Stancovich"
          />
        </div>
        <div className="conteiner-introduction">
          <p className="introduction">
            Profesional versátil con experiencia en operación de maquinarias
            industriales, atención al cliente, soporte técnico y desarrollo web.
            Habilidades en gestión de inventarios, almacenamiento, planificación
            de menús y trabajo en equipo. Apasionado por aprender y adaptarse a
            nuevos desafíos.
          </p>
        </div>
        <div className="conteiner-RRSS">
      <a href="https://www.linkedin.com/in/ariel-stancovich/" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com/Voldeltiem" target="_blank"><FaGithub /></a>
      <a href="https://www.facebook.com/profile.php?id=100017511408417" target="_blank"><FaFacebookSquare /></a>
      <a href="https://www.instagram.com/a.stancovich/?hl=es-la" target="_blank"><FaInstagramSquare /></a>
      <a href="https://twitter.com/StancovichA" target="_blank"><FaTwitterSquare /></a>
      </div>
      </div>
      
    
  );
}
