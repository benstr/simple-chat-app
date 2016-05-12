import React from 'react';
import { Meteor } from 'meteor/meteor';
import ChatBox from './ChatBox.jsx';
import ChatForm from './ChatForm.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id="wrapper">
      <ChatBox chats={this.props.chats}/>
      <ChatForm/>
    </div>
    );
  }
}
