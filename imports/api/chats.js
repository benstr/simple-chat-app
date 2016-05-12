import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Chats = new Mongo.Collection("Chats");

export const insert = new ValidatedMethod({
  name: 'chats.insert',

  validate: new SimpleSchema({
    username: { type: String, optional: true },
    chat: { type: String },
  }).validator(),

  run(chat) {
    chat.createdAt = new Date;
    console.log("Adding Chat:", chat);
    Chats.insert(chat);
  }
});