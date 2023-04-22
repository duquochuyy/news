
$("#sidebar ul li").on('click', function() {
    $("#sidebar ul li.active").removeClass('active');
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
    else if ($(this).hasClass('content-4')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-4").removeClass('content-hidden');
        $(".bodyarea div.content-4").addClass('content-active');
    }
})

$(document).ready(()=>{
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $(".bodyarea");
    // SIDE BAR
    sidebarBtn.click(()=>{
        if(sidebar.css("display")=="block"){
            sidebar.css("display","none");
            // main.css("padding-left","20px");
            main.removeClass('col-lg-9');
            main.addClass('col-lg-12')
        }
        else{
            sidebar.css("display","block");
            main.removeClass('col-lg-12');
            main.addClass('col-lg-9')
        }
    })
})

$(function () {
    //$('.edit').on('click', function() {
    console.log('2')
    $('.bodyarea').on('click', '.edit', function () {
        console.log('3')
        var articleSelectedEdit = $(this).closest('.bodyarea__item');
        console.log(articleSelectedEdit);

        $('.bodyarea .selectedEdit').removeClass('selectedEdit');
        articleSelectedEdit.addClass('selectedEdit');
        var name = $('.selectedEdit').find('.text-primary');
        var oldName = name.text();
        console.log(oldName);

        $('#editModal').on('shown.bs.modal', function () {
            $('#title__name--edit').val(oldName);
            $('#title__name--edit').focus();
        })

        $('.form-edit').submit(function (e) {
            e.preventDefault();
            var newName = $('#title__name--edit').val();
            console.log(newName);
            name.text(newName);

            $('#editModal').modal('hide');
            $("body").removeClass("modal-open");
            $(".modal-backdrop.fade.show").remove();

        })
    })

    $('.bodyarea').on('click', '.delete', function () {
        var articleSelectedDelete = $(this).closest('.bodyarea__item');
        var deleteModal = $('#deleteModal');

        $('.bodyarea .selectedDelete').removeClass('selectedDelete');
        articleSelectedDelete.addClass('selectedDelete');

        $('#deleteModal').on('shown.bs.modal', function () {
            $('#deleteModal input').val('');
            $('#deleteModal input').focus();
        })

        deleteModal.find('.submit').on('click', function () {
            deleteModal.find("form").submit(() => {
                $('#deleteModal').modal('hide');
                $("body").removeClass("modal-open");
                $(".modal-backdrop.fade.show").remove();
                $('.selectedDelete').remove();

            });
        })
    })
});