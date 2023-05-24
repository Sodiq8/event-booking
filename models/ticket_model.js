const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    },
    ticketQuantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be less than 1"],
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
        min: [1, "Total price cannot be less than 1"],
    },
})