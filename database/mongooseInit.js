const mongoose = require('mongoose');
const { postSchema } = require('../modals/schema');
const dotenv=require('dotenv');
dotenv.config();
const MongoUrl = process.env.DATABASE_URL;

mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection established with mongodb server online");
    })
    .catch(err => {
        console.log("error while connection", err)
    });
let Posts = mongoose.model('Post', postSchema);
module.exports = { Posts };