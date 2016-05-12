import React from 'react';
import { Meteor } from 'meteor/meteor';
import { insert } from './api/chats.js';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.createNewChat = this.createNewChat.bind(this);
  }

  createNewChat(e) {
    e.preventDefault();
    const chat = this.refs.chatText;

    if (chat.value.trim()) {
      insert.call({ chat: chat.value });
      chat.value = '';
    }
  }

  render() {
    return (
      <form name="chat-form" onSubmit={this.createNewChat} autoComplete="off">
        <input name="chat-input" ref="chatText" type="text" id="chat-input" placeholder="type message..."/>
      </form>
    );
  }
}