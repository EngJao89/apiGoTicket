const User = require('../models/User');
const Ticket = require('../models/Ticket');

module.exports = {
  async index(req, res) {
    const { event } = req.query;

    const tickets = await Ticket.find({ events: event });

    return res.json(tickets);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { events, description, date, price, genre } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const ticket = await Ticket.create({
      user: user_id,
      thumbnail: filename,
      event: events.split(',').map(event => event.trim()),
      description,
      date,
      price,
      genre
    })

    return res.json(ticket)
  }
};