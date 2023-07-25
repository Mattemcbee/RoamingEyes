// import dog from './images/dog.jpg'
// import print from './images/printer issue.PNG'
import tower from './images/homeBack.jpg'
// import tower from '../../app/assets/img/divBack.jpg'
import Display2 from './Pages/Display2';
// import ShowPage from './ShowPage.js'
import YoutubeEmbed from './Youtube';
import { Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import './css/App.css'; // Create this CSS file to style the component

const ScrollingTower = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container fluid className='m-0 p-0 container2'>
      <div className="background-image2" style={{ transform: `translateY(${scrollY * .3}px)`, overflow: '' }}>
        <img src={tower} style={{ width: '100%' }} />
        <Container fluid style={{ backgroundColor: 'black', height: '100%' }} />
      </div>
      {/* <div className="" 
      style={{ height: `calc(100vh - ${scrollY}px)` }}
      > */}
        <div
          className="front-image"
          style={{
            top: `${scrollY * -1}px`, 
          }}>
          {/* <h1>heck</h1> */}
          <Display2 
          // style={{height:'100%'}}
          />
        </div>
      {/* </div> */}
    </Container>
  );
};

export default ScrollingTower;

