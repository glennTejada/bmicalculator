const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const bmiRouter = require('./routes/bmi.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/bmi', bmiRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});