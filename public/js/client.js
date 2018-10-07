function search() {
    var input, filter, table, tr, td, i, tds;
    input = document.getElementById("clientSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("clientTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[3]
      if (td1 || td3) {
        if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 || td3.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


$(document).ready(function() {

  //Updates the title to match the actual page.
  $("#title").text("List of Clients | RubykIO");

  //Updates Menu Colors:
  $("#dashboardMenu").addClass('btn-outline-secondary');
  $("#rentalDrop").addClass('btn-outline-secondary');
  $("#clientDrop").addClass('btn-outline-danger');
  $("#inventoryDrop").addClass('btn-outline-secondary');

});
