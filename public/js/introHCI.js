// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	// console.log("map");
 	initGestures();
 	// console.log("gestures");
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function () {
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event) {
			// get the id of the event source
			var targetIDPrefix = event.target.id;
			console.log("got prefix:" + targetIDPrefix);
			//show bio
			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
	// add your code here
	$("#rsvpForm").submit(function (event) {
		event.preventDefault();
		console.log("submitting form...");
		var rsvpEmail = $('#rsvpEmail').val();

		// send the POST request
		console.log("here"); 
		$.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);

	});

	function postCallback(res) {
		console.log("postcallback"); 
		alert("RSVP form successfully submitted");
		//clear form 
		console.log("cleared form"); 
		$('#rsvpEmail').val('');
	}
}
