const express = require("express");
const router = express.Router();
const theCourse = require('../models/course')


router.get('/addNew', (req, res) => {
    res.render('addNew')
})



router.post('/',  async(req, res) =>{
    let course = new theCourse({
        Major: req.body.Major,
        CourseNumber: req.body.CourseNumber,
        CourseName: req.body.CourseName,
        Description: req.body.Description
    })
    try{
        await course.save();
    } catch(e){
        console.warn(e);
    }
})


module.exports = router;