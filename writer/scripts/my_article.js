
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
        var categorySelectedEdit = $(this).closest('tr').find('.category__name')
        console.log(categorySelectedEdit);
        var editModal = $('#editModal');

        $('tbody .selectedEdit').removeClass('selectedEdit');
        // alert('huy')
        categorySelectedEdit.addClass('selectedEdit');
        var oldName = $('.selectedEdit').find('p').text();

        console.log(oldName);

        $('#editModal').on('shown.bs.modal', function () {
            $('#category__name--edit').val(oldName);
            $('#category__name--edit').focus();
        })

        $('.form-edit').submit(function (e) {
            e.preventDefault();
            var newName = $('#category__name--edit').val();
            console.log(newName);
            $('.selectedEdit').text(newName);

            $('#editModal').hide();
            $("body").removeClass("modal-open");
            $(".modal-backdrop.fade.show").remove();

        })
    })

    //$('.delete').on('click', function() {
    $('#myTable').on('click', '.delete', function () {
        var categorySelectedDelete = $(this).closest('tr').find('.category__name')
        var editModal = $('#deleteModal');

        $('tbody .selectedDelete').removeClass('selectedDelete');
        categorySelectedDelete.addClass('selectedDelete');

        $('#deleteModal').on('shown.bs.modal', function () {
            $('#deleteModal input').val('');
            $('#deleteModal input').focus();
        })

        var deleteModal = $("#deleteModal");
        editModal.find('.submit').on('click', function () {
            deleteModal.find("form").submit(() => {
                $('#deleteModal').hide();
                $("body").removeClass("modal-open");
                deleteModal.removeClass("show");
                $(".modal-backdrop.fade.show").remove();
                $('.selectedDelete').closest('tr').remove();

            });
        })
    })
});