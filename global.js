function show_my_videos(data){
	html = ['<ul id="youtube-videos">'];
	$(data.feed.entry).each(function(entry){
		url = this.link[0].href;
		url_thumbnail = this.media$group.media$thumbnail[3].url;
		description = this.media$group.media$description.$t;
		html.push('<li><a href="'+url+'">');
		html.push('<img src="'+url_thumbnail+'" alt="'+description+'">');
		html.push('</a></li>');
	});
	html.push('</ul>');
	$("#videos").html(html.join(''));
}
$.ajax({
	type: "GET",
	url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyAYqrh_EYmrdVwK2Zhm_QuzHemzVJmGWXw",
	cache: false,
	dataType:'jsonp',
	success: function(data){
		show_my_videos(data);
  }
});
