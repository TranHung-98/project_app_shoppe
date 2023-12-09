$(document).ready(function(){

showCharts();

});


function showCharts() {
  $.ajax({
    url: "/viwer/charts.html",
    type: "GET",
    success: function (data) {
      $("#charts").html(data);
    }
  });
}
