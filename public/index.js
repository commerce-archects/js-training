// client-side javascript
$(document).ready(function() { 
 	
 	$.ajaxSetup({xhrFields: { withCredentials: true } });

 	console.log("client ready");

	$('#show').on('click', function() {

		// GET request the json endpoint and iterate over the 'array'
	 	$.getJSON("http://localhost:4444/new/json", function( data ) {
	 		$(data.array).each(function(index, number) {
	 			$(".result").append("<br/>" + number);
	 		});
		});

	});
});