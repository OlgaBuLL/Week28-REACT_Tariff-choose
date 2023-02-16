import React from "react";
import logo from "./logo.svg";
import "./App.css";

import tariffs from "./components/tariff.js";
import Tariff from "./components/Tariff.jsx";

import blue from "./styles/300.module.sass";
import green from "./styles/450.module.sass";
import red from "./styles/550.module.sass";
import black from "./styles/1000.module.sass";

function App() {
  const themes = [blue, green, red, black];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tariffs</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="tariffs-container">
        {tariffs.map((tariff, i) => (
          <Tariff
            key={i}
            name={tariff.name}
            price={tariff.name}
            speed={tariff.speed}
            theme={themes[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
