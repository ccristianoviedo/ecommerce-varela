import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './Cartwidget.css';

const Cartwidget = () => {
    return (
        <Button variant="outline-secondary">
            <div className="cart-widget">
                <FontAwesomeIcon icon={faCartShopping} size="2x"/>                           
            </div>
        </Button>
    );
};

export default Cartwidget;
