define(["controllers/htmlplayer-controller", "models/htmlplayer"], function (htmlPlayerController, htmlplayer) {

	var setSource = function (mideaAssetsPath) {
		//load manifest
		htmlplayer.init(mideaAssetsPath).then(function () {
			//init player
			htmlPlayerController.setHtmlplayer(htmlplayer);
		});
	};

	var destroy = function () {
		//TODO : cleanup
	};


	return {
		setSource: setSource,
		destroy: destroy
	};
});