import React from 'react'
import { Col } from 'react-bootstrap';

import CardItem from './Carditem';
const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={3} sm={12} key={item.id} >
                        <CardItem item={item} />
                    </Col>
                ))
            }
        </>
    )
}

export default ItemList