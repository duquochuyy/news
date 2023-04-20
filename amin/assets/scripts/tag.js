z$(function () {
    //$('.edit').on('click', function() {
    $('#tableTag').on('click', '.edit', function () {
        var tagSelectedEdit = $(this).closest('tr').find('.tag__name')
        console.log(tagSelectedEdit);
        var editModal = $('#editModal');

        $('tbody .selectedEdit').removeClass('selectedEdit');
        // alert('huy')
        tagSelectedEdit.addClass('selectedEdit');
        var oldName = $('.selectedEdit').find('p').text();

        console.log(oldName);

        $('#editModal').on('shown.bs.modal', function () {
            $('#tag__name--edit').val(oldName);
            $('#tag__name--edit').focus();
        })

        $('.form-edit').submit(function (e) {
            e.preventDefault();
            var newName = $('#tag__name--edit').val();
            console.log(newName);
            $('.selectedEdit').text(newName);

            $('#editModal').hide();
            $("body").removeClass("modal-open");
            $(".modal-backdrop.fade.show").remove();

        })
    })

    //$('.delete').on('click', function() {
    $('#tableTag').on('click', '.delete', function () {
        var tagSelectedDelete = $(this).closest('tr').find('.tag__name')
        var editModal = $('#deleteModal');

        $('tbody .selectedDelete').removeClass('selectedDelete');
        tagSelectedDelete.addClass('selectedDelete');

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

$(function () {
    function createNewRow(nameNewTag, newNumber) {
        var newRow = $('<tr>');
        newRow.append($('<td>').addClass('').append(
            $('<span>').addClass('custom-checkbox').append(
                $('<input>').attr({
                    type: 'checkbox',
                    id: `checkbox${newNumber}`,
                    name: 'options[]',
                    value: `${newNumber}`
                }),
                $('<label>').attr('for', `checkbox${newNumber}`)
            )
        ));
        newRow.append($('<td>').addClass('tag__name').append($('<p>').text(nameNewTag)));
        newRow.append($('<td>').append($('<div>').addClass('d-flex').append(
            $('<a>').attr('href', '#editModal').addClass('edit').attr('data-toggle', 'modal').append($('<i>').addClass('fa-solid fa-pencil')),
            $('<a>').attr('href', '#deleteModal').addClass('delete').attr('data-toggle', 'modal').append($('<i>').addClass('fa-solid fa-trash-can'))
        )));
        return newRow;
    }

    $('.form-add').submit(function(e) {
        e.preventDefault();
        var myTableTag = $('#tableTag');
        var nameNewTag = $('#tag__name--add').val();
        var newNumber = myTableTag.find('tr').length - 1 + 1;

        var newRow = createNewRow(nameNewTag, newNumber);
        // console.log(newRow);
        myTableTag.prepend(newRow);

        $('#addModal').hide();
        $("body").removeClass("modal-open");
        $(".modal-backdrop.fade.show").remove();

    })

    $('#add').on('click', function () {
        $('#addModal').on('shown.bs.modal', function () {
            $('#tag__name--add').val('');
            $('#tag__name--add').focus();
        })

        
    })
})

function search(keyword) {
    console.log(keyword);
    $('#tableTag tbody tr').each(function(idx, e) {
        var name = $(e).find('.tag__name p').text();
        console.log(name);
        if (name.indexOf(keyword) >= 0) {
            e.style.display = 'table-row';
        }
        else {
            e.style.display = 'none';
        }
    });
};