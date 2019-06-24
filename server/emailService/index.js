const nodemailer = require("nodemailer");

module.exports = (() => {
    const defaultOptions = {
        from: `"Test test" <${process.env.user}>`,
        to: process.env.to,
        subject: 'Hello ✔',
        text: 'Hello world ?',
        html: '<b>Hello world ?</b>'
    };
    let transporter = null;
    return class EmailService {
        constructor(user, pass, service = "gmail") {
            if(!user || !pass) throw new Error("User and password are required");
            transporter = nodemailer.createTransport({
                service,
                auth: {
                    user,
                    pass
                }
            });
        }

        sendMail(options = defaultOptions){
            if(transporter){
                transporter.sendMail(options, function (error, info) {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                });
            }
        }
    }
})();