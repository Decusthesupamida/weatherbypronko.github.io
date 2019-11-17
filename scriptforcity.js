$('#WeatherOnCitySubmit').click(function(){
  searchDeviceByCity();
  $('.loginOnCity').addClass('testOnCity')
  setTimeout(function(){
    $('.loginOnCity').addClass('testtwoOnCity')
  },300);
  setTimeout(function(){
    $(".authentOnCity").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authentOnCity").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
  },500);
  setTimeout(function(){
    $(".authentOnCity").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authentOnCity").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
    $('.loginOnCity').removeClass('testtwoOnCity')
  },2500);
  setTimeout(function(){
    $('.loginOnCity').removeClass('testOnCity')
    $('.loginOnCity div').fadeOut(123);
  },2800);
  setTimeout(function(){
    $('.successOnCity').fadeIn();
  },3200);
});

$('input[type="text"],input[type="password"]').focus(function(){
  $(this).prev().animate({'opacity':'1'},200)
});
$('input[type="text"],input[type="password"]').blur(function(){
  $(this).prev().animate({'opacity':'.5'},200)
});

$('input[type="text"],input[type="password"]').keyup(function(){
  if(!$(this).val() == ''){
    $(this).next().animate({'opacity':'1','right' : '30'},200)
  } else {
    $(this).next().animate({'opacity':'0','right' : '20'},200)
  }
});

var open = 0;
$('.tab').click(function(){
  $(this).fadeOut(200,function(){
    $(this).parent().animate({'left':'0'})
  });
});
