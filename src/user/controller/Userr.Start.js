import { UserModel } from "../../../DB/models/user.model.js"
import bcrypt from "bcrypt";



export const Signup = async(req,res,next)=>{
    try{ 
        const {email,firstName,lastName,userName,password,gender} =req.body

    if(await UserModel.findOne({email})){
      return res.send('Email Already exists')
    }
   const newpassword =  bcrypt.hashSync(password, parseInt(7));

    const useracc = await UserModel.create({email,firstName,lastName,userName,password : newpassword,gender}) ; 
    res.json(useracc);   
}catch(err){
    return res.json(err.stack)
}
}

export const Login = async(req , res,next)=>{

    const {email , password}= req.body;
    const usr = await UserModel.findOne({email});
    if(!usr){
        res.send("User Doesn't exist");
    }
   const Hashchk = await  bcrypt.compare(password, usr.password);
if(Hashchk == false ){
    return res.send('Password is incorrect');
}
   res.json({
    _id : usr._id
    ,
    firstName : usr.firstName
    ,
    lastName : usr.lastName,
    userName : usr.userName,
    email : usr.email
   })
}