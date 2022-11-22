const express = require('express');
const addNew = require('./routes/addNew');
const mongoose = require('mongoose');
const app = express();
const Courses = require('./models/course');

mongoose.connect('mongodb+srv://G1:Bruceguo1234@atlascluster.pm6jtw8.mongodb.net/?retryWrites=true&w=majority');
app.use(express.urlencoded({extended : false}));


app.use('/addNew', addNew);

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const courses = await Courses.find().sort({ courseNumber: 'desc' });
    res.render('index.ejs', {courses : courses});
})




app.listen(3000);

