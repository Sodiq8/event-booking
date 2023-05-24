const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
    eventId: {
    type: Number 
    },
    eventName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
      eventDate: {
        type: Date,
        required: true
      },
      capacity: {
        type: Number,
        required: true
      },
      currentBookings: {
        type: Number,
        default: 0
      },
      price: Number
    });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;