// function () {
// 					function resizeBaseFontSize() {
// 						var rootHtml = document.documentElement,
// 							deviceWidth = rootHtml.clientWidth;
// 						if (deviceWidth > 720) {
// 							deviceWidth = 720;
// 						}
// 						rootHtml.style.fontSize = deviceWidth /7.2 + "px";
// 					}
// 					resizeBaseFontSize();
// 					window.addEventListener("resize", resizeBaseFontSize, false);
// 					window.addEventListener("orientationchange", resizeBaseFontSize, false);
// 					}
			(function () {
				function resizeBaseFontSize() {
					var rootHtml = document.documentElement,
						deviceWidth = rootHtml.clientWidth;
						if (deviceWidth > 720) {
							deviceWidth = 720;
							}
							rootHtml.style.fontSize = deviceWidth /7.2 + "px";
						}
						resizeBaseFontSize();
						window.addEventListener("resize", resizeBaseFontSize, false);
						window.addEventListener("orientationchange", resizeBaseFontSize, false);
					})();

		// 	function fontSize(){
				
		// 		var deviceWidth=document.documentElement.clientWidth>720?720:document.documentElement.clientWidth;
		// 		document.documentElement.style.fontSize=(deviceWidth/7.2)+"px";
		// 	}
		// 	fontSize();
		// 	window.onresize=fontSize;
		