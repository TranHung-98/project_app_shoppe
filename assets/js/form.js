$(document).ready(function() {


  var modal = $('#modal');
  var click_login = $('#click_login_user');
  var click_reg = $('#click_register_user');
  var modal_sigin = $('#modal_form-sigin');
  var modal_reg = $('#modal_form-login');


  $(document).on('click', '#login_user', function(event) {
    event.stopPropagation();
    modal.css("display", "block");
    modal_sigin.css("display", "none");
  });

  $(document).on('click', '#register_user', function(event) {
    event.stopPropagation();
    modal.css("display", "block");
    modal_reg.css("display", "none");
  });


  $(window).click(function(event) {
      if (event.target == modal[0]) {
          modal.css("display", "none");
          modal_sigin.css("display", "block");
          modal_reg.css("display", "block");
      }
  });

});
