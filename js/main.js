$(document).ready(function() {
	
	// var weather;

	$("#submit-btn").click(function(event) {
		event.preventDefault();
		
		var cityname = $("#city").val();

		var weather = "https://api.openweathermap.org/data/2.5/find?q=" + cityname +  "&units=imperial&id=2543cb65a74c020d1fa27a213c4ff861&APPID=2543cb65a74c020d1fa27a213c4ff861";

		$.ajax({
		dataType: "jsonp",
		url: weather,
		success: function(data) {
			console.log(data);
			$("#temp").html(data.list[0].main.temp);
		}
	})	
	});




});