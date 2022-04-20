import Loginbutton from "../Loginbutton/Loginbutton";
import Logoutbutton from "../Logoutbutton/Logoutbutton";
import React, { useState } from "react";
import Itemlistcontainer from "../Itemlistcontainer/Itemlistcontainer";

function Logincontrol({isLoggedIn, handleLoginClick, handleLogoutClick}) {  

  let button;

  if (isLoggedIn) {
    button = <Logoutbutton onClick={handleLogoutClick} />;
  } else {
    button = <Loginbutton onClick={handleLoginClick} />;
  }

  return (
    <div>      
      {button}
    </div>
  );
}

export default Logincontrol