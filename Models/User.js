const mongoose= require('mongoose');
const {model,Schema}= mongoose;

const UserSchema = new Schema ({
    //email w password ma5arjoulich 3lech?
    name : {
        type: String, 
        required:true,
        // unique : true
    },

    email : {
        type: String, 
        required:true
    },

    password :{
        type: String, 
        required:true
    },
    phone : Number,
})

module.exports = User = model("User",UserSchema);


