import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Show from '../Shows';
import { Container, Col, Row, Button } from "reactstrap";

const ShowPage = () => {

  return (

    <Container fluid className='Background2'>
        <Header />
        <h1>Show page loser</h1>
    <Show/>
    </Container>
  );
};

export default ShowPage;