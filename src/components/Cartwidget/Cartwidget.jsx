import React from 'react';
import '../Logoutbutton/Logoutbutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './Cartwidget.css';

const Cartwidget = () => {
    return (
        <Button className='ms-5 btn-white'>
            <div className="cart-widget">
                <FontAwesomeIcon icon={faCartShopping} size="2x"/>                           
            </div>
        </Button>
    );
};

export default Cartwidget;
