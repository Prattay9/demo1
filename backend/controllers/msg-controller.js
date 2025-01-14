const nodemailer = require('nodemailer');
require("../media/contactSchema");


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.comm",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
      user: 'sapibp254@gmail.com',
      pass: 'uapmlwimdinvvkml'
  },
});


const msgMail = async (req, res) => {

  const { email, message } = req.body;
  console.log( email, message );
    
    res.send("Hello from server");

    const info = await transporter.msgMail({
      from: '"IBP Excellence Academy" <sapibp254@gmail.com>', // sender address
      to: "prattaydas9@gmail.com", // list of receivers
      subject: "New User Registered", // Subject line
      text: "Hello world?", // plain text body
      html: `
          <ul>
              <li>Email id: ${email}</li>
              <li>Message: ${message}</li>
              
          </ul>
      `,// html body
    });
  
    console.log("Message sent: %s", info.messageId);

};

module.exports = { msgMail };