import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from './App.jsx';
import { Chats } from './api/chats';

export default createContainer(() => {
  Meteor.subscribe('latestChats');
  return {
    chats: Chats.find({},{sort:{ createdAt: 1 }}).fetch()
  };
}, App);