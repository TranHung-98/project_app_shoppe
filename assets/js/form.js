$(document).ready(function () {


  var modal = $('#modal');
  var click_login = $('#click_login_user');
  var click_reg = $('#click_register_user');
  var modal_sigin = $('#modal_form-sigin');
  var modal_reg = $('#modal_form-login');


  $(document).on('click', '#login_user', function (event) {
    event.stopPropagation();
    modal.css("display", "block");
    modal_sigin.css("display", "none");
  });

  $(document).on('click', '#register_user', function (event) {
    event.stopPropagation();
    modal.css("display", "block");
    modal_reg.css("display", "none");
  });

  $(document).on('click', '#next_form_login', function (event) {
    event.stopPropagation();
    modal_sigin.css("display", "none");
    modal_reg.css("display", "block");
  });


  $(document).on('click', '#next_form_reg', function (event) {
    event.stopPropagation();
    modal_reg.css("display", "none");
    modal_sigin.css("display", "block");
  });


  $('#form-register').submit(function (event) {
    event.preventDefault();

    var phone_reg = $('#phone-reg').val();
    var password_reg = $('#password-reg').val();
    var re_password = $('#re-password').val();

    $('#phone-error, #password-error,#repassword_error').text('');
    $('#phone-reg').css("border", "1px solid #ccc");
    $('#password-reg').css("border", "1px solid #ccc");
    $('#re-password').css("border", "1px solid #ccc");

    if (phone_reg === '') {
      $('#phone-error').text('Phone is required');
      $('#phone-reg').css("border", "1px solid red");
    }

    if (password_reg === '') {
      $('#password-error').text('Password is required');
      $('#password-reg').css("border", "1px solid red");
    }

    if (re_password === '') {
      $('#repassword_error').text('Re-password is required');
      $('#re-password').css("border", "1px solid red");
    }

    if (password_reg !==  re_password) {
      $('#repassword_error').text('Passwords do not match');
      $('#password-reg').css("border", "1px solid red");
      $('#re-password').css("border", "1px solid red");
      return;
    }

    if (phone_reg.trim() != "" && password_reg.trim() != "" && re_password.trim() != "") {
      $('#modal_form-sigin').css("display", "none");
      $('#modal_form-login').css("display", "block");
    }

  });


  $('#form_login').submit(function (event) {
    event.preventDefault();

    var phone = $('#phone').val();
    var password = $('#password').val();

    $('#phone_error, #phone_error').text('');
    $('#phone').css("border", "1px solid #ccc");
    $('#password').css("border", "1px solid #ccc");

    if (phone === '') {
      $('#phone_error').text('Phone is required');
      $('#phone').css("border", "1px solid red");
    }
    if (password === '') {
      $('#password_error').text('Password is required');
      $('#password').css("border", "1px solid red");
    }

    if (phone.trim() != "" && password.trim() != "") {
      modal.css("display", "none");
    }
  });


  $(window).click(function (event) {
    if (event.target == modal[0]) {
      modal.css("display", "none");
      modal_sigin.css("display", "block");
      modal_reg.css("display", "block");
    }
  });

});


