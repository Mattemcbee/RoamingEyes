import React, { useState } from 'react';
import { Container, Col, Row, Button } from "reactstrap";
import '../css/App.css';
import home from '../images/homeBack.jpg'
import bird from '../images/bird.jpg'
import Header from '../component/Header';
import { ParallaxBanner } from "react-scroll-parallax";
import Album from '../AlbumArt.js';
import AlbumOld from '../AlbumArtOld.js';

import Socials from '../Socials.js';
import Shows from '../Shows.js';
import ShowPreview from '../ShowsPreview';

import Merch from '../Merch.js';
import Youtube from '../Youtube.js'

import Footer from '../component/Footer.js'


const Display = () => {


    return (
        < >
            <Container fluid className=' mt-0 p-0' style={{height:'100%'}}>
                {/* <Container fluid style={{background:'red', height:'10px', width:'100%'}}></Container> */}
                <Header />
                <h1>Listen to this track bitch</h1>
                <Album />
                <Container fluid className='merchBackground' >
                    <Col xs='4' >
                    {/* <h1 className='HeaderFont'>Check our old bitch</h1> */}
                    {/* <AlbumOld /> */}    
                    <Youtube embedId="QjioBcWnNbc" />
                    </Col>

                </Container>
            </Container>
            <Container fluid className='Background2'>
                <Container fluid className='merchBackground' >

                    <h1 className='HeaderFont'>Check our merch bitch</h1>
                    <Merch />
                </Container>
                <Container fluid className='showBackground ' >

                    <h1 className='HeaderFont'>Check our shows bitch</h1>
                    <ShowPreview />
                </Container>
                {/* <Container fluid className='merchBackground ' >

                    <h1 className='HeaderFont'>Check our socials bitch</h1>
                    <Socials />
                </Container> */}
            </Container>
            <Footer/>
        </>
    );
};

export default Display;