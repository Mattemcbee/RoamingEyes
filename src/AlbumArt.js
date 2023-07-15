import art from './images/dogBack.jpg'
import art2 from './images/oldAlbum.jpg'

import { Container } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';

const Album = () => {


    return (
        <Container fluid className='' >
             <a href="https://google.com" target="_blank" rel="noreferrer">
             <img src={art} className='albumStyle hoverEff' />
             {/* <img src={art2} className='oldAlbumStyle hoverEff' /> */}


      </a>

                

        </Container>
    );
};

export default Album;