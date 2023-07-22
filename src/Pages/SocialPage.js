import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Social from '../Socials.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../component/Footer.js'
import Youtube from '../Youtube.js'



const SocialPage = () => {

  return (

    <Container fluid className='socialBackground'>
      <Header />
      <h1>Social page loser</h1>
      <Social />
      <Col xs='2'>
      <Youtube embedId="QjioBcWnNbc" />
      </Col>

      <Footer />
    </Container>
  );
};

export default SocialPage;