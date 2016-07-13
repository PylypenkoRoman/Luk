$(document).ready(function(){
	$('.slider').slick({
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		dots: true
	});
//	$("#mobile-nav-btn").click( function(){
//		$(this).parent(".header").find(".nav").toggleClass("nav_open");
//	});
//
//var $menu = $(".nav");
//var width
//var height
//window.onresize = function () {
//    width = document.documentElement.clientWidth;
//    height = document.documentElement.clientHeight;
//}
//
//	$(window).scroll(function(){
//		var height = document.documentElement.clientHeight;
//		if ( width > 939 ){
//			if ( $(this).scrollTop() > 340 ){
//				$menu.addClass("nav_moved");
//			} else if($(this).scrollTop() <= height ){
//				$menu.removeClass("nav_moved");
//			}
//		} else{
//			$menu.removeClass("nav_moved");
//		}
//	});
});
