function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("itemSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("inventoryTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


$(document).ready(function() {

//Updates the title to match the actual page.
$("#title").text("Add New Inventory | RubykIO");

//Updates Menu Colors:
$("#dashboardMenu").addClass('btn-outline-secondary');
$("#rentalDrop").addClass('btn-outline-secondary');
$("#clientDrop").addClass('btn-outline-secondary');
$("#inventoryDrop").addClass('btn-outline-danger');

$("#clientCompany").val(data.client_id)

});
