$(function(){
  $('.slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     prevArrow:'<button type="button" class="slick-prev"><img src="img/VectorL.svg" alt=""></button>',
     nextArrow:'<button type="button" class="slick-next"><img src="img/VectorR.svg" alt=""></button>'
  });
});

//!-- Плавна прокрутка-//

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });
//!-- Прокрутка вниз-//

$(function(){
  $('#scroll_bottom').click(function(){
    $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 900);
    return false;
  });
});


  //!-- Кнопка вгору --//
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//!-- Меню-гамбургер --//

$(function () {
  $('.menu-open').click(function () {
         $('.nav_menu').toggleClass('show-menu')
  })
});
//!-- Клік по меню-//

if ( $(window).width()  < 768) {
  $('ul.menu li a').click(function () {
       
     $('.nav_menu').toggleClass('show-menu')
  });
  };

//!-- Форма зворотнього зв'язку-//

  $(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});