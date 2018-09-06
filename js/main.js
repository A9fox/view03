$(function() {

	var link = $('.m-nav-btn'),
		menu = $('.m-nav'),
		closeNav = $('.close-nav'),
		hover = $('.hover');

		function active() {
			menu.toggleClass('m-nav__active');
			hover.addClass('show');
			$('body,html').addClass('disable-scroll');
		}

		function noActive(){
			menu.toggleClass('m-nav__active');
			hover.removeClass('show');
			$('body,html').removeClass('disable-scroll');
		}

	hover.on('click', noActive);
	link.on('click', active);
	closeNav.on('click', noActive);
});