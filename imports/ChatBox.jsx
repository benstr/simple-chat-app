import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    const { chats } = this.props;
    return (
      <div id="chatbox">
        {chats.length
          ? chats.map((chat, index) => (
              <div key={chat._id} className='msg-ln'>
                <span className="msg-chat" style={index%2
                  ? {color: '#F48E55'}
                  : {color: '#98CB98'}
                }>{chat.chat}</span>
                <span className="msg-time">{chat.createdAt.toLocaleTimeString()}</span>
              </div>
            ))
          : <div className='msg-ln' style={{color: '#F48E55'}}>NO MESSAGES YET!</div>
        }
      </div>
    );
  }
}