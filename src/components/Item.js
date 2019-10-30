import React from 'react';
import Star from './Star';

const Item = (props) => {
  const {item} = props.item;
  const {name} = item;
  const {icon} = item.images;
  const {avgStars} = item.ratings;
  return(
    <li className="fortnite-item">
      <img src={icon} width='100' height='100' alt="Fornite item" className='item-image' />
      <div className="description">
        The item is {name}
        <div>
          <strong>
            Rating: <strong>{avgStars}</strong>
            {
              [...Array(parseInt(avgStars)).keys()].map(() => <Star />)
            }
          </strong>
        </div>
      </div>
    </li>
  )
}

export default Item;