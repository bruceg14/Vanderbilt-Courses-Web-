const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    major:{
        type: String,
        Required: true
    },
    courseNumber:{
        type: String,
        Required: true
    }, 
    courseName:{
        type: String,
        Required:true
    }, 
    description:{
        type: String,
        Required: false
    }

})

module.exports = mongoose.model('Course', courseSchema);