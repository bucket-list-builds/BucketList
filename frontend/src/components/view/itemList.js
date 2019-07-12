import React from 'react';
import Item from './item';
import { CardGroup } from 'reactstrap';

const ItemList = props => {
  return (
    <CardGroup>
      {props.bucketList.map(item => {
        return (
          <Item
            listItemTitle={item.itemTitle}
            listItemText={item.itemText}
            id={item.id}
            completed={item.completed}
          />
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
