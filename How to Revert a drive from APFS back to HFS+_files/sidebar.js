jQuery(function($) {
    $('.showSingle').click(function() {
        $('.targetDiv').addClass('hideYourself');
        $('#div' + $(this).attr('target')).slideToggle();
    });
});