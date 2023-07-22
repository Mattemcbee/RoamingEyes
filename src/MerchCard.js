import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import MerchPreview from './MerchPreview';

const MerchCard = ({ meal }) => {
    const { id, image, price, name, disc } = meal;

    return (
        <Link className='NoDecorationCardText' to={"https://google.com"}>

            <Card className='hoverEff CardBackgroundMerch MerchCard'
                style={{ marginBottom: '20px', borderRadius: '0 ', backgroundColor: 'transparent ' }}
            >

                <CardBody className=' p-0 ' >
                    {/* <Row>
                        <Col xs='12'> */}
                            <Row className='' style={{ height: '100%' }}>
                                <MerchPreview meal={meal} style={{ height: '100%' }} />
                            </Row>
                        {/* </Col>
                    </Row> */}
                </CardBody>
                <Row>
                    <Col xs='8'>
                        <CardText className='m-0 MerchPreviewText'>{name}</CardText>
                    </Col>
                    <Col xs='4'>
                        <CardText className='m-0 MerchPreviewText' > {price}  </CardText>
                    </Col>
                </Row>
            </Card>
        </Link>
    );
};

export default MerchCard;