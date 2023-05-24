const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    maxlength: [50, "User name cannot be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
    trim: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Email is invalid",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
    maxlength: [300, "Address cannot be more than 100 characters"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    maxlength: [20, "Phone number cannot be more than 20 characters"],
  },
  eventsBooked: [Number],
}, { timestamps: true ,
   toJSON: { virtuals: true },
   toObject: { virtuals: true } 
  });


const User = mongoose.model("User", userSchema);

module.exports = User;