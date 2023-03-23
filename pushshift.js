function getMostRecent(){
	$.getJSON('https://api.pushshift.io/reddit/search/submission?q=reddit&order=desc&before=1667260800&size=1', function(data) {
		if (data["data"][0]["created_utc"] == 1609851630) {
			updateOverride();
		} else {
			date = data["data"][0]["utc_datetime_str"];
			document.getElementById("date").innerHTML = date;
			document.title = date;
		}
	});
}

function updateOverride(){
	$.getJSON('https://api.pushshift.io/reddit/search/submission?q=reddit&order=desc&before=1609459200&size=1', function(data) {
		date = data["data"][0]["utc_datetime_str"];
		document.getElementById("date").innerHTML = date;
		document.title = date;
	});
}

getMostRecent();
