import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddItemForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.addNewItem}>
        <FormGroup>
          <Label for="itemTitle">Title</Label>
          <Input type="text" name="itemTitle" value={this.props.itemTitle} id="itemTitle" placeholder="Enter a title for your Todo" onChange={this.props.textInputHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="itemText">Describe your bucket list item</Label>
          <Input type="textarea" name="itemText" value={this.props.itemText} id="itemText" onChange={this.props.textInputHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          Upload a photo to describe your bucket list item!
          </FormText>
        </FormGroup>

        <Button onClick={this.props.addNewItem}>Submit</Button>
      </Form>
    );
  }
}