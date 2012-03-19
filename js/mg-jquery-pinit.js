(function($){

var pics;

$.fn.pinit = function() {
	pics = this;
	$(window).load(run);
	return this;
};

function run() {
	var pageUrl = window.location.href;
	
	pics.each(function() {
		var offset = $(this).offset();
		$('<a href="#">PinIt</a>')
			.css({//.offset($(this).offset())
				position: 'absolute',
				left: offset.left, 
				top: offset.top 
			})
			.data('img', this)
			.click(function() {
				var img = $(this).data('img');
				window.open(
					'http://pinterest.com/pin/create/button/?' + $.param({url: pageUrl, media: img.src, description: img.title}), 
					'signin', 
					'width=665,height=300');
			})
			.appendTo('body')
		;
	});
}

})(jQuery);

/*
function run() {
	var 
		pageUrl = window.location.href,
		pinitBtn = $('<a href="#">PinIt</a>')
			.css({
				position: 'absolute',
			})
			.click(function() {
				console.log('About to pin it ...');
			})
			.hide()
			.appendTo('body')
	;
	
	pics
		.mouseenter(function() {
			console.log('mouseenter');
			var o = $(this).offset();
			pinitBtn
				.css({left: o.left, top: o.top})
				//.offset($(this).offset())
				.show()
			;
		})
		.mouseleave(function() {
			console.log('mouseleave');
			pinitBtn.hide();
		});
}*/