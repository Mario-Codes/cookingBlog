const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    image: {
        type: String,
        required: 'This field is required'
    },
});

module.exports = mongoose.model('Category', CategorySchema);