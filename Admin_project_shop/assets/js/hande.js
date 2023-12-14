$(document).ready(
    // Handle show menu
    function () {

    var isButtonClicked = false;

    // Handle menu navbar : small and default
    $(document).on('click', '#button', function (e) {
        e.stopPropagation();

        var headerLeft = $(".headerbar-left, .main-sidebar");
        var hideText = $('.headerbar-left .logo span, .submenu a span');
        var navBarCustom = $('.navbar-custom');
        var center = $('#sidebar-menu > ul > li > a');

        var windowWidth = $(window).width();


        if (windowWidth <= 738) {
          // Width <= not click
        } else {
          // Width > 738px click
          if (isButtonClicked) {
            headerLeft.css("width", "");
            center.css("padding", "12px 12px 15px 12px");
            $('.menu-arrow').css("display", "block");
            hideText.show();
            $('.list').show();
            $('#list').hide();
            $('.content-page').css("margin-left","");
            $('.footer').css("left","")
            navBarCustom.css("margin-left", "");
        } else {
            center.css("padding", "12px 22px")
            headerLeft.css("width", "80px");
            hideText.hide();
            $('.list').hide();
            $('#list').show();
            $('.content-page').css("margin-left","80px");
            $('.footer').css("left","80px")
            $('.menu-arrow').hide();
            navBarCustom.css("margin-left", "0");
        }

        isButtonClicked = !isButtonClicked;
        }

    });



    $(document).on('click', '#button-bell', function (e) {
        e.stopPropagation();

        if (isButtonClicked) {
            $('#notifi,.header__notifi').hide();
        } else {
            $('#notifi,.header__notifi').show();
        }

        isButtonClicked = !isButtonClicked;

    });


    $(document).on('click', '.dropdown-click', function (e) {
        e.stopPropagation();


        if (isButtonClicked) {
            $('.dropdown-menu').hide();
        } else {
            $('.dropdown-menu').show();
        }


        isButtonClicked = !isButtonClicked;

    });

    $(document).on('click', '#main,.content-page', function (e) {
      e.stopPropagation();

      $('.dropdown-menu').hide();

  });


    $(document).on('click', '.admin-click', function (e) {
        e.stopPropagation();

        if (isButtonClicked) {
            $('.subdrop').removeClass().addClass("admin-click");
            $('.admin-list').css("display", "none");
        } else {
            $('.admin-list').css("display", "block");
            $('.admin-click').addClass("subdrop");
        }
        isButtonClicked = !isButtonClicked;
    });



    $(document).on('click', '.table-click', function (e) {
        e.stopPropagation();


        if (isButtonClicked) {
            $('.table-list').hide();
            $('.subdrop').removeClass().addClass("table-click");
        } else {
            $('.table-list').show();
            $('.table-click').addClass("subdrop");
        }


        isButtonClicked = !isButtonClicked;

    });


    $(document).on('click', '.from-click', function (e) {
        e.stopPropagation();


        if (isButtonClicked) {
            $('.form-list').hide();
            $('.subdrop').removeClass().addClass("from-click");
        } else {
            $('.form-list').show();
            $('.from-click').addClass("subdrop");
        }


        isButtonClicked = !isButtonClicked;

    });

    $(document).on('click', '#my-profile,#my_profile', function (e) {
        e.stopPropagation();
        $(".content").hide();
        $("#content-page").show();
            showMyProfile();

    });

    $(document).on('click', '#user', function (e) {
      e.stopPropagation();

      $(".content").hide();
      $("#content-page").show();
      showUser();

  });


  $(document).on('click', '#dashboard,#dashboard-click', function (e) {
    e.stopPropagation();

    $(".content").show();
    $("#content-page").hide();

});


$(document).on('click', '#modal', function (e) {
  e.stopPropagation();
    $('#modal').hide();
    $('.content-page .content').css("margin-top","50px")
});

$(document).on('click', '#eddit-user-1,#eddit-user-2,#eddit-user-3,#modal-admin-edit', function (e) {
  e.stopPropagation();

    $('#modal').show();
    $('#modal_edit_user_2').show();
});

$(document).on('click', '#add_new-user', function (e) {
  e.stopPropagation();
    $('#modal').hide();
    $('.content-page .content').css("margin-top","50px");
});

$(document).on('click', '#add_new-user', function (e) {
  e.stopPropagation();

    $('#modal, .modal').show();
    $('#modal_edit_user_1').show();
    $('#modal_edit_user_2').hide();
});

},
);



function showUser() {
    $.ajax({
      url: "../viwer/user.html",
      type: "GET",
      success: function (data) {
        $("#content-page").html(data);
      }
    });
  }


  function showMyProfile() {
    $.ajax({
      url: "../viwer/my_profile.html",
      type: "GET",
      success: function (data) {
        $("#content-page").html(data);
      }
    });
  }


