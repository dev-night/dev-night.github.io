$(document).ready(function() {

	// Dark Mode
	$('#dark_mode').on('click', function(e){
		$('body').toggleClass('solarized-dark');

		// Make button display current state
		$('#dark_mode').toggleClass('btn-default');
		$('#dark_mode').toggleClass('btn-success');

		// Display white icon
		$('.linkjuice__icon').toggleClass('linkjuice__icon-white');

		$('#logo').toggleClass('shadowfilter');
		$('#logo').toggleClass('shadowfilter_white');
	})


	// Automatic links
	linkjuice.init('.container',{selectors:['h2','h3','h4','h5'],icon:'<i class="linkjuice__icon"></i>'});


	// Scroll To Top
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 50,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


	$('.event-images').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image'
		// other options
	});
});
