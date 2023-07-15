// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';
import { SHOWS } from './lists/ShowStore';
import ShowCard from './ShowCard'

const Album = () => {

    return (
        <Row>
            {SHOWS.map((show) => {

                return (
                    <>
                        
                            {/* <Col xs='12'> */}
                        <Col className='' xs='3' key={show.id}>
                            <ShowCard show={show} />
                        {/* </Col> */}
                        </Col>
                        
                    </>
                );
            })}

        </Row>
    );
};

export default Album;