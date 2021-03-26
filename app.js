const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());



app.get('*', (req,res)=>{
    res.send('this is my first USSD app')
});

app.post('*', (req,res) => {
    let {sessionId, serviceCode, phoneNumber, text } = req.body;
    res.set('Content-Type: text/plain');
    
    if(text == ''){
        //first request
      let response =`CON What will you like to know ? 
        1.my name?
        2.phone number? `;
        res.send(response);
    }
    else if(text == '1'){
        //logic for first level
       let response = `END my name is alex`;
        res.status(200).send(response);
    }
    else if(text == '2'){
        let response =  `END my phone number is ${phoneNumber}`;
        res.status(200).send(response);
    }
    else{
        res.status(404).send('END Bad request from user ')
    }
   
});


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})