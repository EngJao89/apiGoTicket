const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  event: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true,
  },
});

TicketSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('ticket', TicketSchema);