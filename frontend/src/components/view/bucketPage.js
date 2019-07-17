import React, { Component } from 'react';
import ItemList from './itemList';
import axios from 'axios';

class BucketPage extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.id;
    this.state = {
      bucketList: [
        { itemTitle: 'Test', itemText: 'Test Data', id: 100100, completed: false },
        {
          itemTitle: 'Test Next',
          itemText: 'Test Data Next',
          id: 999,
          completed: true
        }
      ],
      isOwner: true,
      isLoggedIn: true,
      itemTitle: ``,
      itemText: ``
    };
  }
  componentDidMount() {
    axios.get(
      `https://bucketlist-builds.herokuapp.com/home/1`
    ).then(res => {
      this.setState({ bucketList: [...res.data, this.state.bucketList]})
    console.log('this is the data', res.data)
    })
      .catch(err => console.log('this is the error', ''))
  }

  render() {
    return (
      <ItemList
        bucketList={this.state.bucketList}
        completionToggle={this.props.completionToggle}
        isOwner={this.state.isOwner}
      />
    );
  }
}

export default BucketPage;
