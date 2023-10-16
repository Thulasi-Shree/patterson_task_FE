import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigator = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleFormChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  //username - kminchelle password - 0lelplR
  const handleSubmitLogin = () => {
    console.log("loginform-------->", loginForm);
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", loginForm)
      .then((res) => {
        if (res.data) {
          console.log("login success---->", res.data);
          onLogin(); // Call the callback function to update isLoggedIn in the parent component
          navigator("/dealPage");
        } else {
          console.log("something went wrong", res.data.userData);
        }
      })
      .catch((err) => {
        console.log("login err---->", err);
      });
  };

  return (
    <div className="container-fluid" id="form-container">
      <div className="card" id="form-card">
        <h1>Log in</h1>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <h6>Email address</h6>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={loginForm.email}
                name="email"
                onChange={(event) => {
                  handleFormChange(event);
                }}
              />

              <br></br>
            </div>

            <div className="col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <h6>Password</h6>
              </label>
              <input
                type="password"
                placeholder="*******"
                className="form-control"
                value={loginForm.password}
                name="password"
                onChange={(event) => {
                  handleFormChange(event);
                }}
              />
              <br></br>{" "}
            </div>
          </div>
          <div className="">
            <button
              className="btn btn-primary col-12"
              onClick={() => handleSubmitLogin()}
            >
              Log in
            </button>
            <div>
              <br></br>
              Don't have an account? <Link to="register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;