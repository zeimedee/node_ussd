const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.get('*', (req,res)=>{
    res.send('this is my first USSD app')
});

app.post('*', (req,res) => {
    let {sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';
    
    
    if(text == ''){
        //first request
         
    }
    else if(text == '1'){
        //logic for first level
        response = `END my name is alex`;
    }
    else if(text == '2'){
      response =  `END my phone number is ${phoneNumber}`;
    }
    else{
        response =`CON What will you like to know ? 
        1.my name?
        2.phone number? `;
        // res.status(404).send('END Bad request from user ')
    }

    res.set('Content-Type: text/plain');
    res.send(response);

    
});


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})