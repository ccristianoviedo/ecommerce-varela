import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './components/Menu/Menu';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';

import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Menu handleLoginClick={handleLoginClick} handleLogoutClick={handleLogoutClick} isLoggedIn={isLoggedIn} />
      <header className="App-header">
        <Itemlistcontainer isLoggedIn={isLoggedIn} />
      </header>
    </div>
  );
}

export default App;
