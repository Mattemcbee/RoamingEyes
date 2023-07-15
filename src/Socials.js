// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import './css/App.css';
import { SOCIALS } from './lists/SocialStore';
import ShowCard from './ShowCard'
import SocialCard from "./SocialCard";

const Socials = () => {

    return (
        <Row>
            {SOCIALS.map((social) => {

                return (
                    <>
                        
                            {/* <Col xs='12'> */}
                        <Col className='' xs='3' key={social.id}>
                            <SocialCard social={social} />
                        {/* </Col> */}
                        </Col>
                        
                    </>
                );
            })}

        </Row>
    );
};

export default Socials;