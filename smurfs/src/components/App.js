import React from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

const App = () => {
  return (
    <div className="App">
    <div className="formContainer">
      <Form/>
    </div>

      <div className="smurfsList">
      <List /> 
    </div>

    </div>
  );
};

export default App