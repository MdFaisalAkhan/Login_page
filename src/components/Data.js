import React from 'react';
// import UserList from './UserList';

const Data =()=>{
function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(window.localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    console.log('done',a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    window.localStorage.setItem('session', JSON.stringify(a));
}

 const addUserHandler = async (user) =>{
  SaveDataToLocalStorage(user)

  
  const response = await fetch('https://react-http-req-b0fcd-default-rtdb.firebaseio.com/movies.json',{
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
  console.log(data);
};
return(
    <section>
    {/* <UserList onAddUser={addUserHandler} /> */}
  </section>
);


};
export default Data;