import React from 'react';
import { data } from '../data';
import { Product } from '../components/Product';

export const HomeScreen = () => {
    return (
        <div>
          <div className="row center">
              {
                data.products.map(product => (
                  <Product product={ product } />
                ))
              }
          </div>
        </div>
    )
}