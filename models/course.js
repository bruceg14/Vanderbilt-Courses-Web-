const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Major:{
        type: String,
        required: true
    }, 
    CourseNumber:{
        type: Number,
        required: true
    },
    CourseName:{
        type:String,
        Required: true
    }, 
    Description:{
        type: String
    }

})

module.exports = mongoose.model('courses', courseSchema);