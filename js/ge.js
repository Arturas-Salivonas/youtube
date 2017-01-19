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
									videoId = item.snippet.resourceId.videoId;
									output = '<div class="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; -webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;" ><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></div>';

									$('#results').append(output);
								})
							}
						);
			}
});
