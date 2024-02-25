require("dotenv").config();

require("./config/db").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Scheduale=require('./src/models/Scheduale')
const csv=require('csvtojson');
const {Student}=require('./src/models/Student')
const schedualeRoutes=require('./src/routes/schedualeRoutes');
const studentRoutes=require('./src/routes/studentRoutes');
const path = require('path');



// const cookieParser = require("cookie-parser");

const app = express();
// app.use(express.static("build "));
app.use(express.static("build "));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/scheduale',schedualeRoutes);
app.use('/student',studentRoutes)
app.use((err, req, res, next) => {
  console.log(err)
  res.status(400).send('Something broke!')
})


app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build ", "index.html"));
});

// app.get('/',async(req,res)=>{
//   const schedualWeek = {
//   week: 2,
//   slots: [],
//   start_date:"2024-03-03"
// };

// for (var i = 0; i <= 30; i++) {
//   schedualWeek.slots.push({
//     id: i,
//     students: [],
//   });
// }
// try{  
// await Scheduale.create({...schedualWeek});
// res.send('sucess')
// }catch(e){
//   console.log(e);
// }

// })


// try{
//   const jsonArray=await csv().fromFile('./students.csv');
//   jsonArray.forEach(async(e)=>{
//     await Student.create({...e});

//   })
//   res.send('success');
// }catch(e){
//   console.log(e);
// }



// app.use(cookieParser());

module.exports = app;