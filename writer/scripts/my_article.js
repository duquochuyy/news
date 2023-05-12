// chỉnh sửa thu nhỏ sidebar
$(() => {
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $("#bodyarea");
    // SIDE BAR
    sidebarBtn.click(()=>{
        if(sidebar.css("display")=="block"){
            sidebar.css("display","none");
            // main.css("padding-left","20px");
            main.removeClass('col-lg-9 col-md-9');
            main.addClass('col-lg-12 col-md-12');
        }
        else{
            sidebar.css("display","block");
            main.removeClass('col-lg-12 col-md-12');
            main.addClass('col-lg-9 col-md-9');
        }
    })
})

// xử lí việc chỉnh sidebar 
const listSidebar = $('#sidebar ul li');
const listContent = $('#bodyarea .content');
listSidebar.each((index, item) => {
    item.addEventListener('click', (e) => {
        $("#sidebar ul li.active").removeClass('active');
        let contentActive = $("#bodyarea div.content-active");
        contentActive.addClass('content-hidden');
        contentActive.removeClass('content-active');
        $(item).addClass('active');
        listContent.eq(index).removeClass('content-hidden');
        listContent.eq(index).addClass('content-active');
    });
});


// chỉnh sửa tiêu đề bài viết
const checkEdit = () => {
    $('#bodyarea .edit').each((index, item) => {
        // console.log(item);
        item.addEventListener('click', (e) => {
            $('#bodyarea .selectedEdit').removeClass('selectedEdit');
            const articleSelectedEdit = $(e.currentTarget).closest('.bodyarea__item');
            console.log(articleSelectedEdit);   
            articleSelectedEdit.addClass('selectedEdit');
            const titleElement = articleSelectedEdit.find('.text-primary');

            $('#editModal').on('shown.bs.modal', function () {
                $('#editModal #title__name--edit').val(titleElement.text());
                $('#editModal #title__name--edit').focus();
            })

            $('.form-edit').submit((e) => {
                e.preventDefault();
                const newName = $('#title__name--edit').val();
                // console.log(newName);
                titleElement.text(newName);

                $('#editModal').modal('hide');
                $("body").removeClass("modal-open");
                $(".modal-backdrop.fade.show").remove();

            })        
        })
    })
}

// xóa một bài viết
const checkDelete = () => {
    $('#bodyarea .delete').each((index, item) => {
        console.log(item);
        item.addEventListener('click', (e) => {
            $('#bodyarea .selectedDelete').removeClass('selectedDelete');
            const articleSelectedDelete = $(e.currentTarget).closest('.bodyarea__item');
            console.log(articleSelectedDelete);   
            articleSelectedDelete.addClass('selectedDelete');

            $('#deleteModal').on('shown.bs.modal', function () {
                
                $('#deleteModal #reason').val('').focus();
            })

            $('.form-delete').submit((e) => {
                e.preventDefault();
                const reason = $('#reason').val();
                console.log(reason);

                $('#deleteModal').modal('hide');
                $("body").removeClass("modal-open");
                $(".modal-backdrop.fade.show").remove();
                articleSelectedDelete.remove();
            })        
        })
    })
}

$(() => {
    checkEdit();
    checkDelete();
})