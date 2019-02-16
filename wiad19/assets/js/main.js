(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2019/02/19 19:00:00',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Dias</div> '
      +'<div class="time-entry hours"><span>%H</span> Horas</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutos</div> '
      +'<div class="time-entry seconds"><span>%S</span> Segundos</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      


  var myCalendar = createCalendar({
  options: {
    class: 'btn-calendar',
    
    // You can pass an ID. If you don't, one will be generated for you
    id: 'calendar'
  },
  data: {
    // Event title
    title: 'WIAD 2019',

    // Event start date
    start: new Date('February 21, 2019 19:00'),
    
    // Event duration (IN MINUTES)
    duration: 180,

    // You can also choose to set an end time
    // If an end time is set, this will take precedence over duration
    end: new Date('February 21, 2019 22:00'),     

    // Event Address
    address: '',

    // Event Description
    description: 'Dia Mundial da Arquitetura de Informação'
  }
});

document.querySelector('#calendar').appendChild(myCalendar);

  //$('#addCalendar').on('click', function() {
    // ga('send', 'event', 'calendar','add to calendar', 'Adicione ao Calendário');
  //});




}(jQuery));