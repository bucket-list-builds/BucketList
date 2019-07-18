import React from 'react';
import Item from './item';
import { CardGroup } from 'reactstrap';

const ItemList = props => {
  return (
    <CardGroup className="fader">
      {props.bucketList.map(item => {
        return (
          <span className='faded'><Item
            listItemTitle={item.itemTitle}
            listItemText={item.itemText}
            id={item.id}
            completed={item.completed}
            completionToggle={props.completionToggle}
            isOwner={props.isOwner}
            key={item.id}
          />
          </span>
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
