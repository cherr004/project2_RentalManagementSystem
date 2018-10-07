var dashboardMenu = $("#dashboardMenu");
var rentalDrop =   $("#rentalDrop");
var clientDrop = $("#clientDrop");
var inventoryDrop = $("#inventoryDrop");
var rentalNew = $("#rentalNew");

//Updates the title to match the actual page.
$("#title").text("New Product | Rubyk.IO");

//Updates Menu Colors:
dashboardMenu.addClass('btn-outline-secondary');
rentalDrop.addClass('btn-outline-secondary');
clientDrop.addClass('btn-outline-secondary');
inventoryDrop.addClass('btn-outline-danger');



$(document).ready(function() {


$("#title").text("Add New Inventory | RubykIO");

//Updates Menu Colors:
$("#dashboardMenu").addClass('btn-outline-secondary');
$("#rentalDrop").addClass('btn-outline-secondary');
$("#clientDrop").addClass('btn-outline-secondary');
$("#inventoryDrop").addClass('btn-outline-danger');


$("#newInventorySubmit").on("click", function(event) {
  event.preventDefault();

  var newInventoryItem = {
    product_name: $("#product_name").val().trim(),
    inventory_qty: $("#inventory_qty").val().trim(),
    available_inventory: $("#available_inventory").val().trim(),
    product_image: $("#product_image").val().trim(),
    rentalPrice_day: $("#rentalPrice_day").val().trim(),
    user: user
  };

  if (!(newInventoryItem.product_name ||
    newInventoryItem.product_name ||
    newInventoryItem.inventory_qty ||
    newInventoryItem.available_inventory ||
    newInventoryItem.product_image ||
    newInventoryItem.rentalPrice_day)) {
    alert("You must enter values for all data fields!");
    console.log("Inside if");
    return;
  }
  $.post("/api/inventory/new", newInventoryItem).then(
    function() {
      console.log("added new inventory item");
      alert("New Product Added");
    }
  );

  //Clearing fields from form after submit.
  $("#product_name").val("");
  $("#inventory_qty").val("");
  $("#available_inventory").val("");
  $("#product_image").val("");
  $("#rentalPrice_day").val("");

});
});
