const mongoose = require('mongoose');
const { Schema } = mongoose;

    const todoSchema = new Schema({
        Title: String,
        todoDetails: String,

},

    {
        timestamps: true

    })

module.exports = mongoose.model('Todo', todoSchema);

