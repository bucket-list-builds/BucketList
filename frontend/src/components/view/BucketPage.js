import React from 'react';
import ItemList from './itemList';

const BucketPage = (props) => {
  return ( <ItemList bucketList={props.bucketList} completionToggle={props.completionToggle}  isOwner={props.isOwner}/> );
}
 
export default BucketPage;