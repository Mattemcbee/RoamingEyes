import React, { useState } from 'react';
import { Container } from "reactstrap";
import '../css/App.css';
import home from '../images/homeBack.jpg'
import bird from '../images/bird.jpg'
import Header from '../component/Header';
import { ParallaxBanner } from "react-scroll-parallax";
import Album from '../AlbumArt.js';
import AlbumOld from '../AlbumArtOld.js';

import Socials from '../Socials.js';
import Shows from '../Shows.js';
import Merch from '../Merch.js';







const Display = () => {


    return (
        <>
            <Container fluid className='Background mt-0' >
                <Header />
                <h1>Listen to this track bitch</h1>
                <Album />
                <Container fluid className='merchBackground' >

                    {/* <h1 className='HeaderFont'>Check our old bitch</h1> */}
                    <AlbumOld />
                </Container>
            </Container>
            <Container fluid className='merchBackground' >

                <h1 className='HeaderFont'>Check our merch bitch</h1>
                <Merch />
            </Container>
            <Container fluid className='merchBackground ' >

                <h1 className='HeaderFont'>Check our shows bitch</h1>
                <Shows />
            </Container>
            <Container fluid className='merchBackground ' >

                <h1 className='HeaderFont'>Check our socials bitch</h1>
                <Socials />
            </Container>
        </>
    );
};

export default Display;