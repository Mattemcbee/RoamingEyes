import art from './images/dogBack.jpg'
import art2 from './images/oldAlbum.jpg'
import { Container, Col, Row, Button } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';

const AlbumOld = () => {


    return (
        <Container fluid className='' >
            <Row>
                <Col>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={art2} className='oldAlbumStyle hoverEff' />
                    </a>
                </Col>
                <Col>
                    <h1>check our old shit</h1>
                    {/* <img src={art2} className='oldAlbumStyle hoverEff' /> */}

                </Col>
            </Row>



        </Container>
    );
};

export default AlbumOld;