// background.js

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {file: "jquery-3.2.1.min.js"}, function(){
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	});
});