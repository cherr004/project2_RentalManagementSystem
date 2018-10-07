var dashboardMenu = $("#dashboardMenu");
var rentalDrop =   $("#rentalDrop");
var clientDrop = $("#clientDrop");
var inventoryDrop = $("#inventoryDrop");

//Updates the title to match the actual page.
$("#title").text("New Client | Rubyk.IO");

//Updates Menu Colors:
dashboardMenu.addClass('btn-outline-secondary');
rentalDrop.addClass('btn-outline-secondary');
clientDrop.addClass('btn-outline-danger');
inventoryDrop.addClass('btn-outline-secondary');


$(document).ready(function() {

  //On click event linked to the submit button.
  $("#newClientSubmit").on("click", function(event) {
    event.preventDefault();

    //Pulling data typed to create Object to post to DB.
    var newClient = {
      name: $("#client_name").val().trim(),
      company: $("#client_company").val().trim(),
      email: $("#client_email").val().trim(),
      phone: $("#client_phone").val().trim(),
      address1: $("#client_address1").val().trim(),
      address2: $("#client_address2").val().trim(),
      city: $("#client_city").val().trim(),
      state: $("#client_state").val().trim(),
      zip: $("#client_zip").val().trim(),
      user: user
    };

    if (!(newClient.name || 
      newClient.company ||
      newClient.email || 
      newClient.phone ||
      newClient.address1 ||
      newClient.address2 ||
      newClient.city ||
      newClient.state ||
      newClient.zip)) {
      alert("You must enter values for all data fields!");
      console.log("Inside if");
      return;
      }

    // send an AJAX POST-request with jQuery
    $.post("/api/clients/new", newClient)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Client Added");
      });


    // Clearing fields.
    $("#client_name").val("");
    $("#client_company").val("");
    $("#client_email").val("");
    $("#client_phone").val("");
    $("#client_address1").val("");
    $("#client_address2").val("");
    $("#client_city").val("");
    $("#client_state").val("");
    $("#client_zip").val("");

  });

});
