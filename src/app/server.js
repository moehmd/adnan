var nodemailer = require('nodemailer');
var express = require('express');
var cors = require('cors');
var smtpTransport = require('nodemailer-smtp-transport');

const app = express();
const port = 3000;
var contact_form = '';

// Configuring body parser middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/sendemail', (req, res) => {
    contact_form = req.body;
    console.log(contact_form)
    res.send('Done.')

    var transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'contact.smartphonedoc@gmail.com',
            pass: 'smartphonedocpass'
        }
    }));

    var mailOptions = {
        from: 'contact.smartphonedoc@gmail.com',
        to: 'hilfe@smartphonedoc-elmshorn.de',
        subject: 'Contact us form',
        text: "Name des Kunden:  " + contact_form.name +
            "\n" +
            "\n" +
            "Telefonnummer des Kunden:  " + contact_form.phone +
            "\n" +
            "\n" +
            "E-Mail des Kunden:  " + contact_form.email +
            "\n" +
            "\n" +
            "Kundennachricht:  " + contact_form.comments
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