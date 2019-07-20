import React, { Component } from "react";
import ItemList from "./itemList";
import axios from "axios";

class BucketPage extends Component {
  constructor(props) {
    super(props);
    // this.id = this.props.match.params.id;
    // this.state = {
    //   bucketList: this.props.bucketList,
    //   isOwner: true,
    //   isLoggedIn: true,
    //   itemTitle: ``,
    //   itemText: ``
    // };
  }

  // componentDidMount() {
  //   console.log(this.props.match)
  //   axios.get(
  //     `https://bucketlist-builds.herokuapp.com/users/${this.id}/bucketlist`
  //   ).then(res => {

  //     console.log('this is the data', res.data)
  //     this.setState({ bucketList: [...res.data]})
  //   })
  //     .catch(err => console.log('this is the error', err))

  // }

  render() {
    return (
      <ItemList
        bucketList={this.props.bucketList}
        bucketListID={this.props.bucketListID}
        // completionToggle={this.props.completionToggle}
        // isOwner={this.state.isOwner}
        // goBackID={this.props.goBackID}
        // passedDownID={this.id}
      />
    );
  }
}

export default BucketPage;
