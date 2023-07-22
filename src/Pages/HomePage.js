import React, { useState } from 'react';
import '../css/App.css';
import './Display.js'
import Display from './Display.js';
import Header from '../component/Header';
import { Container, Col, Row, Button } from "reactstrap";

const App = () => {

  return (
    <>
      <Display />
    </>
  );
};

export default App;