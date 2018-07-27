$(document).ready(function() {
    $(".b_usa").click(function() {
        $("#usa").addClass('animated fadeIn');
		$("#usa").css('display', 'block');
		$("#japan").css('display', 'none');
    });
	$(".b_jap").click(function() {
		$("#japan").addClass('animated fadeIn');
		$("#japan").css('display', 'block');
		$("#usa").css('display', 'none');
    });
});