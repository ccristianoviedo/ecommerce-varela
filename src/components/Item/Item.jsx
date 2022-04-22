import React from 'react'
import { Col, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({item}) => {

    function onAdd(cantidad) {
        console.log(cantidad);
    }
    
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={item.imagen} height={350} style={{objectFit:"contain"}} />                    
                    <Card.Body>
                        <Card.Title>{item.cartTexto}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <ItemCount stock={item} initial={1} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Item