$('#aboutMe').click(function() {
  $('html, body').animate({
    scrollTop: $('#aboutMeDiv').offset().top
  }, 700);
});

$('#experience').click(function() {
  $('html, body').animate({
    scrollTop: $('#experienceDiv').offset().top
  }, 700);
});

$('#projects').click(function() {
  $('html, body').animate({
    scrollTop: $('#projectsDiv').offset().top
  }, 700);
});

$('#contact').click(function() {
  $('html, body').animate({
    scrollTop: $('#contactDiv').offset().top
  }, 700);
});

$(window).scroll(function(event) {
  console.log($(window).scrollTop());
  if($(window).scrollTop()>1000){
    $('nav').addClass('show');
  }else{
    $('nav').removeClass('show');
  }
});
