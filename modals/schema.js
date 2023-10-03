const { Schema } = require('mongoose');

const postSchema = new Schema({
    title: Schema.Types.String,
    content: Schema.Types.String,
    created_at:{ type: Date, default: Date.now },
    updated_at:{ type: Date, default: Date.now },
    category_id: Schema.Types.Number
  });

module.exports = {postSchema};