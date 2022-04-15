import React from 'react'
import { Button} from 'react-bootstrap';

const Logoutbutton = (props) => {
  return (
    <Button onClick={props.onClick} variant="outline-danger" className="d-flex ms-5 mb-2">Logout</Button>
  )
}

export default Logoutbutton