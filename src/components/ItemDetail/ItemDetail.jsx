import React from 'react';
import { Col, Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    return (
        <div>
            <Col>
                <Card>
                    <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                        <Card.Img variant="top" src={item.imagen} height={350} style={{ objectFit: "contain" }} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default ItemDetail