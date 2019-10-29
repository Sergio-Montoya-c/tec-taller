import React from 'react';
import Item from './Item';

const ItemsList = (props) => {
  const {items} = props;
  return(
    <div>
      <h2>LISTADO</h2>
      <ul>
        {
          items.map(item => <Item item={item} />)
        }
      </ul>
    </div>
  );
}

export default ItemsList;