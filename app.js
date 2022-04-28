var age = require ("./age")
var birth = require ("./birth")

const express = require ("express"); 
const app = express(); 

//query 
app.get ("/", function(req,res){
    res.send("This site calculates a birth day or a age");
})
 
app.get ("/age/", function(req, res){
    var birthYear = req.query["birth"];

    if (birthYear){
        res.send (`You were born in ${birthYear} and you have ${age.calculateAge(birthYear)} years old now`);
    } else {
        res.send (`Please provide your year of birth at the URL`);
    }
})

app.get ("/birth/", function(req, res){
    var age = req.query["age"];

    if (age){
        res.send (`You have ${age} years old and you were born in ${birth.calculateBirth(age)}`);
    } else {
        res.send (`Please provide your age at the URL`);
    }
})

app.listen(4000, function(error){ 
    if (error){
        console.log("Wrong path");
    } else {
        console.log ("Online server");
    }
})