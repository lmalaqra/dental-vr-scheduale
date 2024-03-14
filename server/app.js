require("dotenv").config();

require("./config/db").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Scheduale = require("./src/models/Scheduale");
const csv = require("csvtojson");
const { Student } = require("./src/models/Student");
const schedualeRoutes = require("./src/routes/schedualeRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
const path = require("path");

// const cookieParser = require("cookie-parser");

const app = express();
// app.use(express.static("build "));
app.use(express.static(path.resolve(__dirname,"../app/vr-schedual/build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/scheduale", schedualeRoutes);
app.use("/api/student", studentRoutes);


app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send("Something broke!");
});
app.get("/create", async (req, res) => {
  console.log("im here");
  const schedualWeek = {
    week: 1,
    slots: [],
    start_date: "2024-03-17",
  };

  for (var i = 0; i <= 30; i++) {
    schedualWeek.slots.push({
      id: i,
      students: [],
    });
  }
  try {
    await Scheduale.create({ ...schedualWeek });
    res.send("sucess");
  } catch (e) {
    console.log(e);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../app/vr-schedual/build/index.html" ));
});





// try{
//   const jsonArray=await csv().fromFile('./students.csv');
//   jsonArray.forEach(async(e)=>{
//     await Student.create({...e});

//   })
//   res.send('success');
// }catch(e){
//   console.log(e);
// }

module.exports = app;
