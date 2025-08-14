import React from 'react';

import './App.css';
import Header from './Components/Header';
import CompanyInfo from './Components/CompanyInfo';
import Courses from './Components/Courses';

function App() {
  return (
    <div className="App">
      <Header/>
      <CompanyInfo/>
      <Courses/>
    </div>
  );
}

export default App;
