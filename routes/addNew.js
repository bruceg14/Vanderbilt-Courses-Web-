const express = require('express');
const Course = require('../models/course');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("addNew.ejs", {course : new Course()});
})

router.get('/:id', (req, res) =>{
    res.render("submit.ejs", {id : req.params.id});
})


router.post('/', async (req, res) =>{
    let course = new Course({
        major: req.body.major,
        courseNumber: req.body.courseNumber,
        courseName : req.body.courseName,
        description: req.body.description
    })
   
    try{
        course = await course.save();
        res.redirect(`/addNew/${course.courseNumber}`);
    } catch(e){
        res.render('addNew.ejs' , {course : course});
    }


})

module.exports = router;