import React, { useEffect, useState } from 'react';
import Validations from './Validations';
import classes from './UserList.module.css';
// import { useHistory } from "react-router-dom";



   
function UserList (props) {
  // let history = useHistory();

  const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      console.log("checking",val)
      
        return val.length > 0 && (valid = false);
    });
    return valid;
  };

  
  const [values, setValues] = useState({
    userName:"",
    country:"",
    age:""
});

const [errors, setErrors]= useState({userName:"",
country:"",
age:""});

const handleChange =(event)=>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
        function submitHandler(event) {
          event.preventDefault();
          setErrors(Validations(values));
      
      
          
      
          const user = {
            userName: values.userName,
            country: values.country,
            age: values.age
          };

          if (formValid(errors)){
            props.onAddUser(user);
            console.log("value",user)
          }
        }
        useEffect(()=>{
          setErrors(Validations(values));
        },[values]);
        // history.push("/userList"); 
          
        

    return(
        <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='userName'>UserName</label>
          <input type='text'
          name='userName'
          value={values.userName}
          onChange={(event)=>handleChange(event)}  
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor='country'>Country-Name</label>
          <input type='country'
          name='country'
          value={values.country}
          onChange={(event)=>handleChange(event)}
          >

          </input>
          {errors.country && <p>{errors.country}</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor='age'>Age</label>
          <input type='number' 
          name='age'
          value={values.age}
          onChange={(event)=>handleChange(event)}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <button>Add User-List</button>
      </form>
    );
};
export default UserList;