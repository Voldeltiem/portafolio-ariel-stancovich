import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">Ariel Stancovich</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-2">
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/about">About Me</NavLink>
            <NavLink className="navLink" to="/projects">Project</NavLink>
            <NavLink className="navLink" to="/hobbies">Hobby</NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
{
  /* <Nav className="justify-content-end flex-grow-1 pe-2">
                  <NavLink to="/home" >Home</NavLink>
                  <NavLink to="/about">About Me</NavLink>
                  <NavLink to="/project">Projet</NavLink>
                  <NavLink to="/hobby">Hobby</NavLink>
                </Nav> */
}
