import React from 'react'
import { Button} from 'react-bootstrap';

const Loginbutton = (props) => {
  return (
    <Button onClick={props.onClick} variant="outline-success" style={{width:"80px", textAlign:"center"}}>Login</Button>
  )
}

export default Loginbutton