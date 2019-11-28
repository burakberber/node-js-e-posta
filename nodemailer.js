var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR-Gmail-name@gmail.com',
    pass: 'YourPassword'
  }
});

var mailSettings = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Node.js-EmailOrnegi-EmailExample',
  text: 'sendmeSomewhere-gonderBeni!'
};

transporter.sendMail(mailSettings, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email gonderildi-SENT: ' + info.response);
  }
});