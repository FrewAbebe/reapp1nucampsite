import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
    const {image, name, descripton } = campsite;

    return (
        <Col>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{descripton}</CardText>
                </CardBody>
            </Card>
        </Col>
    )

};

export default CampsiteDetail;