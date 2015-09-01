$(document).ready(function(){
	
	/* MAKE ANCHOR LINKS SMOOTHLY SCROLL */

	$('a.anchor, .footnotereverse a, sup.footnote a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

	/* MAKE META BAR SIT AT BOTTOM IF IT'S A SHORT PAGE */

	var window_height = $(window).height();
	var document_height = $(document).height();

	if(document_height <= window_height) {
		$('#meta-bar').addClass("bottom");
	}

	else {
		$('#meta-bar .back-to-top').show();
	}

	/* CALENDAR TOGGLE */

	$('ul.calendar .title').click(function(){
		$(this).closest('li').find('.body').slideToggle('fast');
	});
	
});