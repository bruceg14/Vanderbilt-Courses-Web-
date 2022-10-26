const express = require('express');
const courseRouter = require('./routes/courses');

const theCourses = require('./models/course');
const app = express();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/VandyCourses');

app.use(express.urlencoded({extended: false}));


app.set("view engine", "ejs");


app.get('/', (req, res) => {
    const courses = [{
        major: "CS",
        number: "1101",
        CourseName: "Programming and Problem Solving",
        Descriptions: "An intensive introduction to algorithm development and problem solving on the computer. " +
        "Structured problem definition, top down and modular algorithm design. Running, debugging, and testing "
        + "programs. Program documentation."
    },{
        major: "CS",
        number: "1104",
        Descriptions: "Learning python"
    }]
    
    res.render('index', {courses : courses});
})

app.use('/Courses', courseRouter);


app.listen(2000);