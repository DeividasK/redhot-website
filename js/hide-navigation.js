jQuery(document).ready(function () {
	jQuery('.navbar').addClass('hideContent');			
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() > $(window).height()-1) {
			jQuery('#back-to-top').removeClass('hide');
			jQuery('.navbar-brand').removeClass('hide');
			jQuery('.navbar-nav>li>a').removeClass('white');
		} else {
			jQuery('#back-to-top').addClass('hide');
			jQuery('.navbar-brand').addClass('hide');
			jQuery('.navbar-nav>li>a').addClass('white');
		}
	});
});