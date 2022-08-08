import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";



const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  
  const handleFormSubmit = async (event) => {
  debugger
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
  
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="col-lg-12 w-50 mx-auto flex-row justify-content-end"
      id="background"
    >
    
      <div className="card">
        <h4 className="justify-center text-center card-header text-light p-6" id="loginbackground">
          Login
        </h4>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group bg-dark">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
               
              </div>
              <div className="form-group bg-dark">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
               
              </div>
          
             
         
              <Link to="/selectmovies">
              <button style ={{marginRight: 8}}type="submit" aria-pressed="true" className="btn btn-block btn-dark">
                Login
              </button> </Link>
              <br></br>
              <Link to="/signup">
              <button type="submit" aria-pressed="true" className="btn btn-block btn-dark">
                Sign Up
              </button></Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
