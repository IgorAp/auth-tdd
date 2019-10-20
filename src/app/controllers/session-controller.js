const { User } = require('../models');

const store = async (req,res) => {
    const { email,password } = req.body;
    const user = await User.findOne({
        where:{email}
    });
    console.log(user);
    if(!user){
        return res.status(401).json({message:'User not found'});
    }
    if(!(await user.checkPassword(password))){
        return res.status(401).send();
    }
    return res.status(200).json({ user,token:user.generateToken() });
    
}

module.exports = { store }