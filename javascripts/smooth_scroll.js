$(document).on('click', '.nav',
  function(e){
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    $('html,body').animate({
      scrollTop: $('div[data-slide="' + dataslide + '"]').offset().top
    }, 1500, 'easeInOutQuint');
  }
)