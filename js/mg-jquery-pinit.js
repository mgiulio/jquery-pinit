(function($){

var 
	pics,
	cfg
;

$.fn.pinit = function(_cfg) {
	pics = this;
	cfg = _cfg;
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
				'background-image': 'url(' + cfg.btnImgUrl + ')',
				outline: 'none'
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