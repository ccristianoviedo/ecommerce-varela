import React from 'react'
import { Button} from 'react-bootstrap';

const Loginbutton = (props) => {
  return (
    <Button onClick={props.onClick} variant="outline-success" className="d-flex ms-5 mb-2">Login</Button>
  )
}

export default Loginbutton