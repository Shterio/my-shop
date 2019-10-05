import React from 'react';
import { Route } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';

import './App.css';
const Detail = () => {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/detail' component={Detail} />
    </div>
  );

}

export default App;
