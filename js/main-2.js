+$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: false,
//    animateOut: 'fadeOut',
                      autoplay: true,
//                      autoplayTimeout: 4000,
//                      autoplayHoverPause: false,
                        smartSpeed: 1500,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});

$('.popular-blog .tab-carousel').owlCarousel({
    // stagePadding: 10,
    loop: true,
    margin: 40,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: ["<img src='img/left-arrow.svg'>","<img src='img/right-arrow.svg'>"],
   autoplay: true,
   autoplayTimeout: 3000,
    responsive: {
        0: {
            stagePadding: 40,
            items: 1,
              margin: 10,
              dots: false,
              nav: false,
              autoplay: false,
        },
        400: {
            stagePadding: 60,
            items: 1,
              margin: 10,
              dots: false,
              nav: false,
              autoplay: false,
        },
        600: {
            items: 2,
            margin: 15,
        },
        1000: {
            items: 3,
            margin: 15,
        },
        1400: {
            items: 3,
        }
    }
});

$('.tab-carousel').owlCarousel({
    // stagePadding: 10,
    loop: true,
    margin: 12,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: ["<img src='img/left-arrow.svg'>","<img src='img/right-arrow.svg'>"],
   autoplay: true,
   autoplayTimeout: 3000,
    responsive: {
        0: {
            stagePadding: 45,
            items: 1,
              margin: 10,
              dots: false,
              nav: false,
              autoplay: false,
        },
        400: {
            stagePadding: 55,
            items: 1,
              margin: 10,
              dots: false,
              nav: false,
              autoplay: false,
        },
        600: {
            stagePadding: 100,
            items: 2,
            margin: 15,
            nav: false,
        },
        1000: {
            items: 3,
            margin: 15,
        },
        1400: {
            items: 3,
        }
    }
});

$('.cat-carousel').owlCarousel({
    loop: false,
    margin: 40,
    responsiveClass: true,
    dots: false,
    nav: false,
    navText: ["<img src='img/left-arrow.svg'>","<img src='img/right-arrow.svg'>"],
    autoplay: false,
      autoplayTimeout: 4000,
    responsive: {
        0: {
            stagePadding: 20,
            item: 5,
            margin: 0,
            autoplay: false
        },
        350: {
            stagePadding: 30,
            item: 3,
            margin: 0,
            autoplay: false
        },
        400: {
            stagePadding: 35,
            item: 3,
            margin: 0,
            autoplay: false
        },
        600: {
            // stagePadding: 80,
            items: 3,
            nav: false,
            loop: true,
        },
        1000: {
            // stagePadding: 80,
            nav: true,
            items: 6,
            loop: false,
            slideBy: 5
        }
        
    }
});



$('.rel-carousel').owlCarousel({
    stagePadding: 10,
    loop: true,
    margin: 40,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: ["<img src='img/left-arrow.svg'>","<img src='img/right-arrow.svg'>"],
    autoplay: false,
    responsive: {
        0: {
            stagePadding: 0,
            items: 1.1,
              margin: 20,
              dots: false,
              nav: false,
              autoplay: false,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
    

function cardTransition(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }

  $(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
        
              $(".subscribe-box .search-button").click(function(){
                  $(".form-view").hide();
                  $(".msz-view").css("display", "flex");
                  
              });

              
              
});