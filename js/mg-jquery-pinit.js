(function($) {

var 
	maxZindex = 9999
;

$.fn.pinit = function(cfg) {
		var img = new Image();
		cfg.pics = this;
		img.onload = function() { 
			var
				btnImgUrl = cfg.btnImgUrl,
				btnImgWidth = this.width,
				btnImgHeight = this.height
			;
			
			cfg.pics.filter('img').each(function() {
				var 
					img = $(this),
					offset = img.offset()
				;
				
				if (img.data('pinned'))
					return;
				img.data('pinned', true);
				
				$('<a href="#"></a>')
					.css({
						position: 'absolute',
						'z-index': maxZindex, //(tmp = parseInt(img.css('z-index'))) !== NaN ? tmp + 1 : 'auto',
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
							img = btn.data('img'),
							title = img.title || img.alt || ''
						;
						window.open(
							'http://pinterest.com/pin/create/button/?' + $.param({url: window.location.href, media: img.src, description: title}), 
							'signin', 
							'width=665,height=300');
						btn.remove();
						return false;
					})
					.attr('title', 'Pin it to your Pinterest boards')
					.appendTo('body')
				;
			});
		};
		
		img.src = cfg.btnImgUrl;
	
	return this;
};

})(jQuery);