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

  /** This is a static user object */
  const user = {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};

  return (
    <div className="App">
      <h1>User Details</h1>
      
      {/* Display the user's info from the static user object */}
      <User {...user}/>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
