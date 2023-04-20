$(function () {
    //$('.edit').on('click', function() {
    console.log('2')
    $('#myTable').on('click', '.edit', function () {
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

$(function () {
    function createNewRow(nameNewcategory, newNumber) {
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
        newRow.append($('<td>').addClass('category__name').append($('<p>').text(nameNewcategory)));
        newRow.append($('<td>').append($('<div>').addClass('d-flex table-control').append(
            $('<a>').attr('href', '#editModal').addClass('edit').attr('data-toggle', 'modal').append($('<i>').addClass('fa-solid fa-pencil')),
            $('<a>').attr('href', '#deleteModal').addClass('delete').attr('data-toggle', 'modal').append($('<i>').addClass('fa-solid fa-trash-can'))
        )));
        return newRow;
    }

    $('.form-add').submit(function (e) {
        e.preventDefault();
        var myTable = $('#myTable');
        var nameNewcategory = $('#category__name--add').val();
        var newNumber = myTable.find('tr').length - 1 + 1;

        var newRow = createNewRow(nameNewcategory, newNumber);
        // console.log(newRow);
        myTable.prepend(newRow);

        $('#addModal').hide();
        $("body").removeClass("modal-open");
        $(".modal-backdrop.fade.show").remove();

    })

    $('#add').on('click', function () {
        $('#addModal').on('shown.bs.modal', function () {
            $('#category__name--add').val('');
            $('#category__name--add').focus();
        })


    })
})

function convertString(str) {
    // Chuyển đổi chuỗi sang lowercase
    str = str.toLowerCase();

    // Loại bỏ dấu
    var from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ";
    var to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], "gi"), to[i]);
    }

    // Loại bỏ khoảng trắng
    str = str.replace(/\s/g, '');

    return str;
}

function search(keyword) {
    console.log(keyword);
    $('#myTable tbody tr').each(function (idx, e) {
        var name = $(e).find('.category__name p').text();
        console.log(name);
        var convertedName = convertString(name);
        var convertedKeyword = convertString(keyword);
        if (convertedName.indexOf(convertedKeyword) >= 0) {
            e.style.display = 'table-row';
        } else {
            e.style.display = 'none';
        }
    });
};