import React from 'react';
import { data } from './data';
import { Product } from './components/Product'

function App() {
  return (
    <div classNameName="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/"><img id="wow_logo" src="/images/wow_logo.png" /></a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
              {
                data.products.map(product => (
                  <Product product={ product } />
                ))
              }
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
