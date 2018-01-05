// var animationName = 'animate, slideInLeft';
// var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


// $('.nav-about-out').hover(function(){
//   $('.nav-about-out').addClass(animationName).one(animationEnd, function(){
//     $(this).removeClass(animationName);
//   });
// });



$('.nav-about-out').hover(function(){
    $('.nav-about-out').css("right", "0").addClass('animated', 'slideInLeft');
    }, function(){
    $('.nav-about-out').css("right", "50px");
});

$('.nav-contact-out').hover(function(){
    $('.nav-contact-out').css("bottom", "0");
    }, function(){
    $('.nav-contact-out').css("bottom", "50px");
});

$('.nav-portfolio-out').hover(function(){
    $('.nav-portfolio-out').css("left", "0");
    }, function(){
    $('.nav-portfolio-out').css("left", "50px");
});

















// //FNC's to change nav styling - MAIN PAGE
// $('.nav-about-out').hover(function(){
//     $('.nav-about-out').css("background-color", "blue");
//     }, function(){
//     $('.nav-about-out').css("background-color", "#fff");
// });

// $('.nav-contact-out').hover(function(){
//     $('.nav-contact-out').css("background-color", "red");
//     }, function(){
//     $('.nav-contact-out').css("background-color", "#fff");
// });

// $('.nav-portfolio-out').hover(function(){
//     $('.nav-portfolio-out').css("background-color", "green");
//     }, function(){
//     $('.nav-portfolio-out').css("background-color", "#fff");
// });

// // About page nav animation
// $('.nav-about-in').hover(function(){
//     $('.nav-about-in').css("background-color", "#fff")
//       .children('a').text('Home').css('color', '#000');
//     }, function(){
//     $('.nav-about-in').css("background-color", "blue")
//       .children('a').text('About').css('color', '#fff');
// });

// // Contact page nav animation
// $('.nav-contact-in').hover(function(){
//     $('.nav-contact-in').css("background-color", "#fff")
//       .children('a').text('Home').css('color', '#000');
//     }, function(){
//     $('.nav-contact-in').css("background-color", "red")
//       .children('a').text('Contact').css('color', '#fff');
// });

// // Portfolio page nav animation
// $('.nav-portfolio-in').hover(function(){
//     $('.nav-portfolio-in').css("background-color", "#fff")
//       .children('a').text('Home').css('color', '#000');
//     }, function(){
//     $('.nav-portfolio-in').css("background-color", "green")
//       .children('a').text('Portfolio').css('color', '#fff');
// });












