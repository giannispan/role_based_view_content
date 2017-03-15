var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocsSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    text: String,
    __userDepartment: {
        type: String,
        ref: 'User'
    }
});

module.exports = mongoose.model('Docs', DocsSchema);