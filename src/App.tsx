import * as React from "react";
import "./App.css";
import { Person } from "./Entities/Person";


const logo = require("./logo.svg");
const baseURL = "me.json";


const fetchMembersAsync = (): Promise<Person[]> => {
  return fetch(baseURL)
    .then((response) => (response.json()));
};


class App extends React.Component {

  render() {
    fetchMembersAsync()
      .then((me) => {
        console.log(me);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;