import React from 'react'
import { Button} from 'react-bootstrap';
import '../Logoutbutton/Logoutbutton.css';

const Loginbutton = (props) => {
  return (
    <Button onClick={props.onClick} className="btn-white" style={{width:"80px", textAlign:"center"}}>Login</Button>
  )
}

export default Loginbutton