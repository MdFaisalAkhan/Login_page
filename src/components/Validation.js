

const Validation = (values)=>{
    let errors={};
    if(!values.email){
        errors.email="Email is Required."
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid (@)."
    }
    if(!values.password){
        errors.password="password is Require."
    }
    else if(!values.password.length > 7){
        errors.password="It must be greater than seven."
    }
    return errors;
};
export default Validation;