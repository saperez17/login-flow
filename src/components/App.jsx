import React from "react";
import Login from "./Login";
import Input from "./Input";
import Form from "./Form";

var isLoggedIn = true;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {" "}
      <Form userIsRegistered={userIsRegistered} />{" "}
    </div>
  );
}

export default App;
