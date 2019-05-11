'use strict';

(function($){
	$(document).ready(function() {
		// Isotope
		var coords, map, marker;

		$('.header__nav-link').click(function() {
			$('.header__nav-link').removeClass('header__nav-link--active');
			$(this).addClass('header__nav-link--active');
		});

		$('.portfolio__blocks').isotope({
			itemSelector: '.blocks__img',
			percentPosition: true,
			masonry: {
				columnWidth: '.sizer',
				gutter: 7
			}
		});
		$('.portfolio__item').click(function() {
			$('.portfolio__item').removeClass('portfolio__item--active');
			$(this).addClass('portfolio__item--active');
		});


		$('.portfolio__filters').on('click', 'li', function() {

			var val = $(this).data('filter');
			$('.portfolio__blocks').isotope({filter: val})
		});

		$('.team__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: false
		});

		$('.testimonials__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: false
		});


		coords = {lat: 50.442408, lng: 30.519655};

		map = new google.maps.Map(
			document.getElementById('map'), {
				zoom: 16,
				center: coords,
				gestureHandling: 'cooperative'
			});

		marker = new google.maps.Marker({
			position: coords,
			map: map,
			icon: 'images/marker.png',
			draggable: true
		});
	});
})(jQuery);