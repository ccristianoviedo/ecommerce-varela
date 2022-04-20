import React from 'react'
import Usergreeting from '../Usergreeting/Usergreeting';
import Guestgreeting from '../Guestgreeting/Guestgreeting';


const Itemlistcontainer = ({isLoggedIn}) => {  
      
    if (isLoggedIn) {
      return <Usergreeting />;
    }
    return <Guestgreeting />;  
}

export default Itemlistcontainer