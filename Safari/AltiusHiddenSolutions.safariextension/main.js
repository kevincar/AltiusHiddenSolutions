// main.js

var clearAHS = function(event){
	safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(event.command);
};

safari.application.addEventListener("command", clearAHS, false);