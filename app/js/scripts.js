$(document).ready(function(){
	$('a[href*=#]').bind("click", function(e){
		alert("lol");
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});
$(document).ready(function(){
	$('.slider').slick({
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		dots: true
	});
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
});

