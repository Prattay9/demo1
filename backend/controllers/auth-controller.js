const User = require("../media/userSchema");



const home = async(req, res) => {
    try {
        //console.log(req.body);
        const { name, contact, email } = req.body;

        const userExist = await User.findOne({ email })

        if(userExist){
            return res.status(400).json({ msg: "user already exists" })
        }
        const userCreated = await User.create({ name, contact, email });

        res.status(200).send({ msg : userCreated });
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = { home };