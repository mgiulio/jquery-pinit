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
			w = $(this).width()
		;
		$('<a href="#">PinIt</a>')
			.css({//.offset($(this).offset())
				position: 'absolute',
				display: 'block',//?
				width: '50px',
				height: '20px',
				padding: '0px',
				'font-family': 'verdana',
				'font-style': 'italic',
				'font-size': '16px',
				'line-height': '1em',
				left: offset.left + w - 52,//px? 
				top: offset.top,
				'background-color': '#fff',
				'border-color': '#f0f0f0',
				'border-width': '1px',
				'border-style': 'solid',
				color: '#ff0000',
				'text-align': 'center',
				'font-weight': 'bold',
				'text-decoration': 'none'
			})
			.data('img', this)
			.click(function() {
				var img = $(this).data('img');
				window.open(
					'http://pinterest.com/pin/create/button/?' + $.param({url: window.location.href, media: img.src, description: img.title}), 
					'signin', 
					'width=665,height=300');
				$(this).remove();
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