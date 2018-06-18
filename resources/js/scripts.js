$(document).ready(function(){
   
    $('.js--features-section').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset:'50px;'
    })

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500)
    })

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });




// animations //

    $('.js-wp-1').waypoint(function(direction){
       $('.js-wp-1').addClass('animated fadeIn')
    }, {
        offset:'70%;'
    })

    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated rollIn')
     }, {
         offset:'50%;'
     })

     $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated bounceInLeft')
     }, {
         offset:'80%;'
     })

     $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated bounceInRight')
     }, {
         offset:'80%;'
     })

     $('.js-mobile-icon').click(function(){
         let nav = $('.js-main-nav')
         let icon =   $('.js-mobile-icon')[0].childNodes[0].attributes[0].value

         if(icon == 'menu'){
            $('.js-mobile-icon')[0].childNodes[0].attributes[0].value = 'close'
         } else {
            $('.js-mobile-icon')[0].childNodes[0].attributes[0].value = 'menu'
         }

         nav.slideToggle(200)
     })

     new GMaps({
        div: '.map',
        lat: -12.043333,
        lng: -77.028333
      });


})