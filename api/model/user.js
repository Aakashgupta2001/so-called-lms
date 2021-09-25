const mongoose = require("mongoose");
Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "Login is required",
    unique: true,
  },
  password: {
    type: String,
    required: "password is required,",
  },
  name: {
    type: String,
    required: true,
  },
  phone: String,
  displayName: {
    type: String,
    required: `Display Name is required`,
  },
  batch: {
    type: String,
    required: "Batch is required",
  },
  roles: {
    type: String,
    default: "user",
    enum: ["admin", "user"],
  },
});

module.exports = mongoose.model("users", userSchema);
