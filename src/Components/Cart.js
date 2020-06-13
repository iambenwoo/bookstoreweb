import React from 'react';

const cart = (props) => {

  let cart = props.cartItems.map((i, index) => {
    if (i === true) {
      return props.searchResults[index].name
    } else {
      return '';
    }
  });

  return <div>{cart}</div>;
}

export default cart;