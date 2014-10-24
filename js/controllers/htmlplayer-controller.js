define(["views/htmlplayer-view"], function (htmlPlayerView) {
	var setHtmlplayer = function (htmlplayerModel) {
		htmlPlayerView.init(htmlplayerModel.getVideoList());
	};

	return {
		setHtmlplayer: setHtmlplayer
	};
});