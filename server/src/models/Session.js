const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: String,
  students: [
    {
      _id: { type: mongoose.Schema.ObjectId, ref: "Student" },
      status: {
        type: String,
        enum: ["pass", "fail", "ongoing","absent"],
        default: "ongoing",
      },
    },
  ],
});
