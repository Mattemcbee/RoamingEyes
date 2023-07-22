import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Merch from '../Merch.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../component/Footer'

const MerchPage = () => {

  return (

    <Container fluid className='BackgroundMerch'>
        <Header />
        <h1>Merch page loser</h1>
    <Merch/>

    <Footer />
    </Container>
  );
};

export default MerchPage;