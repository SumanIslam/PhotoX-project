$(window).scroll(function() {
  let position = $(this).scrollTop();
  // console.log(position);
  if(position >= 250) {
    $('.mission-card').addClass('animate__animated animate__fadeIn');
  } else {
    $('.mission-card').removeClass('animate__animated animate__fadeIn');
  }

})
