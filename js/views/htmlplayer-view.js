define(["mediaelement", "underscore", "models/htmlplayer"], function(mediaelement, _, htmlplayer) {
	
	var init = function(videoLists) {
		initPlayerControls(videoLists);
	};

	var initPlayerControls = function(videoLists) {
		var vidObject = _.findWhere(videoLists.videos, {id:1});
		document.getElementById("player1").src= vidObject.videoPath;
		MediaElement('player1', {success: function(me) {
		  me.play();
		}});
	};
	
	return {
		init: init
	};
});