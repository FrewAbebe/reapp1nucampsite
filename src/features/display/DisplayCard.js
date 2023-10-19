import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const DisplayCard = ({ item }) => {
    const { image, name, descripttion } = item; 

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{descripttion}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard; 