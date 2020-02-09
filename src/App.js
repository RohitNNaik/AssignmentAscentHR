import React from 'react';
import Dashboard from './Containers/Dashboard'; 
import Header from './Containers/Header';
import Spacer from './Components/Spacer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

function App() {
  return (
    <div className="App">
      <Header/>
      <Spacer height={60}/>
      <Dashboard/>
    </div>
  );
}

export default App;
