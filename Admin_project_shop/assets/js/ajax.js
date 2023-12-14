$(document).ready(


function () {

showNavbarLeft();

showModalAddNewUser();

showModalEditUser()

},


);


function showNavbarLeft() {
  $.ajax({
    url: "../viwer/nav-left.html",
    type: "GET",
    success: function (data) {
      $("#leftscroll").html(data);
    }
  });
}


function showModalEditUser() {
  $.ajax({
    url: "../viwer/modal-edit-user.html",
    type: "GET",
    success: function (data) {
      $("#modal_edit_user_2").html(data);
    }
  });
}

function showModalAddNewUser() {
  $.ajax({
    url: "../viwer/modal-add-user.html",
    type: "GET",
    success: function (data) {
      $("#modal_edit_user_1").html(data);
    }
  });
}
