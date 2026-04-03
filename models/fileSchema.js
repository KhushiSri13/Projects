const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  name: String,
  path: String, 
  size: Number,
  type: String,
  isFolder: {
    type: Boolean,
    default: false
  },
  parentFolder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports=mongoose.model("file", fileSchema);