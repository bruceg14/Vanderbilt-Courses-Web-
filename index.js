const express = require('express');
const courseRouter = require('./routes/courses');

const theCourses = require('./models/course');
const app = express();
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://G1:Bruceguo1234@atlascluster.pm6jtw8.mongodb.net/?retryWrites=true&w=majority');


app.get('/', (req, res) => {
    //These are two courses to demonstrate the website. Input the database as a loop here when the connection is fixed.
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