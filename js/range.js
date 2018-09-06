$(function () {

	function action() {
		$(this).children('.list').toggleClass('selected');
		return false;
	}

	$('.btn-sort').on('click', action);


	function choose() {
		var str = '';
		console.log($(this).parent().children('a'));
		$(this).parent().parent().children('a').text(str + $(this).text() );
	}

	$('.list li').on('click', choose);
});