

 


//  $(function() {
//     var nav = $(".norm");
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
    
//         if (scroll >= 50) {
//             nav.removeClass('norm').addClass("navfixed");
//         } else {
//             nav.removeClass("navfixed").addClass('norm');
//         }
//     });
// });







// $(".opensrch").click(function (e) {
//   e.stopPropagation();
//   $(".srchbararea").toggleClass('closefrms');
// });

// $(".openhdas").click(function (e) {
//   e.stopPropagation();
//   $(".site-header").toggleClass('heightexps');
//   $("body").toggleClass('fixbd');
// });

// $(".openhdas").click(function (e) {
//   e.stopPropagation();
//   $(".openhdas").toggleClass('crossshwos');
// });

// $(".cross").click(function (e) {
//   e.stopPropagation();
//   $(".site-header").removeClass('heightexps'); 
//   $("body").removeClass('fixbd');
// });


// $(".megamenu ul li a").click(function (e) {
//   e.stopPropagation();
//   $(".site-header").removeClass('heightexps'); 
//   $("body").removeClass('fixbd');
// });


// /* js for readmore */

// $(".rdtxtmre").click(function (e) {
//   e.stopPropagation();
//   $(".onestq").toggleClass('sholists'); 
// });

// $(".rdtxtmretwo").click(function (e) {
//   e.stopPropagation();
//   $(".twostq").toggleClass('sholists'); 
// });

// $(".rdtxtmrethree").click(function (e) {
//   e.stopPropagation();
//   $(".threestq").toggleClass('sholists'); 
// });


// $(".rdtxtmrefour").click(function (e) {
//   e.stopPropagation();
//   $(".fourstq").toggleClass('sholists'); 
// });

// $(".rdtxtmrefive").click(function (e) {
//   e.stopPropagation();
//   $(".fivestq").toggleClass('sholists'); 
// });


// $(".rdtxtmre").click(function (e) {
//   e.stopPropagation();
//   $(".rdtxtmre").toggleClass('rdless'); 
// });

// $(".rdtxtmretwo").click(function (e) {
//   e.stopPropagation();
//   $(".rdtxtmretwo").toggleClass('rdless'); 
// });

// $(".rdtxtmrethree").click(function (e) {
//   e.stopPropagation();
//   $(".rdtxtmrethree").toggleClass('rdless'); 
// });

// $(".rdtxtmrefour").click(function (e) {
//   e.stopPropagation();
//   $(".rdtxtmrefour").toggleClass('rdless'); 
// });


// $(".fab-icon-holder").click(function (e) {
//   e.stopPropagation();
//   $(".fab-container").toggleClass('crosshow'); 
// });




// $(function(){
    
//    $('ul.accordion li .social-links ').click(function(){
//       var item=$(this).parent();
//        $('ul li').removeClass('current');
//        item.addClass("current")
//     });
	
	
// 	$('.landingoptions ul li a ').click(function(){
//       var item=$(this).parent();
//        $('.landingoptions ul li').removeClass('active');
//        item.addClass("active")
//     });
	
	
// 	$('.octagonshapes ul li a ').click(function(){
//       var item=$(this).parent();
//        $('.octagonshapes ul li').removeClass('active');
//        item.addClass("active")
//     });
	
	
	
// });




/* tab css */

// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

/*$('.cvicontops .row .col-md-4 .cvdisc a ').click(function(){
      var item=$(this).parent();
       $('.cvicontops .row .col-md-4 .cvdisc').removeClass('current');
       item.addClass("current")
    });*/
	

$(document).ready(function () {
  var owl = $('.trustcmpcarso');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 3,
        nav: false,
       dots: true,
        loop: true
      },

      766: {
        items: 3,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 5,
        nav: false,
        dots: true,
		center: true,
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


});



$(document).ready(function () {
  var owl = $('.featuredslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: false,
    autoplay: true,
	autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true
      },
      300: {
        items: 2,
        nav: true,
       dots: false,
	       margin: 10,
        loop: true
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 4,
        nav: true,
        dots: false,
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


});


$(document).ready(function () {
  var owl = $('.userreview');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: false,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: false,
        dots: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


});


$(document).ready(function () {
  var owl = $('.reviewtestim');
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: false,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


});



$(document).ready(function () {
  var owl = $('.advantfeat');
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: false,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


});

  
 