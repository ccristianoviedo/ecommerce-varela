import React from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item';

const ItemList = ({ropa}) => {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {ropa.map((item) => <Item item={item} key={item.id} />)}
            </Row>
        </div>
    )
}

export default ItemList