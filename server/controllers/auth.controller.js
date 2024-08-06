import User from "../models/user.model.js";

export const signup = async (req, res) =>{
    const {username, email, password} = req.body;
    try{
        const newUser = new User({username, email, password})
        await newUser.save(); 
        res.status(200).json({message: "User created successfully"});
    }catch(e){
        console.error(e);
        return res.status(400).json({"Registration failed": e})
    }

}