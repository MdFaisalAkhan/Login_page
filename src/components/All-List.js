import React, { useState, useEffect, useCallback } from 'react';
import Details from './Details';
import UserList from './UserList';
import './All-List.css';

function AllList() {
  const [userNames, setUserNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
   const data = JSON.parse(window.localStorage.getItem('session'));
   console.log("done1",data)
    setIsLoading(true);
    setError(null);
    // try {
    //   const response = await fetch('https://react-http-req-b0fcd-default-rtdb.firebaseio.com/movies.json');
    //   if (!response.ok) {
    //     throw new Error('Something went wrong!');
    //   }

    //   const data = await response.json();

       const loadedUsers = [];

     for (const key in data){
        loadedUsers.push({
          id: key,
          userName: data[key].userName,
          country: data[key].country,
          age: data[key].age,
        });
     }

    
       setUserNames(loadedUsers);
    // }
    //  catch (error) {
    //   setError(error.message);
    // }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

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

  let content = <p>Found no Users.</p>;

  if (userNames.length > 0) {
    content = <Details userNames={userNames} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    
    <React.Fragment>
      
      <section>
        <UserList onAddUser={addUserHandler} />
      </section>
      <section>
        <button onClick={fetchUsersHandler}>Fetch User-Lists</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default AllList;
