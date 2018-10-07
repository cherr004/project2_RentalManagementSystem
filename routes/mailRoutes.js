var mailgun = require('../config/mailgun');
var key = mailgun.key;
var domain = mailgun.domain;
var contact = mailgun.contact;
var from = mailgun.from;

console.log(mailgun, key, domain);

module.exports = function(app) {

  app.post("/api/contact", function(req, res) {
    var mailgun = require('mailgun-js')({
      apiKey: key,
      domain: domain
    });

    var data = {
      from: from,
      to: contact,
      subject: req.body.subject,
      text: req.body.message + "\n\nContact phone: " + req.body.contact + "\nContact: Email: " + req.body.user
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
    });
  });

  app.post("/api/confirmation", function(req, res) {
    var mailgun = require('mailgun-js')({
      apiKey: key,
      domain: domain
    });
    var body = req.body;
    var data = {
      from: from,
      to: body.email,
      subject: body.subject,
      text: body.message
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
    });
  });

}
