// chỉnh sửa thu nhỏ sidebar
$(() => {
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $("#bodyarea");
    // SIDE BAR
    sidebarBtn.click(() => {
        if (sidebar.css("display") == "block") {
            sidebar.css("display", "none");
            // main.css("padding-left","20px");
            main.removeClass('col-lg-9 col-md-9');
            main.addClass('col-lg-12 col-md-12');
        }
        else {
            sidebar.css("display", "block");
            main.removeClass('col-lg-12 col-md-12');
            main.addClass('col-lg-9 col-md-9');
        }
    })
})

// xử lí việc chỉnh sidebar 
// const listSidebar = $('#sidebar ul li');
// const listContent = $('#bodyarea .content');
// listSidebar.each((index, item) => {
//     item.addEventListener('click', (e) => {
//         $("#sidebar ul li.active").removeClass('active');
//         let contentActive = $("#bodyarea div.content-active");
//         contentActive.addClass('content-hidden');
//         contentActive.removeClass('content-active');
//         $(item).addClass('active');
//         listContent.eq(index).removeClass('content-hidden');
//         listContent.eq(index).addClass('content-active');
//     });
// });


// chỉnh sửa tiêu đề bài viết
// const checkEdit = () => {
//     $('#bodyarea .edit').each((index, item) => {
//         // console.log(item);
//         item.addEventListener('click', (e) => {
//             $('#bodyarea .selectedEdit').removeClass('selectedEdit');
//             const articleSelectedEdit = $(e.currentTarget).closest('.bodyarea__item');
//             console.log(articleSelectedEdit);   
//             articleSelectedEdit.addClass('selectedEdit');
//             const titleElement = articleSelectedEdit.find('.text-primary');

//             $('#editModal').on('shown.bs.modal', function () {
//                 $('#editModal #title__name--edit').val(titleElement.text());
//                 $('#editModal #title__name--edit').focus();
//             })

//             $('.form-edit').submit((e) => {
//                 e.preventDefault();
//                 const newName = $('#title__name--edit').val();
//                 // console.log(newName);
//                 titleElement.text(newName);

//                 $('#editModal').modal('hide');
//                 $("body").removeClass("modal-open");
//                 $(".modal-backdrop.fade.show").remove();

//             })        
//         })
//     })
// }

// xóa một bài viết
// const checkDelete = () => {
//     $('#bodyarea .delete').each((index, item) => {
//         console.log(item);
//         item.addEventListener('click', (e) => {
//             $('#bodyarea .selectedDelete').removeClass('selectedDelete');
//             const articleSelectedDelete = $(e.currentTarget).closest('.bodyarea__item');
//             console.log(articleSelectedDelete);   
//             articleSelectedDelete.addClass('selectedDelete');

//             $('#deleteModal').on('shown.bs.modal', function () {

//                 $('#deleteModal #reason').val('').focus();
//             })

//             $('.form-delete').submit((e) => {
//                 e.preventDefault();
//                 const reason = $('#reason').val();
//                 console.log(reason);

//                 $('#deleteModal').modal('hide');
//                 $("body").removeClass("modal-open");
//                 $(".modal-backdrop.fade.show").remove();
//                 articleSelectedDelete.remove();
//             })        
//         })
//     })
// }

// $(() => {
//     checkEdit();
//     checkDelete();
// })

document.querySelectorAll('#pagination li').forEach((li, index) => {
    li.classList.add('pagination__item');
})
document.querySelectorAll('#pagination a').forEach((a, index) => {
    a.classList.add('pagination__link')
})

// edit article

VirtualSelect.init({
    ele: '#inputCategory',
});

VirtualSelect.init({
    ele: '#inputTag',
});


tinymce.init({
    selector: '#inputContent',
    height: 200,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_css: [
        'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        'https://www.tiny.cloud/css/codepen.min.css'
    ],
    content_style: 'body { line-height: 1.2; }',
    // forced_root_block: false 
});

$(async () => {
    const btnSubmit = document.querySelector('#btnSubmit');
    const form = document.querySelector('#postArticle-form');
    const textHidden = document.querySelector('#hiddenContent');
    const inputImage = document.querySelector('#inputImage');
    const previewImage = document.querySelector('#previewImage');

    const title = document.querySelector('#inputTitle');
    const abstract = document.querySelector('#inputSumary')
    const content = tinymce.get('inputContent')
    const categories = document.querySelector('#inputCategory')
    const tags = document.querySelector('#inputTag')
    textHidden.value = content;

    // hiển thị ảnh minh họa
    inputImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    // gửi lại bài viết
    btnSubmit.addEventListener('click', async (e) => {
        // e.preventDefault();

        const title = document.querySelector('#inputTitle').value;
        const abstract = document.querySelector('#inputSumary').value
        const content = tinymce.get('inputContent').getContent().replace(/<\/?p>/g, '')
        const categories = document.querySelector('#inputCategory').value
        const tags = document.querySelector('#inputTag').value
        textHidden.value = content;

        console.log(categories, tags);

        if (!title || !abstract || !content || !categories.length || !tags.length) {
            return;
        }

        btnSubmit.disabled = true;
        const formData = new FormData();
        formData.append('mainImg', inputImage.files[0]); // có thê ko thay đổi hình
        formData.append('title', title)
        formData.append('abstract', abstract)
        formData.append('content', content)
        formData.append('categories', categories)
        formData.append('tags', tags)



        try {
            const response = await fetch(`/writer/my-articles/edit/${articleId}`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                window.location.href = '/writer';
            }
        } catch (error) {
            console.error('Lỗi khi tải lên hình ảnh:', error);
        }
    })

})

