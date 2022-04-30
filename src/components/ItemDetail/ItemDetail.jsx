import React, { useState } from 'react';
import { Col, Card, Container, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    const [talle, setTalle] = useState(0);

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card.Img src={item.imagen} height={350} style={{ objectFit: "contain" }} />
                    </Col>
                    <Col>
                        <Card.Title>{item.titulo}</Card.Title>
                        
                        <hr></hr>
                        <Card.Text className='textoStyle'>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text className='textoStyle'>Precio:  <span className='precioStyle'>$ {item.precio}</span></Card.Text>
                        <hr></hr>
                        <button className="btn btn-masmenos col-1" onClick={() => setTalle(1)}>XS</button>
                        <button className="btn btn-masmenos col-1" onClick={() => setTalle(1)}>S</button>
                        <button className="btn btn-masmenos col-1" onClick={() => setTalle(1)}>M</button>
                        <button className="btn btn-masmenos col-1" onClick={() => setTalle(1)}>L</button>
                        <button className="btn btn-masmenos col-1" onClick={() => setTalle(1)}>XL</button>
                        <br></br>
                        <hr></hr>
                        <Row xs={2}>
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail