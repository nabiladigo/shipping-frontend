import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About'

const App =(props)=> {
  const URL= 'http://localhost:4000';
  return (
    <div className="container">
      <Routes>
        {/* <Route exact path ='/'element={<Home URL={URL} />} /> */}
        <Route path="/about" element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
