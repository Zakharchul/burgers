 $(document).ready(() => {
     $(".category").click((e) => {
         $(".products-container").hide();
         let id = $(e.target).data('id');
         $("#" + id).show();
         $(".category").removeClass("active");
         $(e.target).addClass("active")

         $("#" + id + " .products").slick('refresh');
         $("#" + id + " .products-nav").slick('refresh');
     });
    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav'
      });
      $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        centerMode: false,
        infinite:false,
        focusOnSelect: true
      });

      $('#frise-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#frise-container .products-nav'
      });
      $('#frise-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#frise-container .products',
        dots: false,
        centerMode: false,
        infinite:false,
        focusOnSelect: true
      });

      $('#souse-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#souse-container .products-nav'
      });
      $('#souse-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#souse-container.products',
        dots: false,
        centerMode: false,
        infinite:false,
        focusOnSelect: true
      });

      $('#drink-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drink-container .products-nav'
      });
      $('#drink-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drink-container .products',
        dots: false,
        centerMode: false,
        infinite:false,
        focusOnSelect: true
      });

      $('#revievs').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },]
});
$(".open-modal").click(() => {
$('#reservation-container').css("display" , "flex")
});

$("#reservation-cancel, #reservation-container ").click((e) => {
 if( e.target.id === "reservation-cancel-close" ||  e.target.id === "reservation-container"){
  $('#reservation-container').hide();
 }
  });
  $("#reserve-button > button ").click(() => {
    let name = $("#name")
    let count = $("#count")
    let phone = $("#phone")
    let time = $("#time")

    if (name.val() && count.val() && phone.val() && time.val()) {
    /*   $("#reservation-sent").show();
      $("#reservetion-contant").hide();*/
      $.ajax({
        type:'post',
        url:'mail.php',
        data: "name=" + name.val() + "&count=" + count.val() + "&phone=" + phone.val() + "&time=" + time.val(),
        success: () => {
          $("#reservation-sent").show();
          $("#reservetion-contant").hide();
        },
        error: () => {
          $('#reservation-container').hide();
          alert('Ошибка бронирования. Свяжитесь пожалуйста, по номеру телефона')
        }
      })
    }else{
      $('#reserve-error').show();
    }
  });
  $("#burger").click(() => {
    $("#header").toggleClass("menu-open");
  })
  $("#header #menu ul li").click(() => {
    $("#header").removeClass("menu-open");
  })
 });
