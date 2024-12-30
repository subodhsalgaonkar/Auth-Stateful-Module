import User from '../models/user.js';
import bcrypt from 'bcrypt';

const saltrounds = 10;

export async function handleSignup(req,res){
    const {name,email,password} = req.body;
    
    const hashedpassword = await bcrypt.hash(password,saltrounds);
    console.log(hashedpassword);
    
    try{
        await User.insertMany({
            name,
            email,
            password:hashedpassword
        })
        res.status(200).json({message:"Signup Sucessful"})
    }catch(e){
        res.status(500).json({message:`${e}`})
    }
}

export async function handleLogin(req,res){
    const {email,password} = req.body;
    
    // console.log(await bcrypt.compare(password, hashedpassword));
    try{
        const user = await User.findOne({email});
        if(!user){
            res.status(500).json({message:"User does not exist"})
        }
        else{
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                res.status(200).json({message:"Login successful"})
            }else{
               res.status(500).json({message:"Invalid credentials"}); 
            }
        }
    }catch(e){
        res.status(400).json({message:`Cannot reach database ${e}`})
    }
}