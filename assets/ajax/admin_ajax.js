$(document).ready(function () {
  showMainAdmin();
  showHeaderAdmin()

});


function showMainAdmin() {
  $.ajax({
    url: "/viwer/main_admin.html",
    type: "GET",
    success: function (data) {
      $("#admin-main").html(data);
    }
  });
}


function showHeaderAdmin() {
  $.ajax({
    url: "/viwer/header_admin.html",
    type: "GET",
    success: function (data) {
      $("#admin-header").html(data);
    }
  });
}
