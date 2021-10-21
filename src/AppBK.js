import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Search2 } from "./components/Search";

function App(props) {
  // class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     saludo: 'Hola mundo!'
  //   }
  // }
  const [saludo, setSaludo] = useState(1);

  useEffect(() => {
    console.log("jamet");
  }, [saludo]);
  // render() {
  return (
    <div className="App">
      <div className="flex">
        <div className="flex-1">1</div>
        <div className="flex-1">1</div>
      </div>

      <header className="App-header">
        <Search2 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {props.name}
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setSaludo(saludo + 1)}
        >
          {saludo}
        </a>
      </header>
    </div>
  );
  // }
}

export default App;
