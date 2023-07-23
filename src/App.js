import React from 'react';
import AllList from './components/All-List';

// import Data from './components/Data';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
 
 
  return (
    
      
    <Router>
    
      
    
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
     
        <Route path="/users">
          <AllList />
        </Route>

       
      
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    
  </Router>
  
    
    // <div>
    //   <Form />
    //   </div>
      
  );
}

export default App;

