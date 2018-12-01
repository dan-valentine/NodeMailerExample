require('dotenv').config();
const nodemailer = require('nodemailer');
const {GMAIL_USERNAME, GMAIL_PASSWORD} = process.env;


// create reusable transporter object using the default SMTP transport
const URI = `smtps://${GMAIL_USERNAME}%40gmail.com:${GMAIL_PASSWORD}@smtp.gmail.com`;
// console.log(URI)
const transporter = nodemailer.createTransport(URI);

// setup e-mail data with unicode symbols
const defaultMailOptions = {
    from: `${GMAIL_USERNAME}@gmail.com`, // sender address
    to: `${GMAIL_USERNAME}@gmail.com`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>', // html body
};


module.exports = {

    send: (req, res, next) => {
        
        // overwrite the default with the user preferences
        const mailOptions = { ...defaultMailOptions, ...(req.body || {})};
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            };
            res.send('Message sent: ' +JSON.stringify(mailOptions));
        });
    }
}