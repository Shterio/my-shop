import React from 'react';
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );

}

export default App;
