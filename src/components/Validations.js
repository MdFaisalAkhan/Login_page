const Validations = (values)=>{
    let errors={};
    if(!values.userName){
        errors.userName="UserName is Required."
    }
    // else if(! /\s+[A-Z\s]+\s+[A-Z][A-Za-z]+.test(values.userName)){
    //     errors.userName="User Name must be text."
    // }
    if(!values.country){
        errors.country="country is required."
    }
    // else if(values.country.length <16){
    //     errors.countery="It must be Text not number."
    // }
    if(!values.age){
        errors.age="age is required."
    }
    else if(!values.age>99){
        errors.age="It must be under 99."
    }
    return errors;
};
export default Validations;