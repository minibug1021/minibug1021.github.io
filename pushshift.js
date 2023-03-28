function getMostRecent(){
	$.getJSON('https://api.pushshift.io/reddit/search/submission?q=reddit&order=desc&before=1667260800&size=1', function(data) {
		date = data["data"][0]["utc_datetime_str"];
		document.getElementById("date").innerHTML = date;
		document.title = document.title + ", " + date;
	});
}

getMostRecent();
