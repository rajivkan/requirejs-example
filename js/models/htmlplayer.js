define(["Q", "underscore"], function (Q, _) {
	var mideaAssets;
	var init = function (mideaAssetsPath) {
		var deferred = Q.defer();
		require(["json!/" + mideaAssetsPath + "/video.manifest"], function (mideaAssetsObj) {
			mideaAssets = mideaAssetsObj;
			deferred.resolve(mideaAssetsObj);
		});
		return deferred.promise;
	};

	var getVideoList = function(){
		return mideaAssets;
	};

	return {
		init: init,
		getVideoList: getVideoList
	};
});