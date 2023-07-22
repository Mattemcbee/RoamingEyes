import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// import MerchPreview from './MerchPreview';

const MerchCard = ({ show }) => {
    const { id, image, price, name, disc } = show;

    return (
        <Link
            // className='NoDecorationCardText' 
            to={"https://google.com"} className='noDecoration'>

            <Card className='hoverEff CardBackgroundShow noDecoration'
                style={{ marginBottom: '20px', borderRadius: '4px', backgroundColor: 'grey' }}
            >

                {/* <CardTitle className='cardStyle m-0'>{name}</CardTitle> */}
                <CardBody className=''>
                    <Row>
                        <Col xs='2' className='CenterContainer'>

                            <Row fluid style={{ height: '100%', width: '5%', backgroundColor: 'yellow', borderRadius: '10px' }}>
                                {/* <img src={image}/> */}
                            </Row>
                        </Col>
                        <Col xs='8' className=''>
                            <Container fluid className='CenterContainer'
                            // style={{backgroundColor:'red'}}
                            >
                            <p className='showText'>{name}</p>
                            <p className='showText2'>{disc}</p>
                            </Container>
                        </Col>

                        <Col xs='2'>
                            <Row>
                                <CardText className='NoDecorationCardText  m-0' > See More  </CardText>
                            </Row>
                        </Col>
                    </Row>


                </CardBody>
            </Card>
        </Link>
    );
};

export default MerchCard;