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
				jQuery('.nav.navbar-nav.navbar-right').addClass('nav-background');
			} else {
				jQuery('#back-to-top').addClass('hide');
				jQuery('.navbar-brand').addClass('hide');
				jQuery('.navbar-nav>li>a').addClass('white');
				jQuery('.nav.navbar-nav.navbar-right').removeClass('nav-background');
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