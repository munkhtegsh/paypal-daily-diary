import React from 'react';
import Item from './Item';

export default ({list}) => {
  let items = list.map(item => <Item key={item.id} title={item} />
  )
  return (
    <div>
      Search Result
      {items}
    </div>
  )
}