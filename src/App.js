import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';


const App =(props)=> {
  const URL= 'http://localhost:4000';
  return (
    <div className="container">
      <Routes>
        {/* <Route exact path ='/'element={<Home URL={URL} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
