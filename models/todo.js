const mongoose = require('mongoose');
const { Schema } = mongoose;

//const todoSchema = mongoose.Schema({
    const todoSchema = new Schema({
    text: String,
    time: {type: String,
        enum: ['day', 'week', 'month'],
       // default: 'month'
    },
    isCompleted : {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', todoSchema);

