$('#WeatherOnCapitalSubmit').click(function(){
  searchDeviceByCapital();
  $('.loginOnCapital').addClass('testOnCapital')
  setTimeout(function(){
    $('.loginOnCapital').addClass('testtwoOnCapital')
  },300);
  setTimeout(function(){
    $(".authentOnCapital").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authentOnCapital").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
  },500);
  setTimeout(function(){
    $(".authentOnCapital").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
    $(".authentOnCapital").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
    $('.loginOnCapital').removeClass('testtwoOnCapital')
  },2500);
  setTimeout(function(){
    $('.loginOnCapital').removeClass('testOnCapital')
    $('.loginOnCapital div').fadeOut(123);
  },2800);
  setTimeout(function(){
    $('.successOnCapital').fadeIn();
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
