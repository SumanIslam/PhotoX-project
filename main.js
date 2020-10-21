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
