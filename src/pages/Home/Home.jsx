import React from 'react';
import Itemlistcontainer from '../../components/Itemlistcontainer/Itemlistcontainer';

const Home = ({isLoggedIn}) => {
  return (
    <div>        
        <Itemlistcontainer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default Home