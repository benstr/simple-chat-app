import { Meteor } from 'meteor/meteor';
import { Chats } from './chats.js';

Meteor.publish("latestChats", function (){
  return Chats.find({},{sort:{ createdAt: 1 }});
});