$('.home-carousel').owlCarousel({
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

$('.radio-wrap-lg').click(function () {
    $('.radio-wrap-lg').removeClass('active');
    $(this).addClass('active');
});