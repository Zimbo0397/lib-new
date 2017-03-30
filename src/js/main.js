
$('#genre-list li').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
});

var sortHolder = $('#sort-holder'),
	sortHolderTarg = sortHolder.find('li a'),
	holderTarg = $('#holderTarg');

	sortHolderTarg.each(function() {
		$(this).on('click', function() {
			var text = $(this).text();
			holderTarg.text(text);
		});
	});


$('#mobile-nav-btn').on('click', function(e) {
	e.preventDefault();
	$('#nav').toggleClass('open');
});

$('#sort-holder').on('click', function(e) {
	$(this).toggleClass('open');
});

$('#aside-open').on('click', function() {
	$('#aside-panel').addClass('open');
	$('.black-plate').addClass('active');
})

$('#aside-slose').on('click', function() {
	$('#aside-panel').removeClass('open');
	$('.black-plate').removeClass('active');
});

$('.black-plate').on('click', function() {
	$('#aside-panel').removeClass('open');
	$(this).removeClass('active');
});

$('#font-modal-open').on('click', function() {
	$('#font-modal').addClass('open');
	$('body').addClass('fixed');
});

$('#chapter-modal-open').on('click', function() {
	$('#chapter-modal').addClass('open');
	$('body').addClass('fixed');
});

$('#font-modal .close-btn').on('click', function() {
	$('#font-modal').removeClass('open');
	$('body').removeClass('fixed');
});
$('#chapter-modal .close-btn').on('click', function() {
	$('#chapter-modal').removeClass('open');
	$('body').removeClass('fixed');
});


$('.read-more').on('click', function(e) {
	e.preventDefault();
	$(this).closest('.author-desc').find('.text-holder').toggleClass('open');
	if($(this).closest('.author-desc').find('.text-holder').hasClass('open')) {
		$(this).text('Скрыть')
	} else {
		$(this).text('Читать далее')
	}
})