var init = function() {
	/// FINAL
	$("div.title").each(function(){this.hidden=true;});
	$("input.correct").each(function(){this.className="_correct";this.checked=false;});
	$("input.wrong").each(function(){this.className="_wrong";this.checked=false;});
	$("div.solution").each(function(){this.hidden=true;});
	$("div.form-item.fright").each(function(){this.hidden=true;});
	$("div.item-block").each(function(){
		var parent = this;
		$(this).find("h3").on("click", function(){
			if($(parent).find("input._correct").length > 0) {
				$(parent).find("div.title").each(function(){this.hidden=false;});
				$(parent).find("input._correct").each(function(){this.checked=true;this.className="correct"});
				$(parent).find("input._wrong").each(function(){this.checked=true;this.className="wrong"});
				$(parent).find("div.solution").each(function(){this.hidden=false;});
				$(parent).find("div.form-item.fright").each(function(){this.hidden=false;});
			}
			else {
				$(parent).find("div.title").each(function(){this.hidden=true;});
				$(parent).find("input.correct").each(function(){this.className="_correct";this.checked=false;});
				$(parent).find("input.wrong").each(function(){this.className="_wrong";this.checked=false;});
				$(parent).find("div.solution").each(function(){this.hidden=true;});
				$(parent).find("div.form-item.fright").each(function(){this.hidden=true;});
			}
		});
	});
};

window.addEventListener('message', function (e) {

    if (e.origin != window.location.origin)
        return;
    if (e.data == 'What jQuery version?') {
        e.source.postMessage('Version ' + $.fn.jquery, window.location.origin);
    }
    else if(e.data == 'hide') {
    	init();
    }
}, false);