import React, {useState} from "react";
// import { Link } from "react-router-dom";

function Welcome() {

    const [isRegistered, setIsRegistered] = useState(true)


  const Info = () => {
    return (
      <div className="container">
        <h1
          className="m-4 text-secondary"
          style={{ fontSize: 50, fontWeight: 500 }}
        >
          Institute Name
        </h1>
        <h4
          className="m-4 text-secondary"
          style={{ fontSize: 20, fontWeight: 400 }}
        >
          Institution description
        </h4>
        <button
          className="btn btn-info active"
          onClick={() => {
            window.location = "/home";
          }}
        >
          <i className="fa fa-home mr-2"></i>
          Notify Home
        </button>
      </div>
    );
  };

  const Registration = () => {
    return (
      <div className="container">
        <p className="text-success">
            Please register your Institute/Office for FREE!
        </p>
        <button
          className="btn btn-success active"
          onClick={() => {
            window.location = "/admin";
          }}
        >
          <i className="fa fa-plus mr-2"></i>
          Registration Now!
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1 className="m-4 text-info" style={{ fontSize: 35, fontWeight: 700 }}>
        Welcome to Notify
      </h1>
      
      {isRegistered ? Info() : Registration()}
      
    </div>
  );
}

export default Welcome;
