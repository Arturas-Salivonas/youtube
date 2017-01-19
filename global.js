var channelName = 'GrowthEngineer';
$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			forUsername: channelName,
			key: 'AIzaSyAYqrh_EYmrdVwK2Zhm_QuzHemzVJmGWXw'},
			function(data){
					$.each(data.items, function(i, item){
						console.log(item);
						pid = item.contentDetails.relatedPlaylists.uploads;
						getVids(pid);
					})
				}
			);
			function getVids(pid){
				$.get(
					"https://www.googleapis.com/youtube/v3/playlistItems",{
						part: 'snippet',
						maxResults: 10,
						playlistId: pid,
						key: 'AIzaSyAYqrh_EYmrdVwK2Zhm_QuzHemzVJmGWXw'},
						function(data){
							var output;
								$.each(data.items, function(i, item){
									console.log(item);
									videoTitle = item.snippet.title;
									output = '<li>'+videoTitle+'</li>';

									$('#results').append(output);
								})
							}
						);
			}
});
