import { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import '../css/App.css'
import MerchPage from '../Pages/MerchPage.js';
import Email from "../Email";
import Logo from '../images/logoName.jpg'
import React from 'react';


const Header = () => {

  return (
    <Container fluid className="Background2">
      <Row>
      <Col xs='4'>
        <a href='/'>
          <img src={Logo} className="CenterContainer" style={{width:'60%', textAlign:'center'}}/>
          </a>
        </Col>
        <Col xs='4'>
          <Container fluid className="CenterContainer">
          <Row>
            <Col xs='3'>
          <a className='noDecoration' style={{ color: '#fefae0' }}
            href='https://disposedkings.netlify.app/'>
            <i className='fa fa-instagram fa-2x' /></a>
            </Col>
            <Col xs='3'>
          <a className='noDecoration' style={{ color: '#fefae0' }}
            href='https://disposedkings.netlify.app/'>
            <i className='fa fa-facebook fa-2x' /></a>
            </Col>
            <Col xs='3'>
          <a className='noDecoration' style={{ color: '#fefae0' }}
            href='https://disposedkings.netlify.app/'>
            <i className='fa fa-youtube fa-2x' /></a>
            </Col>
            <Col xs='3'>
          <a className='noDecoration' style={{ color: '#fefae0' }}
            href='https://disposedkings.netlify.app/'>
            <i className='fa fa-spotify fa-2x' /></a>
            </Col>
            </Row>
            </Container>
        </Col>

        <Col xs='4'>
          <Email />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;