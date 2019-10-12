import React from 'react';
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );

}

export default App;
