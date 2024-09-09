import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header';
import IconGallery from './Components/IconGallery';
import UsageInstructions from './Components/UsageInstructions';
import HomePage from './Components/HomePage';

const App = () => {
  return (
   <div className='App content'>
   <Header />
   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/freeicons.web" element={<HomePage />} />
    <Route path="/icons" element={<IconGallery />} />
    <Route path="/usage" element={<UsageInstructions />} />
   </Routes>
   </div>
  );
};

export default App;
