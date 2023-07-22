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
                        <Col className='' xs='4' key={meal.id}>
                            <MerchCard meal={meal} />
                        </Col>
                        
                    </>
                );
            })}

        </Row>
    );
};

export default Album;