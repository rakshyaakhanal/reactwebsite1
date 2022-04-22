import React from 'react';
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Pages/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Services' element={<Services />} />
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/SignUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
