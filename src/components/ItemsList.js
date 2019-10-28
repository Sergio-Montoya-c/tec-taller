import React from 'react';
import Item from './Item';

const ItemsList = () => {
  const items = [1,2,3,4,5,6,7,8,9,10]
  return(
    <div>
      <h2>LISTADO</h2>
      <ul>
        {
          items.map(item => <Item />)
        }
      </ul>
    </div>
  );
}

export default ItemsList;