
$(document).ready(function () {
  showHeader();
  showFooter();
  showModal();

});



function showHeader() {
  $.ajax({
    url: "/viwer/header.html",
    type: "GET",
    success: function (data) {
      $("#header").html(data);
    }
  });
}


function showFooter() {
  $.ajax({
    url: "/viwer/footer.html",
    type: "GET",
    success: function (data) {
      $("#footer").html(data);
    }
  });
}


function showModal() {
  $.ajax({
    url: "/viwer/modal.html",
    type: "GET",
    success: function (data) {
      $("#modal").html(data);
    }
  });
}


