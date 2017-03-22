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

$('#navAboutMe').click(function() {
  $('html, body').animate({
    scrollTop: $('#aboutMeDiv').offset().top
  }, 700);
});

$('#navExperience').click(function() {
  $('html, body').animate({
    scrollTop: $('#experienceDiv').offset().top
  }, 700);
});

$('#navProjects').click(function() {
  $('html, body').animate({
    scrollTop: $('#projectsDiv').offset().top
  }, 700);
});

$('#navContacts').click(function() {
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

function onYouTubeIframeAPIReady() {
  var player;
  // var player2;
    player = new YT.Player('meVideos',  {
      width: 500,               // Player width (in px)
      height: 300,              // Player height (in px)
      playerVars: {
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 1,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 0,  // Hide the Video Annotations
        autohide: 1,         // Hide video controls when playing
        playlist: 'qr_4yoUwMnE, uaPgEPy71Qc',
      },
      events: {
        onReady: function(e) {
          e.target.mute();
          e.target.playVideo();
          }
      }
    });
}
