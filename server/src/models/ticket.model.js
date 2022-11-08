const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    completeName: String,
    curp: String,
    name: String,
    paternal: String,
    maternal: String,
    phone: String,
    cel: String,
    email: String,
    level: String,
    municipality: String,
    subject: String,
    age: String,
  })
);

module.exports = Ticket;
