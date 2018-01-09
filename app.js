
var express = require ("express");
var twilio = require('twilio');

const app = express()
var port = process.env.PORT || 5000;

app.get('/wala', (req, res) =>{ 
res.send('Hello world')
});


app.get('/webhook',(req,res)=>{
    res.send("development inprogress");
    sendSms();


})

app.listen(port, (req,res)=>{
    console.log("server is listening at 5000");
});



function sendSms(){
    console.log("inside sms module");
    var accountSid = 'AC7309f852b24005e03836f55c4f183edd'; // Your Account SID from www.twilio.com/console
    var authToken = 'a90ae80b0a419b5db66674e9cad39910';   // Your Auth Token from www.twilio.com/console
    var msg="Onetime password (OTP) for your TPIN request over google assitant is 546700. this is usable once & valid for 15 mins from the request.PLEASE DO NOT SHARE WITH ANYONE."

    var client = new twilio(accountSid,authToken);

    client.messages.create({
        body: msg,
        to: '+918825419756',  // Text this number
        from: '+18312564171' // From a valid Twilio number
    })
    .then((message) => 
        console.log(message.sid,message.status));
}




