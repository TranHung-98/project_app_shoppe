$(document).ready(function () {


  var modal = $('#modal');
  var click_login = $('#click_login_user');
  var click_reg = $('#click_register_user');
  var modal_sigin = $('#modal_form-sigin');
  var modal_reg = $('#modal_form-login');
  var logout= $('#logout');


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

  $(document).on('click', '#logout', function (event) {
    event.stopPropagation();
    $('#user_login').hide();
    click_login.show();
    click_reg.show();
  });


  $('#form-register').submit(function (event) {
    event.preventDefault();

    var email = $('#email').val();
    var phone_reg = $('#phone-reg').val();
    var password_reg = $('#password-reg').val();
    var re_password = $('#re-password').val();


    $('#phone-error, #password-error,#repassword_error,#email').text('');
    $('#phone-reg').css("border", "1px solid #ccc");
    $('#email').css("border", "1px solid #ccc");
    $('#password-reg').css("border", "1px solid #ccc");
    $('#re-password').css("border", "1px solid #ccc");

    if(email === ''){
      console.log("ok")
      $('#email-errol').text('Email is required');
      $('#email').css("border", "1px solid red");
    }

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

    if (phone_reg.trim() != "" && password_reg.trim() != "" && re_password.trim() != "" && email.trim() != '') {
      $('#modal_form-sigin').css("display", "none");
      $('#modal_form-login').css("display", "block");
    }

    $('#form_login').submit(function (event) {
      event.preventDefault();

      var phone = $('#phone').val();
      var password = $('#password').val();

      $('#phone_error, #phone_error').text('');
      $('#phone').css("border", "1px solid #ccc");
      $('#password').css("border", "1px solid #ccc");

      if (phone === '') {
        $('#phone_error').text('Phone or Email is required');
        $('#phone').css("border", "1px solid red");
      }
      if (password === '') {
        $('#password_error').text('Password is required');
        $('#password').css("border", "1px solid red");
      }

      if (phone.trim() != "" && password.trim() != "" && phone == phone_reg && password == password_reg) {
        modal.css("display", "none");

      $('#click_login_user').css("display", "none");
      $('#click_register_user').css("display", "none");
      $('#user_login').show();
      }
    });
  });


  $(window).click(function (event) {
    if (event.target == modal[0]) {
      modal.css("display", "none");
      modal_sigin.css("display", "block");
      modal_reg.css("display", "block");
    }
  });




  /// Xly giỏ hàng

//Xly xoá và tính toán add
 $(".header__cart-item-close").click(function() {

  var cartItem = $(this).closest(".header__cart-item");
  cartItem.remove();

  checkCartStatus()

  calculateTotalPrice();
});

// Xly khi không có sản phẩm thì hiển thị giỏ hàng rỗng:
function checkCartStatus() {
  var cartItemCount = $(".header__cart-list-item li").length;

  if (cartItemCount > 0) {
    $(".header__cart").removeClass("header__cart--no-cart").addClass("header__cart--has-cart");
  } else {
    $(".header__cart").removeClass("header__cart--has-cart").addClass("header__cart--no-cart");
  }
}

// Sự kiện click cho nút "Xoá" trong giỏ hàng
$(".header__cart-list-item").on("click", ".header__cart-item-close", function() {
  // Xoá sản phẩm khỏi giỏ hàng
  $(this).closest("li").remove();

  // Kiểm tra và cập nhật trạng thái giỏ hàng
  checkCartStatus();
});

// Gọi hàm kiểm tra trạng thái giỏ hàng khi trang tải
checkCartStatus();

// Hàm tính toán tổng giá trị giỏ hàng
function calculateTotalPrice() {
  var totalPrice = 0;

  // Lặp qua từng sản phẩm trong giỏ hàng
  $(".header__cart-item").each(function() {
    // Lấy giá trị và số lượng từ mỗi sản phẩm
    var price = parseFloat($(this).find(".header__cart-item-price").text().replace('đ', '').replace('.', '').replace(',', ''));
    var quantity = parseInt($(this).find(".header__cart-item-number").text().replace('x ', ''));

    // Tính toán tổng giá trị giỏ hàng
    totalPrice += price * quantity;
  });

  // Hiển thị tổng giá trị
  $(".header__cart-total-price").text(formatCurrency(totalPrice) + 'đ');
}

// Hàm định dạng số tiền thành định dạng tiền tệ
function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
}



});


