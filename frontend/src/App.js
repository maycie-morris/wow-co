import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductScreen } from './screens/ProductScreen';
import { HomeScreen } from './screens/HomeScreen'

function App() {
  return (
    <BrowserRouter>
    <div classNameName="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/"><img id="wow_logo" src="/images/wow_logo_white.png" alt="WOW_co logo" /></a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ ProductScreen }></Route>
        <Route path="/" component={ HomeScreen } exact></Route>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
