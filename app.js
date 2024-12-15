const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const mongoose= require('mongoose');

app.use(bodyParser.json());


app.use(cors({
    origin:'*'
}))

const PORT = 3000;


app.get('/', (req,res)=>{
    console.log('This is my first API');



    res.send('This is my first API with updates')


    
});

app.post('/register', (req, res)=>{

    const {name, email, password} = req.body;

    

    console.log(name,email,password);

    res.status(200).json({
        status:200,
        message:"Registered successfully",
        data: {
            name,
            email,
            password
    
        }
    })

    
    
});







app.get('/all-users', (req,res)=>{
    
    res.send('All users API');

    const message = req.body;

    res.status(404).json({
        status: 404,
        message: "Keep Moving Man",
        data:{
            message
        }
        


    })


    
});

mongoose.connect('mongodb://127.0.0.1')




app.listen(PORT, ()=>{
    console.log('App is running on port'+ PORT)
})