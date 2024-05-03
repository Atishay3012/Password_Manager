import React from 'react';
import './App.css';
import Welcome from './components/welcome'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/about';
import ContactUs from './components/contact';
// import PasswordList from './components/PasswordList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                {/* Render Navbar only for routes other than Welcome */}
                <Route path='/*' element={<Navbar />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
                {/* <Route path='/passwordlist' element={<PasswordList />} /> */}
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
