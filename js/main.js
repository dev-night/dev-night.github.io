$('#dark_mode').on('click', function(e){
	$('body').toggleClass('solarized-dark');

	// Make button display current state
	$('#dark_mode').toggleClass('btn-default');
	$('#dark_mode').toggleClass('btn-success');
})
