// $(document).ready(() => {
//     const edit = $(".edit");
//     const editModal = $("#editModal");
//     const users = $("tbody tr");
//     const dlt = $(".delete");
//     const deleteModal = $("#deleteModal");

//     edit.each((idx, e) => {
//         $(e).click(() => {
//             var oldName = $(e).closest('tr').find('.tag__name p');
//             console.log(oldName.text());
//             $('#tag__name--edit').val(oldName.text())

//             editModal.find(".submit").click((e) => {
//                 var newName = $('#tag__name--edit').val();
//                 console.log(newName);
//                 $("body").removeClass("modal-open");
//                 editModal.removeClass("show");
//                 $(".modal-backdrop.fade.show").remove();
//                 oldName.text(newName);
//             })
//         })
//     })
//     // delete
//     dlt.each((idx, btn) => {
//         $(btn).click(() => {
//             deleteModal.find("form").submit(() => {
//                 $("body").removeClass("modal-open");
//                 deleteModal.removeClass("show");
//                 $(".modal-backdrop.fade.show").remove();
//                 $(users[idx]).remove();

//             });
//         })
//     })
// })

$(function() {
    $('.edit').on('click', function() {
        var tagSelectedEdit = $(this).closest('tr').find('.tag__name')
        var editModal = $('#editModal');

        $('tbody .selectedEdit').removeClass('selectedEdit');
        tagSelectedEdit.addClass('selectedEdit');
        var oldName = $('.selectedEdit').find('p').text();

        console.log(oldName);
        $('#tag__name--edit').val(oldName);


        editModal.find('.submit').on('click', function() {
            var newName = $('#tag__name--edit').val();
            console.log(newName);
            $("body").removeClass("modal-open");
            editModal.removeClass("show");
            $(".modal-backdrop.fade.show").remove();
            $('.selectedEdit').text(newName);
        })
        // tagSelected.removeClass('selected');
    })

    $('.delete').on('click', function() {
        var tagSelectedDelete = $(this).closest('tr').find('.tag__name')
        var editModal = $('#deleteModal');

        $('tbody .selectedDelete').removeClass('selectedDelete');
        tagSelectedDelete.addClass('selectedDelete');

        var deleteModal = $("#deleteModal");
        editModal.find('.submit').on('click', function() {
            deleteModal.find("form").submit(() => {
                $("body").removeClass("modal-open");
                deleteModal.removeClass("show");
                $(".modal-backdrop.fade.show").remove();
                $('.selectedDelete').closest('tr').remove();
                // $(users[idx]).remove();
                
            });
        })
        // tagSelectedDelete.removeClass('selectedDelete');
    })
});
