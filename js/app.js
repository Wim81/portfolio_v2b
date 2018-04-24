$(document).ready(function() {

	// Get the form.
	var form = $('.contact_form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
		console.log(formData);

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
            $(formMessages).css('border-color', "#084E96");
            $(formMessages).css('opacity', "1");
            $(formMessages).show();


			// Set the message text.
			$(formMessages).text(response);
            $(formMessages).fadeOut(5000);


			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
            $(formMessages).css('border-color', "#9b0408");
            $(formMessages).css('opacity', "1");
            $(formMessages).show();

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
                $(formMessages).fadeOut(5000);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
