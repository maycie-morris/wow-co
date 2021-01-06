import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../components/Product';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';
import { listProducts } from '../actions/productActions';

import img1 from '../car-imgs/img1.png'
import img2 from '../car-imgs/img2.png'
import img3 from '../car-imgs/img3.png'
import img4 from '../car-imgs/img4.png'

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const productList = useSelector( state => state.productList );
    const { loading, error, products } = productList;

    useEffect(() => {
      dispatch(listProducts({}));
    }, [dispatch])

    return (
        <div>
          <Carousel showArrows autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src= { img1 } />
            </div>
            <div>
              <img src= { img2 } />
            </div>
            <div>
              <img src= { img3 } />
            </div>
            <div>
              <img src= { img4 } />
            </div>
          </Carousel>
          {loading ? (
          <LoadingBox /> 
          ) : error ? (
          <MessageBox variant="danger">{ error }</MessageBox> 
          ) : ( 
          <div className="row center">
          {
            products.map(product => (
              <Product product={ product } />
            ))
          }
          </div>
          )}

        </div>
    )
}