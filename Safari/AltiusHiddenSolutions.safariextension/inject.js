// inject.js

var recvMsg = function(event) {
	window.postMessage('hide', window.location.origin);
};


var s1 = document.createElement('script');
s1.type = 'text/javascript';
s1.src = safari.extension.baseURI + 'bridge.js';
document.head.appendChild(s1);

//window.postMessage('What jQuery version?', window.location.origin);

safari.self.addEventListener('message', recvMsg, false);