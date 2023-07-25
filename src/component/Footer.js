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
    <Container fluid className="Background2 CenterContainer" style={{ paddingBottom: '20px' }}>
      <Row>
        <Col xs='4' className="CenterContainer"
          style={{ margin: 'auto' }}
        >
          <a href='/'>
            <img src={Logo} className="CenterContainer" style={{ width: '60%', textAlign: 'center' }} />
          </a>
        </Col>
        <Col xs='4' style={{ margin: 'auto'}}>
          <Container fluid className="CenterContainer" style={{ margin: 'auto', verticalAlign: 'center' }}>
            <Row style={{ verticalAlign: 'center' }}>
              <Col xs='3'>
                <a className='noDecoration' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-instagram fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='noDecoration' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-facebook fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='noDecoration' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-youtube fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='noDecoration' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-spotify fa-2x' /></a>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col xs='4' className="">
          <Email />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;