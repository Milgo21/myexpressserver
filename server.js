const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
    console.log("server started at port 3000");
});
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is " + result);
})
app.get("/",function (req, res) {
   res.sendFile(__dirname + "/index.html"); 
});
app.get("/bmiCalculator",function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html"); 
 });
 app.post("/bmiCalculator", function (req, res) {
    var weight =parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = (weight/(height*height));

    res.send("Your BMI is " + bmi);
})




// app.get("/contact",function (req, res) {
//     res.send("<em> contact me at:felixmilgo21@gmail.com</em>") 
//  });
//  app.get("/about",function (req, res) {
//     res.send("Mimi ni mjukuu wako wee dogo") 
//  });
//  app.get("/hobbies",function (req, res) {
//     res.send("<ul><li>Eating</li><li>Drinking</li><li>Sleeping</li></ul>") 
//  });
