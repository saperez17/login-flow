import React from "react";
import Login from "./Login";
import Input from "./Input";
import Form from "./Form";

var isLoggedIn = true;
var userIsRegistered = true;

function App() {
  return (
    <div className="container">{userIsRegistered ? <Login /> : <Form />}</div>
  );
}

export default App;
