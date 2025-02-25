import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="paris" />
        <footer>
          This project was coded by Wimym Andrea Liu Ye and is{" "}
          <a
            href="https://github.com/wliuye/wimym-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

