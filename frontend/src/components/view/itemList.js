import React from 'react';
import Item from './item';
import { CardGroup } from 'reactstrap';


const ItemList = props => {
  return (
    <CardGroup className="fader">
      {props.bucketListID.map(item => {
        return (
          <span className='faded'><Item
            listItemTitle={item.title}
            listItemText={item.description}
            id={item.id}
            completed={item.completed}
            jEntry={item.journal_entry}
            photo={item.photo}
            completionToggle={props.completionToggle}
            isOwner={props.isOwner}
            key={item.id}
            goBackID={props.goBackID}
            passedDownID={props.passedDownID}
          />
          </span>
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
