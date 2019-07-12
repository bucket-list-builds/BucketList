import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
let isOwner = true
const Item = (props) => {
  return ( 
    <div>
    <Card>
    <CardImg top width="100%" src="../../static/images" alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.listItemTitle}</CardTitle>
      <CardText>{props.listItemText}</CardText>
      <Button onClick={()=> isOwner ? null: null}></Button>
    </CardBody>
  </Card>
</div>
  );
}

export default Item;