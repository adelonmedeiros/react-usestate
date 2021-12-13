import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

  const [msg, setMsg] = useState("Teste do useState");

  function handleClick() {
    setMsg("useState funcionou!");
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <button className="button" onClick={()=>handleClick()}>Clique Aqui</button>
      </div>
  )
}

export default App;
