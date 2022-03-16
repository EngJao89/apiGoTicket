const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { ticket_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      ticket: ticket_id,
      date,
    });

    await booking.populate('ticket').populate('user').execPopulate();

    const ownerSocket = req.connectedUsers[booking.ticket.user];

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  }
};