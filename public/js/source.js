//FNC's to change nav styling - MAIN PAGE
$('.nav-about-out').hover(function(){
    $('.nav-about-out, .nav-bottom-left').css("background-color", "blue");
    }, function(){
    $('.nav-about-out, .nav-bottom-left').css("background-color", "#fff");
});

$('.nav-contact-out').hover(function(){
    $('.nav-contact-out, .nav-bottom-left, .nav-bottom-right').css("background-color", "red");
    }, function(){
    $('.nav-contact-out, .nav-bottom-left, .nav-bottom-right').css("background-color", "#fff");
});

$('.nav-portfolio-out').hover(function(){
    $('.nav-portfolio-out, .nav-bottom-right').css("background-color", "green");
    }, function(){
    $('.nav-portfolio-out, .nav-bottom-right').css("background-color", "#fff");
});




$('.nav-about-in').hover(function(){
    $('.nav-about-in').css("background-color", "#fff")
      .children('a').text('Home').css('color', '#000');
    }, function(){
    $('.nav-about-in').css("background-color", "blue")
      .children('a').text('About').css('color', '#fff');
});

$('.nav-contact-in').hover(function(){
    $('.nav-contact-in').css("background-color", "#fff")
      .children('a').text('Home').css('color', '#000');
    }, function(){
    $('.nav-contact-in').css("background-color", "red")
      .children('a').text('Contact').css('color', '#fff');
});

$('.nav-portfolio-in').hover(function(){
    $('.nav-portfolio-in').css("background-color", "#fff")
      .children('a').text('Home').css('color', '#000');
    }, function(){
    $('.nav-portfolio-in').css("background-color", "green")
      .children('a').text('Portfolio').css('color', '#fff');
});

