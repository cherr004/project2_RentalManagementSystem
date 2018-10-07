var user = "";


$.get("/api/userData").then(function(data) {
  console.log(data);
  user = data.email;
  $("#loginID").text("Logged in as: " + data.email);
});

$(document).ready(function() {

  //Contact for Modal Support.

  var contactBtn = $("#contactBtn");
  var subject = $("#subject");
  var message = $("#message");
  var contact = $("#contact");

  contactBtn.on("click", function(event) {
    event.preventDefault();
    var newMessage = {
      subject: subject.val().trim(),
      message: message.val().trim(),
      contact: contact.val().trim()
    }
    if (!newMessage.subject || !newMessage.message) {
      $("#contactMsg").addClass("text-danger");
      $("#contactMsg").text("Please check the fields and try again.");
      return;
    }
    sendContact(newMessage.subject, newMessage.message, newMessage.contact);
    subject.val("");
    message.val("");
    contact.val("");
    $("#contactMsg").addClass("text-success");
    $("#contactMsg").text("Thank you, one of our customer representatives will be in touch with you shortly.");
  });

  function sendContact(subject, message, contact) {
    $.post("/api/contact", {
      subject: subject,
      message: message,
      contact: contact,
      user: user
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  };

});
