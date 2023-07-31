const express= require ("express")
const app = express()
app.use(express.json())

// require env et config 
require("dotenv").config();
// connecter avec la data base en appelant avec requirele fichier connectDB
const connectDB = require("./config/connectDB");

connectDB();
// ensuite la création du port
const PORT=process.env.PORT


app.use('/api/contact',require('./Routes/Contact'));
app.use('/api/user',require('./Routes/User'));

// la création du serveur
app.listen(PORT,error=>{
    error ? console.error(`fail to connect ,${error}`) :
    console.log(`server is running on port ${PORT}`)
})

