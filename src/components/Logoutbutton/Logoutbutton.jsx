import React from 'react'
import { Button} from 'react-bootstrap';
import './Logoutbutton.css';

const Logoutbutton = (props) => {
  return (
    <Button onClick={props.onClick} className="btn-rojo" style={{width:"80px", textAlign:"center"}}>Logout</Button>
  )
}

export default Logoutbutton