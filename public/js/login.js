
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginBtn = $("#loginBtn");
  var contactBtn = $("#contactBtn");
  var userInput = $("#username");
  var passwordInput = $("#password");
  var subject = $("#subject");
  var message = $("#message");
  var contact = $("#contact");

  // When the form is submitted, we validate there's an email and password entered
  loginBtn.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: userInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      $("#errorMsg").text("Please check the fields and try again.");
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    userInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  };

  contactBtn.on("click", function(event){
    event.preventDefault();
    var newMessage = {
      subject: subject.val().trim(),
      message: message.val().trim(),
      contact: contact.val().trim()
    }

    if(!newMessage.subject || !newMessage.message){
      $("#emailHelp").text("Please check the fields and try again.");
      return;
    }

    sendContact(newMessage.subject, newMessage.message, newMessage.contact);
    subject.val("");
    message.val("");
    contact.val("");
    $("#contactMsg").text("Thank you, one of our customer representatives will be in touch with you shortly.");
  });

  function sendContact (subject, message, contact) {
    $.post("/api/contact",{
      subject: subject,
      message: message,
      contact: contact
    }).then(function(data){
      window.location.replace(data);
    }).catch(function(err){
      console.log(err);
    });
  }

});
