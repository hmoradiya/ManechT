var nav = document.querySelector('header');
      
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 70) {
    nav.classList.add('bg-header', 'shadow');
  } else {
    nav.classList.remove('bg-header', 'shadow');
  }
});

  if ($(".mainMenu").hasClass("active")) {
    $(".main-header").toggleClass('bg-header', 'shadow');
  }



$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $("#once-popup").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#popup-close').click(function(e)
    {
    $('#once-popup').fadeOut();
    });
    $('#once-popup').click(function(e) 
    {
    $('#once-popup').fadeOut(); 
    });
});



(function($) {

  if ($(".isSticky").length > 0) {
      var header_height = $(".isSticky").height();
      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 300) {
              $(".top-header").addClass('d-none');
          } else {
              $(".top-header").removeClass('d-none');
          }
      });
  }

  $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e) {
      e.preventDefault();
      $(this).siblings('ul').slideToggle();
  });
  $('.menu_btn').on('click', function(e) {
      e.preventDefault();
      $('.mainMenu').slideToggle();
      $('.mainMenu').toggleClass('active');
      $(body).toggleClass('overflow-hidden');
  });


})(jQuery);