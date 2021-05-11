import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLoggedIn = true;

function App() {
  return <div className="container">{isLoggedIn ? <Input /> : <Login />}</div>;
}

export default App;
