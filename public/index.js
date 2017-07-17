// client-side javascript
$(document).ready(function() { 
 	
 	console.log("client ready");

 	// GET request the json endpoint and iterate over the 'array'
 	$.get("/ca/v1/example/json", function( data ) {
 		$(data.array).each(function(number) {
 			$(".result").append("<br/>" + number);
 		});
	});

});