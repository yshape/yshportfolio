$(window).scroll(function(){
  var pos = $(window).scrollTop();
  if(pos >= 1000){
    $("#top").css("opacity", '1');
  }
  else
  {
    $("#top").css("opacity", '0');
  }
})
$("#top").click(function(){
  $("html, body").stop().animate({scrollTop:0}, 500);
})