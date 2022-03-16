const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  approved: { type: Boolean, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  }
});

module.exports = mongoose.model('booking', BookingSchema);