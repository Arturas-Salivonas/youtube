var channelName = 'GrowthEngineer';
$(document).ready(function()){
	$.get(
		"GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=GrowthEngineer&key=AIzaSyAYqrh_EYmrdVwK2Zhm_QuzHemzVJmGWXw",{
			part: 'contentDetails',
			forUsername: channelName,
			key: 'AIzaSyAYqrh_EYmrdVwK2Zhm_QuzHemzVJmGWXw'},
			function(data){
					$.each(data.items, function{i, item}{
						console.log(item);
					})
			};
)};
