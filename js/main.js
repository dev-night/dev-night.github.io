$(document).ready(function() {
	$('#dark_mode').on('click', function(e){
		$('body').toggleClass('solarized-dark');

		// Make button display current state
		$('#dark_mode').toggleClass('btn-default');
		$('#dark_mode').toggleClass('btn-success');

		$('.linkjuice__icon').toggleClass('linkjuice__icon-white');
	})

	linkjuice.init('.container',{selectors:['h2','h3','h4','h5'],icon:'<i class="linkjuice__icon"></i>'});
});
