import React from "react";
import ReactDOM from "react-dom";

/** @function User Component
 * @param props inputs the user details into the function
 */
function User(props) {
  /** HTML part */
  return (
    /**  */
    <div className="User">
      <ul>
        <li>First Name: {props.first_name}</li>
        <li>Last Name: {props.last_name}</li>
        <li>E: {props.email}</li>
      </ul>
    </div>
  );
}

/** Main */
function App() {
  const user = {};

  return (
    <div className="App">
      <h1>User Details</h1>
      <User />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
