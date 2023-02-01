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

if ($(window).width() > 768) {
    $(document).ready(function(){
        $(".accordion").click(function(){
           // alert("m;lm")
        //    $(".accordion").removeClass("active");
           $(this).toggleClass("active");
    //       $(".accordion").next(".panel").css("max-height", "0");
    //       $(this).next(".panel").css("max-height", "100%");
          // $(".accordion").next(".panel").removeClass("autoHeight");
           $(this).next(".panel").toggleClass("autoHeight");
        });
    });
    }
    if ($(window).width() < 767) {
        $(document).ready(function(){
            $(".accordion").click(function(){
            
                var myClass = $(this).attr("class").split(' ')[1];
                
                if(myClass == 'active'){
                  $(".accordion").removeClass("active");
                }else{
                    $(".accordion").next(".panel").removeClass("autoHeight");
                    $(".accordion").next(".panel").removeClass("noheight");
                    $(".accordion").removeClass("active");
                    $(this).toggleClass("active");   
                }
                
                $(this).next(".panel").toggleClass("autoHeight");
                $(this).next(".panel").toggleClass("noheight");
            });
    });
    }


    $('.pln-genrate-otp').click(function () {
        $('.otp-type-block').show();
    });

    $('.gen-otp').click(function () {
        $('.popup-wrapp').show();
    });

    $('.modal-close').click(function () {
        $('.popup-wrapp').hide();
    });

    // Show more and Less more
$('.read-more').click(function() {
    $(this).prev('.more-text').toggle();
     $(this).parent('p').toggleClass('opened');
    if ($(this).text() == "read more") {
      $(this).text("read less")
    } else {
      $(this).text("read more")
    }
  
  
    $(this).attr("type","current");
    var current = this;
  
    $(".read-more").each(function() {
      var ele = this;
      if(!ele.type){
      if ($(this).text() == "read less") {
        $(this).prev('.more-text').toggle();
     $(this).parent('p').toggleClass('opened');
    if ($(this).text() == "read more") {
      $(this).text("read less")
    } else {
      $(this).text("read more")
    }
      }
    }
      
    });
  
    $(current).attr("type","");
  });