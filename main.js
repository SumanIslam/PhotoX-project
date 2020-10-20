$(window).scroll(function() {
  let position = $(this).scrollTop();
  // console.log(position);
  if(position >= 250) {
    $('.mission-card').addClass('from-left');
  } else {
    $('.mission-card').removeClass('from-left');
  }

})
