const express = require("express");
const app = express();

require("dotenv").config();
const EmailService = require("./emailService");

const emailService = new EmailService(process.env.user, process.env.pass);
emailService.sendMail();

app.listen(80, () => {
    console.log("Server is running");
});