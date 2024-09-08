import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header';
import IconGallery from './Components/IconGallery';
import UsageInstructions from './Components/UsageInstructions';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <>
   
      <Header />
      <div className="app container">
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/icons" element={<IconGallery />} />
          <Route path="/usage" element={<UsageInstructions />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
