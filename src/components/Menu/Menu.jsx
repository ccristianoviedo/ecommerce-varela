import React from 'react';
import './Menu.css';
import { Navbar, Container, Nav, NavDropdown, Button, FormControl, Form, InputGroup } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import Cartwidget from '../Cartwidget/Cartwidget';
import Logincontrol from '../Logincontrol/Logincontrol';
import { Link } from 'react-router-dom';
import '../Logoutbutton/Logoutbutton.css';


function Menu(props) {
    return (
        <Navbar fixed={'top'} className={'position-sticky ps-0'} variant="dark" style={{backgroundColor: "#40434E"}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src="/american.png"
                        alt="logo"
                        width={100}
                        height={100}                          
                        backgroundcolor='transparent'    
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-grow-1 justify-content-center">                        
                        <Nav.Link to="/" as={Link}>Inicio</Nav.Link>
                        {/* <Link to={'/prueba/:id'}>Prueba</Link> */}
                        <Nav.Link to='/aboutus' as={Link}>Acerca de Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#producto/ropa">Ropa</NavDropdown.Item>
                            <NavDropdown.Item href="#producto/electro">Electrodomésticos</NavDropdown.Item>
                            <NavDropdown.Item href="#producto/deco">Decoración</NavDropdown.Item>                            
                            <NavDropdown.Item href="#producto/muebles">Muebles</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex ms-5 mb-2">
                            <InputGroup>
                                <FormControl 
                                    className="btn-search"
                                    placeholder="Buscar Producto"
                                    aria-label="Buscar Producto"
                                />                                
                                <Button id="button-addon2" className='btn-white-gray'>
                                    <BiSearchAlt />
                                </Button>
                            </InputGroup>
                        </Form>
                    </Nav>        
                    <Logincontrol {...props} />   
                    <Cartwidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;