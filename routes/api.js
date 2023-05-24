//require express
const express = require('express');
const router = express.Router({ caseSensitive: true });
//require nodemailer for sending email
const nodemailer = require('nodemailer');
//require dotenv for storing sensitive data
const dotenv = require('dotenv');

//load in secret variable
dotenv.config({ vaerbose: true });

//route to send the email
router.post("/email", ((req, res)=>{

    res.send(req.body)

}))

//export rouer
module.exports = router