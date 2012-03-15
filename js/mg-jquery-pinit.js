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
		var
			iframeUrl = window.location.protocol + '//d3io1k5o0zdpqr.cloudfront.net/pinit.html'
			qs = $.param({
				url: pageUrl,
				media: 'http://mgiulio.altervista.org/wp-content/uploads/2012/01/Playing-with-Open-Data-a-simple-viewer-for-DecoroUrbano.org_.jpg',//this.src,
				description: this.title,
				layout: 'none'
			}),
			iframe = $('<iframe></iframe>')
				.attr({
					src: iframeUrl + '?' + qs,
					scrolling: 'no',
					allowtransparency: true,
					frameborder: 0
				})
				.css({
					position: 'absolute',
					right: '2px',
					top: '2px',
					border: 'none',
					width: '43px',
					height: '20px'
				}),
			$this = $(this)
		;
		$this
			.wrap(
				$('<div class="mg-container" style="position: relative;"></div>')
					.css({width: $this.width(), height: $this.height()})
			)
			.after(iframe)
		;
	});
}

})(jQuery);