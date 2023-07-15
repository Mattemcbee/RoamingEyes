// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';
import { MERCH } from './lists/MerchStore';
import MerchCard from './MerchCard'

const Album = () => {

    return (
        <Row>
            {MERCH.map((meal) => {

                return (
                    <>
                        
                            {/* <Col xs='12'> */}
                        <Col className='' xs='3' key={meal.id}>
                            <MerchCard meal={meal} />
                        {/* </Col> */}
                        </Col>
                        
                    </>
                );
            })}

        </Row>
    );
};

export default Album;