import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  const arr = [1, 2, 3];

  const a = 4;

  const nuevoArr = [...arr, a];

  console.log(nuevoArr);


  function handleClick (numero){
    console.log("click" + numero);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleClick(4)}>Click Me!</button>
        
      </header>
    </div>
  );
}

export default App;
