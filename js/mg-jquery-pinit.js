(function($){

var pics;

$.fn.pinit = function() {
	pics = this;
	$(window).load(run);
	return this;
};

function run() {
	pics.each(function() {
		var 
			offset = $(this).offset(),
			imgW = $(this).width()
		;
		
		$('<a href="#"></a>')
			.css({
				position: 'absolute',
				width: '135px',
				height: '135px',
				left: offset.left + imgW - 135,
				top: offset.top,
				'background-image': 'url(img/ribbon.png)',
			})
			.data('img', this)
			.click(function() {
				var 
					btn = $(this),
					img = btn.data('img');
				window.open(
					'http://pinterest.com/pin/create/button/?' + $.param({url: window.location.href, media: img.src, description: img.title}), 
					'signin', 
					'width=665,height=300');
				btn.remove();
				return false;
			})
			.attr('title', 'Pin it to your Pinterest boards')
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