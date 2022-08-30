
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  

import './App.css';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import Pricing from './components/pages/Pricing';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
