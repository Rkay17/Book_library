import mongoose from 'mongoose';

const { Schema, model} = require ("mongoose");

const bookSchema = new Schema({
title: {
    type: String,
    required: true,
    maxlenght: 20
},


published:{
     type:Boolean,
},
author: {
    type: String,
}
});

const book =model('Book',bookSchema);
module.exports = book;