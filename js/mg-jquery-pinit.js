(function($){

var 
	pics,
	btnImgUrl,
	btnImgWidth,
	btnImgHeight
;

$.fn.pinit = function(cfg) {
	pics = this;
	
	btnImgUrl = cfg.btnImgUrl;
	var img = new Image();
	img.onload = function() { 
		btnImgWidth = this.width;
		btnImgHeight = this.height;
		$(window).load(run); 
	};
	img.src = btnImgUrl;
	
	return this;
};

function run() {
	pics.each(function() {
		var 
			img = $(this),
			offset = img.offset()
		;
			
		$('<a href="#"></a>')
			.css({
				position: 'absolute',
				width: btnImgWidth + 'px',
				height: btnImgHeight + 'px',
				left: offset.left + parseInt(img.css('border-left-width')) + parseInt(img.css('padding-left')) + img.width() - btnImgWidth,
				top: offset.top + parseInt($(this).css('border-top-width')) + parseInt($(this).css('padding-top')),
				'background-image': 'url(' + btnImgUrl + ')',
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