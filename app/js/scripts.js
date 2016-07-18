$(document).ready(function(){

	$(window).scroll(function () {

		if ($(window).scrollTop() > 525) {
			$('#nav').addClass('nav_fixed');
		}
		if ($(window).scrollTop() < 524) {
			$('#nav').removeClass('nav_fixed');
		}
	});

	$('.slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true
	});

	$('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
});
