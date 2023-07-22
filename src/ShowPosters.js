// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';
import Poster1 from './images/poster1.jpg'
import Poster2 from './images/poster2.jpg'
import Poster3 from './images/poster3.jpg'

const ShowPoster = () => {

    return (
        <>
            <Row > 
                <Col xs={{size:'5', offset:'1'}}>
                <img src={Poster1} className="posterImg"/>
                </Col>
                <Col xs='5'>
                <img src={Poster2} className="posterImg"/>
                </Col>
                {/* <Col xs='4'>
                <img src={Poster3} className="posterImg"/>
                </Col> */}
            </Row>

        </>
    );        

};

export default ShowPoster;