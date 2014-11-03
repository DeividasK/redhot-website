jQuery(document).ready(function () {
	jQuery('.navbar').addClass('hideContent');
	if ($(window).width() < 768) {
		jQuery('.navbar-nav>li>a').removeClass('white');
	}
	jQuery(window).scroll(function () {
		 if ($(window).width() > 768) {
			if (jQuery(window).scrollTop() > $(window).height()-70) {
				jQuery('#back-to-top').removeClass('hide');
				jQuery('.navbar-brand').removeClass('hide');
				jQuery('.navbar-nav>li>a').removeClass('white');
			} else {
				jQuery('#back-to-top').addClass('hide');
				jQuery('.navbar-brand').addClass('hide');
				jQuery('.navbar-nav>li>a').addClass('white');
			}
		} else {
			if (jQuery(window).scrollTop() > $(window).height()-70 && $(window).width() < 768) {
				jQuery('#back-to-top').removeClass('hide');
				jQuery('.navbar-brand').removeClass('hide');
			} else {
				jQuery('#back-to-top').addClass('hide');
				jQuery('.navbar-brand').addClass('hide');
			}
		}
	});
});