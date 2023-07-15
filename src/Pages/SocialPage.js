import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Social from '../Socials.js';
import { Container, Col, Row, Button } from "reactstrap";

const SocialPage = () => {

  return (

    <Container fluid className='Background2'>
        <Header />
        <h1>Social page loser</h1>
    <Social/>
    </Container>
  );
};

export default SocialPage;