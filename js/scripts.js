jQuery(function() {

let my_switch = false;

	$('#my_button').click(function () {

	if ( my_switch == false ) {
		my_switch = true;

		$(this).html('Click for Puppy Girl').removeClass('btn-primary').addClass('btn-success');

		$('#my_image').attr('src', 'images/puppy_boy.jpeg');
	} else {
		my_switch = false;

		$(this).html('Click for Puppy Boy').removeClass('btn-primary').addClass('btn-primary');

		$('#my_image').attr('src', 'images/puppy_girl.jpeg');
	}

	// if ( $('.square.alt').hasClass('red') ) {
	// 	$('.square.alt').removeClass('red');
	// } else {
	// 	$('.square.alt').addClass('red');
	// }


});

});
