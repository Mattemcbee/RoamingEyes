import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

// import MerchPreview from './MerchPreview';

const SocialCard = ({ social }) => {
    const { id, image, price, name, disc, website, icon } = social;

    return (
        <Link className='NoDecorationCardText' to={"https://google.com"}>

            <Card className='hoverEff CardBackground CenterContainer noDecoration'
                style={{ marginBottom: '20px', borderRadius: '10px', backgroundColor: 'grey' }}
            >

                {/* <CardTitle className='cardStyle m-0'>{name}</CardTitle> */}
                <CardBody className='noDecoration p-20  CenterContainer'>
                    <Row>
                        <Col xs='2'>

                            <Row className='' style={{ height: '100%' }}>
                                <p> {icon}</p>
                            </Row>
                        </Col>

                        <Col xs='10' className='CenterContainer'>
                            <Row>
                            <CardText className='noDecoration CenterContainer' > {name}  </CardText>
                                {/* <CardText className='noDecoration CenterContainer' > {website}  </CardText> */}
                            </Row>
                        </Col>
                    </Row>


                </CardBody>
            </Card>
        </Link>
    );
};

export default SocialCard;