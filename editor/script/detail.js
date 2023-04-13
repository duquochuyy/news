
$(".sidebar ul li").on('click', function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('content-1')) {
        $(".content div.content-active").addClass('content-hidden');
        $(".content div.content-active").removeClass('content-active');

        $(".content div.content-1").removeClass('content-hidden');
        $(".content div.content-1").addClass('content-active');
    }
    else if ($(this).hasClass('content-2')) {
        $(".content div.content-active").addClass('content-hidden');
        $(".content div.content-active").removeClass('content-active');

        $(".content div.content-2").removeClass('content-hidden');
        $(".content div.content-2").addClass('content-active');
    }
    else if ($(this).hasClass('content-3')) {
        $(".content div.content-active").addClass('content-hidden');
        $(".content div.content-active").removeClass('content-active');

        $(".content div.content-3").removeClass('content-hidden');
        $(".content div.content-3").addClass('content-active');
    }
})