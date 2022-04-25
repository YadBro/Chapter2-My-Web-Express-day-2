import express from 'express';
import {
    fileURLToPath
} from 'url';
import {
    dirname
} from 'path';
import hbs from "hbs";
import path from 'path';
import bodyParser from "body-parser";
import moment from 'moment';

// const express = require('express');


const __filename = fileURLToPath(
    import.meta.url);
// Result dari __filename = C:\Users\yadi\Documents\Javascript\NodeJs\index.mjs

const __dirname = dirname(__filename);
// Result dari __dirname = C:\Users\yadi\Documents\Javascript\NodeJs\

const app = express();


// Atur template engine
app.set('view engine', 'hbs');

//  Gunakan static folder
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
})
);

// Register partials to handlebars
hbs.registerPartials(path.join(__dirname, '/views/partials'));
// Result dari path.join(__dirname, '/views/partials') = C:\Users\yadi\Documents\Javascript\NodeJs\views\partials


// Register own helper to hbs
hbs.registerHelper('isTrue', function (con, title) {
    return con === title; 
});



app.get('/', function (req, res) {
    res.render('index', {
        title: "Home"
    });
});


app.get('/contact', function (req, res) {
    res.render('contact', {
        title: "Contact"
    });
});

app.get('/project', function (req, res) {
    res.render('project', {
        title: "Project"
    });
});

// app.post('/')

app.post('/project', function (req, res){
    let startDate = moment(req.body.inputStartDate);
    let endDate = moment(req.body.inputEndDate);
    const day = endDate.diff(startDate, "day");
    const month = endDate.diff(startDate, "month");
    const year = endDate.diff(startDate, "year");

    const data = {
        date        : {day, month, year},
        formInput   : req.body
    }

    console.log(data);
});

const port = 5000;
app.listen(port, function () {
    console.log(`Server running on port : ${port}`);
});