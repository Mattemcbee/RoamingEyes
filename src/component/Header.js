import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import '../css/App.css'
import MerchPage from '../Pages/MerchPage.js';

// import { Formik, Field, Form, ErrorMessage } from 'formik';

import { NavLink } from "react-router-dom";
// import hatLogo from "../app/assets/img/hatLogo.jpg";
// import backDrop from "../app/assets/img/logoM.jpg";

// import LoginForm from "./LoginForm";
// import UserLoginForm from "../features/user/UserLoginForm";

import React from 'react';
// import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" className="HeaderBack ">
      <NavbarBrand className=" m-auto" 
      href="/" 
      >
        {/* <img src={backDrop} alt="nucamp logo" className="float-start" style={{ width: '50%' }} /> */}
        <h1 className="m-auto HeaderFont ">ROAMING EYES</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="ms-5 float-start"
        style={{
          color: 'yellow', borderRadius: "10px",
          borderColor: '#EAC7C7', border: '5px'
        }} ><i className="fa fa-bars fa-md dark " />
      </NavbarToggler>
      
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto  float-start" navbar  >

        <NavItem>
            <NavLink className="nav-link iconColor hoverEffText" style={{ color: 'yellow' }} to="/">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link iconColor hoverEffText" style={{ color: 'yellow' }} to="/merch">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              Merch
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link iconColor hoverEffText" style={{ color: 'yellow' }} to="/shows">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link iconColor hoverEffText" style={{ color: 'yellow' }} to="/socials">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              Socials
            </NavLink>
          </NavItem>
          

        </Nav>

      </Collapse>
      
    </Navbar>
  );
};

export default Header;