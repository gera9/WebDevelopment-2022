const config = require("../config/auth.config");
const db = require("../models");
const Ticket = db.ticket;

exports.create = (req, res) => {
  const ticket = new Ticket({
    completeName: req.body.completeName,
    curp: req.body.curp,
    name: req.body.name,
    paternal: req.body.paternal,
    maternal: req.body.maternal,
    phone: req.body.phone,
    cel: req.body.cel,
    email: req.body.email,
    level: req.body.level,
    municipality: req.body.municipality,
    subject: req.body.subject,
    age: req.body.age,
  });

  ticket.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Ticket was registered successfully!" });
  });
};

exports.search = (req, res) => {
  db.ticket.findOne({ curp: req.body.curp }, (err, docs) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(docs);
  });
};

exports.update = (req, res) => {
  db.ticket.updateOne(req.body, (err, docs) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(docs);
  });
};
