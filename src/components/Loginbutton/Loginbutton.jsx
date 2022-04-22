import React from 'react'
import { Button} from 'react-bootstrap';
import '../Logoutbutton/Logoutbutton.css';

const Loginbutton = (props) => {
  return (
    <Button onClick={props.onClick} className="btn-rojo" style={{width:"80px", textAlign:"center"}}>Login</Button>
  )
}

export default Loginbutton