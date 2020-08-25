import React from 'react';
import Product from './Product';

const Shop = (props) => {
  return (
    <div>
      <h1>Items</h1>
      <div>
        <Product product={'Crisps'} />

        <button onClick={() => props.addToCart('Crisps')}>Add to Cart</button>
      </div>
      <div>
        <Product product={'Chocolate'} />

        <button onClick={() => props.addToCart('Chocolates')}>
          Add to Cart
        </button>
      </div>
      <div>
        <Product product={'Coke'} />

        <button onClick={() => props.addToCart('Coke')}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Shop;
