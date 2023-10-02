import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: '20rem' }}className='mx-3 mt-5' >
            <Card.Img variant="top" src={item.image}  style={{ height: '40%' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Link to={`/details/${item.id}`}>
                    <Button variant="dark">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}

export default CardItem

