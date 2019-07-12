import React from 'react';
import ItemList from './itemList';

const BucketPage = (props) => {
  return ( <ItemList bucketList={props.bucketList} /> );
}
 
export default BucketPage;