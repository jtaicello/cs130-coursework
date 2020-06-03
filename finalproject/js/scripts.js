// var elementPosition = $('#sidebar').offset();
//
// $(window).scroll(function(){
//         if($(window).scrollTop() > elementPosition.top){
//               $('#sidebar').css('position','fixed').css('top','0');
//               document.getElementById("sidebar").style.background = "red";
//               console.log(elementPosition + "true");
//         } else {
//             $('#sidebar').css('position','static');
//
//             console.log(elementPosition + "false");
//         }
// });

$.each($('*'), function() { if ($(this).width() > $('body').width()) { console.log($(this).get(0)); } }).length;

document.getElementById("side_bio").onclick = (ev) => {
  console.log("clicked on bio");
  $(document).ready(function () {
    target_offset = $('.aboutme').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 800);
  });
};
document.getElementById("side_video").onclick = (ev) => {
  console.log("clicked on video");
  $(document).ready(function () {
    target_offset = $('.myvideos').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 1000);
  });
};
document.getElementById("side_social").onclick = (ev) => {
  console.log("clicked on social");
  $(document).ready(function () {
    target_offset = $('.socialmedia').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 1200);
  });
};
document.getElementById("side_contact").onclick = (ev) => {
  console.log("clicked on contact");
  $(document).ready(function () {
    target_offset = $(".contact").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 1400);
  });
};
