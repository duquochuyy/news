
$(".sidebar ul li").on('click', function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('content-1')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-1").removeClass('content-hidden');
        $(".bodyarea div.content-1").addClass('content-active');
    }
    else if ($(this).hasClass('content-2')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-2").removeClass('content-hidden');
        $(".bodyarea div.content-2").addClass('content-active');
    }
    else if ($(this).hasClass('content-3')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-3").removeClass('content-hidden');
        $(".bodyarea div.content-3").addClass('content-active');
    }
})