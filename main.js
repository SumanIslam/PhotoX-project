// navbar
$('.nav-item').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
})

// mission card
$(window).scroll(function() {
  let position = $(this).scrollTop();
  // console.log(position);
  if(position >= 250) {
    $('.mission-card').addClass('animate__animated animate__fadeIn');
  } else {
    $('.mission-card').removeClass('animate__animated animate__fadeIn');
  }
});

// gallery
$('.gallery-group-item').click(function() {
  let value = $(this).attr('data-filter');
  if(value === 'all') {
    $('.filter').show(300);
  } else {
    $('.filter').not('.' + value).hide(300);
    $('.filter').filter('.' + value).show(300);
  }
})

$('.gallery-group-item').click(function() {
  $(this).addClass('active-item').siblings().removeClass('active-item')
})

// pricing
$(window).scroll(function() {
  let position = $(this).scrollTop();
  // console.log(position);
  if(position >= 250) {
    $('.card-1').addClass('animate__animated animate__slideInLeft animate__slower');
    $('.card-2').addClass('animate__animated animate__slideInUp animate__slower');
    $('.card-3').addClass('animate__animated animate__slideInRight animate__slower');
  }
});
