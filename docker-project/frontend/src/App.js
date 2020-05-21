import React from 'react';
import './App.css';
import SalaryForm from './pages/SalaryForm'
import DisplayResults from './pages/DisplayResults'


function App() {
  return (
    <div className='App'>
      <SalaryForm />
      <DisplayResults />
    </div>
  );
}

export default App;
