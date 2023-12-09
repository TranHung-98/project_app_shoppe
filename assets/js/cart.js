$(document).ready(function(){

  // Hàm Dếm Số lượng có trong giỏ hàng:
  function countCart() {
    var orderCart = document.querySelectorAll('.header__cart-item');
    var numberCart = document.querySelector('.header__cart-count');

    // Reset the cart count to 0 before counting the items
    var count = 0;

    for (var i = 0; i < orderCart.length; i++) {
      count++;
    }

    // Update the cart count in the HTML
    numberCart.innerHTML = count.toString();
  }


  // Call the function to count the cart items
  countCart();

  /// Xly giỏ hàng

  //Xly xoá và tính toán add
  $(".header__cart-item-close").click(function () {

    var cartItem = $(this).closest(".header__cart-item");
    cartItem.remove();

    checkCartStatus();
    countCart();
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
  $(".header__cart-list-item").on("click", ".header__cart-item-close", function () {
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
    $(".header__cart-item").each(function () {
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
},);

