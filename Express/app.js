const express = require ("express")
const path=require("path")
const fs =require("fs")
const bodyparser = require("body-parser"); // Corrected to 'body-parser'
const app  = express();
const port = 8000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

// moongose schema
const contactSchema = new mongoose.Schema({
    name: String, 
    phone: String,
    address:String,
    email:String,
    desc:String,
  });
  
 // Create a model named "contactkitty" based on the kittySchema
 const Contact = mongoose.model("contactkitty", contactSchema); // Corrected to contactSchema

// app.js
// console.log("Hello, Node.js!");

// Express specific stuff
app.use("/static", express.static("static"))
// form ka data express tak lanay k liye yeh middleware hai help krta hai
app.use(express.urlencoded())

// pug specific stuff
// engine pug use krna chatay hai
app.set('view engine', 'pug')
// pug file dir 
app.set("views", path.join(__dirname, "views"));
// Endpoints

app.get("/", (req,res)=>{
  const params = { }
    res.status(200).render('home.pug',params);
});

app.get("/contact", (req,res)=>{
    const params = { }
      res.status(200).render('contact.pug',params);
  });

app.post("/contact", (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this is stored in db")

    }).catch(()=>{
        res.status(400).send("item not saveed to db");

    })
});






//  pug form  Endpoints
// app.get("/", (req,res)=>{
//     const con ="hello connection"
//     const params = {"title":"pubg game", "content":con}
//     res.status(200).render("index.pug", params)
// })

// app.post("/",(req,res)=>{
//     name = req.body.name
//     age = req.body.age
//     gender= req.body.gender
//     address = req.body. address
//     more = req.body.more
    
//     let outputTowrite = "the name of client is ${name} , ${age} ,years old , ${gender},residing at ${address} More about him/her: ${more}"
//     // fs.writeFileSync("output.txt"path  phir data leta haileta hai, outputTowrite )
//     fs.writeFileSync("output.txt", outputTowrite)
//     const params = {"messages":"form submitted"}
//  res.status(200).render("index.pug",params)
 
// })

// our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render("demo",{title:"hey amal", message:"helo amlilsuda"})
})

app.get("/", (req,res)=>{
    res.status(200).send("this is my first express app")
});
// app.get("/about", (req,res)=>{
//     res.status(200).send("this is my first about app")
// });
// app.post("/about", (req,res)=>{
//     res.send("this is my first about app")
// });
// app.get("/about", (req,res)=>{
//     res.status(400).send("this is my first about app")
// })
// start the server
app.listen(8000, () => {
  console.log('Server running on port 8000');
});


// // cd Express
// // node app.js

// // cd Express
// // nodemon app.js













