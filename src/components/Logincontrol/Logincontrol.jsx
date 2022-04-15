import Loginbutton from "../Loginbutton/Loginbutton";
import Logoutbutton from "../Logoutbutton/Logoutbutton";
import React from "react";
import Itemlistcontainer from "../Itemlistcontainer/Itemlistcontainer";

class Logincontrol extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
    render() {

      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <Logoutbutton onClick={this.handleLogoutClick} />;
      } else {
        button = <Loginbutton onClick={this.handleLoginClick} />;
      }
      
      return (
        <div>
          <Itemlistcontainer isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  export default Logincontrol