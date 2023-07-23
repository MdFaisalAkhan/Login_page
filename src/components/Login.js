import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import { useHistory } from "react-router-dom";
import  { BrowserRouter as Router } from 'react-router-dom';

import "./Login.css";

const Login = ({ submitForm }) => {
  let history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
      const {name,value}=event.target
    setValues({
      ...values,
      [name]: value,

    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      history.push("/users");  
    }
  },[errors, dataIsCorrect]);
const {email,password}=values
  return (
    <div className="login">
      <h3>Sign-In Account</h3>
      <form>
        <div className="control">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => handleChange(event)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => handleChange(event)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className="button" type="submit" onClick={handleFormSubmit}>
        
          Login.
        </button>
        
      </form>
    </div>
  );
};

export default Login;
