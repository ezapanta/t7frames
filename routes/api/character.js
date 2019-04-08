// const express = require('express');
// const router = express.Router();
// const Characters = require('../../character_template');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://t7:frames@t7frames-zvha5.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  if(err){
      console.log(err)
  }
  console.log('connected')
  client.close();
});