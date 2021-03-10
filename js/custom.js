$(function () {
	"use strict"
	//banner slider;
	//    
	$('.banner_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		speed: 1000,
		dots: true,
	});
	
	// window scrolling 
		$(window).scroll(function () {

		var scrolling = $(this).scrollTop();

		if (scrolling >350) {
			$('.menubar').addClass("bg");
			
		} else {
			$('.menubar').removeClass('bg');
			
		}

		if (scrolling > 300) {
			backtotop.fadeIn();
		} else {
			backtotop.fadeOut();
		}
	});
	// Banner menu underline animate 
	$(window).scroll(function(){
			
	var scrollPos = $(document).scrollTop();
    $('.menu ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-65 <= scrollPos && refElement.position().top + refElement.height()> scrollPos){
            $('.menu ul li a').removeClass("menu_active");
            currLink.addClass("menu_active");
        }
        else{
            currLink.removeClass("menu_active");
        }
    });
		
	});

// menu ul li click smoth scroll .
	$('.menu ul li a,.toggle_menu li a,.quick_link li a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 0
				}, 1000);
				return false;
			}
		}
	});
	
	// Toggle menu open or close .
	$('.toggle').click(function () {
		$('.toggle_content').toggleClass('toggle_position');
	});


   
	$('.toggle').click(function () {
		$('.bars').toggleClass('times');
	});

	// Gallery 
	$(".gal_link").magnificPopup({
		type: 'image',
		// Activate gallery
		gallery: {
			enabled: true
		}
	});
	// colorful tabs
	//	$("#colorful").colorfulTab();
	$("#colorful-background-image").colorfulTab({
		theme: "flatline",
		backgroundImage: "true",
		overlayColor: "#002F68",
		overlayOpacity: "0.8"
	});

	$("#colorful").colorfulTab();

	$("#colorful-elliptic").colorfulTab({
		theme: "elliptic"
	});

	$("#colorful-flatline").colorfulTab({
		theme: "flatline"
	});

	//color picker 
	//colorpicker js;
	$('.color_icon').click(function () {
		$('.colorpicker').toggleClass('colorpicker_pos');
	});

	$('.colorpicker .green').click(function () {
		$('body').addClass('green').removeClass('blue').removeClass('yellow');
	});

	$('.colorpicker .blue').click(function () {
		$('body').addClass('blue').removeClass('green').removeClass('yellow');
	});

	$('.colorpicker .yellow').click(function () {
		$('body').addClass('yellow').removeClass('blue').removeClass('green');
	});
	$('.colorpicker .default').click(function () {
		$('body').addClass('default').removeClass('blue').removeClass('green').removeClass('yellow');
	});


  // testimonial slider 
	$('.slider').slick({
		
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		speed: 1000,
		dots: true,
		
		
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					
				}
				},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				}

			]
	});

// Back to top 
	var html_body = $('html,body');
	var backtotop = $('.back2top');

	backtotop.click(function () {
		html_body.animate({
			scrollTop: 0
		}, 1000);
	});


});