import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Merch from '../Merch.js';
import { Container, Col, Row, Button } from "reactstrap";

const MerchPage = () => {

  return (

    <Container fluid className='Background2'>
        <Header />
        <h1>Merch page loser</h1>
    <Merch/>
    </Container>
  );
};

export default MerchPage;