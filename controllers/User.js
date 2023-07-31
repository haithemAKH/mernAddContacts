const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// fonction de la REGISTER 
 exports.register = async(req,res)=>{
    console.log(req.body)
    try{
        const {name,email,password,phone}=req.body;
        const foundUser = await User.findOne({email})//findOne ma5arajhelich pour quoi?!!!!
        console.log(foundUser)
        if(foundUser){
            return res.status(200).send({errors:[{msg :"email deja utiliser"}]})
        }
        const saltRounds = 10 ;
        const hashedPassword=await bcrypt.hash(password,saltRounds)
        const newUser = new User({...req.body})
        newUser.password=hashedPassword
        //etape pour le "save"
        await newUser.save()
        //etape pour la generation du "TOKEN"
        const token = jwt.sign(

            {id:newUser._id},
            process.env.SECRET_KEY,
            {expiresIn:"24hours"}
            )

        res.status(200).send({success :[{msg:"inscription avec succes"}],User:newUser,token})
    }catch(error){
        res.status(400).send({errors:[{msg:"inscription non reussi"}]})
    }
 }
 
 
 exports.login = async(req,res)=>{
    try{
        const {email , password}=req.body
        //vérification de l email de l 'utilisateur
        const foundUser= await User.findOne({email});//kel 3ada findone ma5arjetch
        if(!foundUser){
            return res.status(400).send({errors:[{msg:"utilisateur non trouver"}]})
        }
        const checkPassword =await bcrypt.compare(password,foundUser.password)
        if(!checkPassword){
            return res.status(400).send({errors:[{msg:"verifier votre mot de passe!!!!"}]})
        }
        const token =jwt.sign(
            {id:foundUser._id},
        process.env.SECRET_KEY,
        {expiresIn:"24hours"}
        )
        
        res.status(200).send({success :[{msg:"welcome back"}],User:foundUser,token})
    }catch (error){
        res.status(400).send({error:[{msg:"impossible de trouver l'utilisateur"}]})
    }
 }
