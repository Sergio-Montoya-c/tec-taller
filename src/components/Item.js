import React from 'react';

const Item = (props) => {
  const {name, color, image} = props.item;
  return(
    <li>
      <img src={image} width='100' height='100' alt="Fornite item" />
      The item is {name} and is {color} color.
    </li>
  )
}

export default Item;