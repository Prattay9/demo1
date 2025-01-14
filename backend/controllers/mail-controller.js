const nodemailer = require('nodemailer');
require("../media/userSchema");


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


const sendMail = async (req, res) => {

  const { name, contact, email } = req.body;
  console.log( name, contact, email );
    
    res.send("Hello from server");

    const info = await transporter.sendMail({
      from: '"IBP Excellence Academy" <sapibp254@gmail.com>', // sender address
      to: "prattaydas9@gmail.com", // list of receivers
      subject: "New User Registered", // Subject line
      text: "Hello world?", // plain text body
      html: `
          <ul>
              <li>Username: ${name}</li>
              <li>Contact No: ${contact}</li>
              <li>Email id: ${email}</li>
          </ul>
      `,// html body
    });
  
    console.log("Message sent: %s", info.messageId);

};

module.exports = { sendMail };