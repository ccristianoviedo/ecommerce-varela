import React, { useState } from 'react';
import { Col, Card, Container, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const [talle, setTalle] = useState (0);

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card.Img src={item.imagen} height={350} style={{ objectFit: "contain" }} />
                        Pasa el mouse encima de la imagen para aplicar zoom
                    </Col>
                    <Col>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <button className="btn btn-masmenos col-1" onClick={()=> setTalle(1)}>XS</button>
                        <button className="btn btn-masmenos col-1" onClick={()=> setTalle(1)}>S</button>
                        <button className="btn btn-masmenos col-1" onClick={()=> setTalle(1)}>M</button>
                        <button className="btn btn-masmenos col-1" onClick={()=> setTalle(1)}>L</button>
                        <button className="btn btn-masmenos col-1" onClick={()=> setTalle(1)}>XL</button>
                        <br></br>
                        <br></br>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail