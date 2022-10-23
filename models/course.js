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
    // Upvote:{
    //     type: Number,
    //     default: 0
    // },
    // Downvote:{
    //     type: Number,
    //     default: 0
    // }

})

module.exports = mongoose.model('courses', courseSchema);