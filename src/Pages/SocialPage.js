import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Social from '../Socials.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../component/Footer.js'
import Youtube from '../Youtube.js'

import HoverImage from '../HoverImage';
import HoverImage2 from '../HoverImage1';
import HoverImage3 from '../HoverImage2';
import HoverImage4 from '../HoverImage3';
import HoverImage5 from '../HoverImage4';






const SocialPage = () => {

  return (

    <Container fluid className='socialBackground'>
      <Header />
      <h1>Social page loser</h1>
      <Row>
        <Col xs={{ size: '4', offset: '1' }}>
          <Youtube embedId="QjioBcWnNbc" />
        </Col>
        <Col xs={{ size: '5', offset: '1' }}>
          <Social />
        </Col>
      </Row>
      <Container style={{marginBottom:'20px',marginTop:'20px'}}>
        <Row >
          <h1>Connect with us</h1>
          <Col xs={{size:'2',offset:'1'}}>
                        <HoverImage style={{ width: '100%', margin:'0' }} />
          </Col>
          <Col xs='2'>
            <HoverImage2 style={{ width: '100%', margin:'0' }} />
          </Col>
          <Col xs='2'>
            <HoverImage3 style={{ width: '100%', margin:'0' }} />
          </Col>
          <Col xs='2'>
            <HoverImage4 style={{ width: '100%', margin:'0' }} />
          </Col>
          <Col xs='2'>
            <HoverImage5 style={{ width: '100%', margin:'0' }} />

          </Col>
          
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default SocialPage;