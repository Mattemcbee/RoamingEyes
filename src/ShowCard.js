import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// import MerchPreview from './MerchPreview';

const MerchCard = ({ show }) => {
    const { id, image, price, name, disc } = show;

    return (
        <Link className='NoDecorationCardText' to={"https://google.com"}>

            <Card className='hoverEff CardBackground' 
            style={{ marginBottom: '20px', borderRadius: '0 0 10px 10px', backgroundColor:'yellow' }}
            >
                
                <CardTitle className='cardStyle m-0'>{name}</CardTitle>
                <CardBody className='cardStyleDark p-50 fluid '>
                    <Row>
                <Col xs='8'>

                    <Row className='center fluid mx-auto' style={{height:'100%'}}>
                            <img src={image}/>
                    </Row> 
                    </Col>

                    <Col xs='4'>
                    <Row>
                            <CardText className='NoDecorationCardText m-0' > {price}  </CardText>
                    </Row>
                    </Col>
                    </Row>

                  
                </CardBody>
            </Card>
         </Link>
    );
};

export default MerchCard;