const Contact = require("../media/contactSchema");

const contactForm = async (req,res) => {
    try {
        //console.log(req.body);
        const { email, message } = req.body;
        const userCreated = await Contact.create({ email, message });

        res.status(200).send({ msg : userCreated });
        console.log(req.body);
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = { contactForm };