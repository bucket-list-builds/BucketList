import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
let isOwner = true


class Item extends Component {
constructor(props) {
  super(props);
  this.state = {
    id: null
  }
}

componentDidMount() {
  console.log('item props', this.props.passedDownID)
  this.setState({id: this.props.passedDownID})
}

passBackID = () => {
  this.props.goBackID(this.state.id)
}
  render() {
  return ( 

    <div>
    <Card>
    <CardImg top width="100%" src="../../static/images" alt="Card image cap" />
    <CardBody>
      <CardTitle>{this.props.listItemTitle}</CardTitle>
      <CardText>{this.props.listItemText}</CardText>
      <Button onClick={(event)=> isOwner ? this.props.completionToggle(event) : null} data-key={this.props.id}>{this.props.completed ? 'Complete' : 'Incomplete'}</Button>
    </CardBody>
  </Card>
</div>
  );}
}

export default Item;