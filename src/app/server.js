var nodemailer = require('nodemailer');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var smtpTransport = require('nodemailer-smtp-transport');

const app = express();
const port = 3000;

app.use(cors());
var contact_form = '';
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sendemail', (req, res) => {
    contact_form = req.body;
    console.log(contact_form)
    res.send('Done.')


    var transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'Sicherheitsservice.MO@gmail.com',
            pass: 'mo.arkan'
        }
    }));

    var mailOptions = {
        from: 'Sicherheitsservice.MO@gmail.com',
        to: 'info@mundo.de',
        subject: 'Contact us form',
        text: "Client's name: " + contact_form.name + "\n" + "Client's Email: " + contact_form.email + "\n" + "Client's Message: " + contact_form.comments
    };

    transport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));