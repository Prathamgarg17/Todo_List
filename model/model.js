const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  desc: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todoData", dataSchema);
