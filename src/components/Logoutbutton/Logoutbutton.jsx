import React from 'react'
import { Button} from 'react-bootstrap';

const Logoutbutton = (props) => {
  return (
    <Button onClick={props.onClick} variant="outline-danger" style={{width:"80px", textAlign:"center"}}>Logout</Button>
  )
}

export default Logoutbutton