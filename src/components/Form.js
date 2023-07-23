import React, { useState } from "react";
import Login from './Login';
import AllList from './All-List';

const Form =()=>{
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = ()=>{
        setFormIsSubmitted(true);
    };

    return (<div>
      { !formIsSubmitted ? (<Login submitForm={submitForm}/> ): (<AllList/>)}
    </div>
    );
};

export default Form;