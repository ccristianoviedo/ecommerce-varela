import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='nav'>
            <div>
                <h2>Feria Americana</h2>
            </div>
            <div className='categorias'>
                <ul>
                    <a href="#">Ropa</a>
                    <a href="#">Electrodomésticos</a>
                    <a href="#">Lentes</a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;