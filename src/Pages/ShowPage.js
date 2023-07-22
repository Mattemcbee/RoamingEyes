import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import Show from '../Shows';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../component/Footer'
import ShowPoster from '../ShowPosters.js'

const ShowPage = () => {

  return (

    <Container fluid className='BackgroundShow'>
        <Header />
        <h1>Show page loser</h1>
        <ShowPoster />
    <Show/>
    <Footer/>
    </Container>
  );
};

export default ShowPage;