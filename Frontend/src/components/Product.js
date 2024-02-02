import React from 'react';
import './Product.css';


function Product({header, image, price}) {
  return (
    <div className="Product">
      <img src={image} />
      <h1>{header}</h1>
      <p>{ `${price}rub` }</p>
      <button>Buy</button>
    </div>
  )
}

export default Product;