//FNC's to change nav styling
$('.nav-portfolio').hover(function(){
    $('.nav-portfolio, .nav-bottom-right').css("background-color", "yellow");
    }, function(){
    $('.nav-portfolio, .nav-bottom-right').css("background-color", "#fff");
});

$('.nav-contact').hover(function(){
    $('.nav-contact, .nav-bottom-left, .nav-bottom-right').css("background-color", "red");
    }, function(){
    $('.nav-contact, .nav-bottom-left, .nav-bottom-right').css("background-color", "#fff");
});

$('.nav-about').hover(function(){
    $('.nav-about, .nav-bottom-left').css("background-color", "blue");
    }, function(){
    $('.nav-about, .nav-bottom-left').css("background-color", "#fff");
});