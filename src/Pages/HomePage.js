import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import { Container, Col, Row, Button } from "reactstrap";

const App = () => {

  return (

    <Container fluid className='Background2'>
      {/* <Header /> */}
      <Display />
    </Container>
  );
};

export default App;