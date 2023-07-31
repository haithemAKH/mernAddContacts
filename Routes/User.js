const express = require('express');
const {register,login}=require('../controllers/User');
const {registerValidation, validation,loginValidation} = require('../middleware/validator');
const isAuth =require('../middleware/isAuth');


const router = express.Router()

router.post('/register',register)

router.post('/login',loginValidation(),validation,login)

router.get('/current',isAuth,(req,res)=>{
    res.send(req.user)
})


module.exports = router