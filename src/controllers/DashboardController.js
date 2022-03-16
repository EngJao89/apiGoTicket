const Ticket = require('../models/Ticket');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const tickets = await Ticket.find({ user: user_id });

    return res.json(tickets);
  }
}