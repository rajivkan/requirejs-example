require.config({
	config: {
		text: {
			useXhr: function (url, protocol, hostname, port) {
				return true;
			}
		}
	},
	paths: {
		json: 'libs/json',
		text: 'libs/text',
		domReady: 'libs/domReady',
		Q: 'libs/q',
		underscore: 'libs/underscore',
		mediaelement: 'libs/mediaelement'
	},
	shim: {
		mediaelement: {
			exports: 'mediaelementjs'
		},
		underscore: {
			exports: '_'
		}
	}
});

// bootstrap
require(["domReady"], function (domReady) {
	domReady(function () {
		require(["videowriteup"], function (htmlplayer) {
			htmlplayer.setSource("media"); //bundle to load
			play = htmlplayer;
		});
	});
});