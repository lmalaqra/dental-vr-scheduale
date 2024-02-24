const mongoose = require("mongoose");
const {studentSchema,Student} = require("./Student");
const schedulaeSchema = new mongoose.Schema({
  week: Number,
  start_date:String,
  slots: [
    {
      id: { type: Number, require: true },
      students: [studentSchema],
      full:{type:Boolean,default:false}
    },
  ],
});
module.exports = mongoose.model("Scheduale", schedulaeSchema);
