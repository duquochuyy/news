import { checkbox } from "./main.js";
var categoryParent = {
    kinhte: 'Kinh tế',
    thethao: 'Thể thao'
    // phapluat: 'Pháp luật',
    // doisong: 'Đời sống',
    // congnghe: 'Công nghệ',
    // suckhoe: 'Sức khỏe',
    // amnhac: 'Âm nhạc'
}

function addItemCategoryParent(nameValue, nameText) {
    $('#category__parent--add, #category__parent--edit').append($('<option>', {
        value: nameValue,
        text: nameText
    }));

}

function removeItemCategoryParent(nameValue, nameText) {
    $(`#category__parent--edit, #category__parent--add option[value=${nameValue}]`).remove();
}

$(function () {
    console.log('2');
    // edit
    
    function handleEdit() {
        var categorySelectedEdit = $(this).closest('tr').find('.category__name');
        var editModal = $('#editModal');

        $('tbody .selectedEdit').removeClass('selectedEdit');
        categorySelectedEdit.addClass('selectedEdit');

        var selectedEdit = $('.selectedEdit');
        var oldName = selectedEdit.find('p').text();

        // optionHidden = $(`#category__parent--select option:contains(${oldName})`).hide();
        

        console.log(oldName);

        // làm sạch modal
        $('#editModal').on('shown.bs.modal', function () {
            $('#category__name--edit').val(oldName);
            $('#category__name--edit').focus();
            $('#category__parent--edit').val($("#category__parent--edit option:first").val());
        })

        // sử lý sự kiện submit
        $('.form-edit').off('submit').on('submit', function(e) {
            e.preventDefault();
            var newName = $('#category__name--edit').val();
            console.log(newName);
            selectedEdit.text(newName);

            var parent = $('#category__parent--edit');
            if (parent.val()) {
                parent = $("#category__parent--edit option:selected").text();
                console.log(parent);
                selectedEdit.siblings('.category__parent').find('p').text(parent);
            }
            else {
                removeItemCategoryParent(convertString(oldName));
                addItemCategoryParent(convertString(newName), newName);
            }

            $('td.category__parent p').filter(function() {
                return $(this).text() === oldName;
            }).text(newName);

            $('#editModal').hide();
            $("body").removeClass("modal-open");
            $(".modal-backdrop.fade.show").remove();
        });

        // optionHidden = $(`#category__parent--select option:contains(${oldName})`).show();

    }
    
    $('#myTable').on('click', '.edit', handleEdit);

    // delete
    function handleDelete() {
        var categorySelectedDelete = $(this).closest('tr').find('.category__name')
        var deleteModal = $('#deleteModal');

        $('tbody .selectedDelete').removeClass('selectedDelete');
        categorySelectedDelete.addClass('selectedDelete');

        var nameDelete = $('.selectedDelete').find('p').text();


        $('#deleteModal').on('shown.bs.modal', function () {
            $('#deleteModal input').val('');
            $('#deleteModal input').focus();
        })

        var deleteModal = $("#deleteModal");
        deleteModal.find('.submit').on('click', function () {
            deleteModal.find("form").submit(() => {
                $('#deleteModal').hide();
                $("body").removeClass("modal-open");
                deleteModal.removeClass("show");
                $(".modal-backdrop.fade.show").remove();

                $('.selectedDelete').closest('tr').remove();

                $('tr').filter(function() {
                    return $(this).find('td.category__parent p').text() === nameDelete;
                }).remove();
            });
        })
    }

    $('#myTable').on('click', '.delete', handleDelete);
});

$(function () {
    function createNewRow(nameNewcategory, parentNewcategory, newNumber) {
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
        newRow.append($('<td>').addClass('category__name').append($('<p class="font-weight-bold">').text(nameNewcategory)));
        newRow.append($('<td>').addClass('category__parent').append($('<p class="font-weight-bold">').text(parentNewcategory)));
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

        var parent = $('#category__parent--add');
        if (parent.val()) {
            parent = $("#category__parent--add option:selected").text();
            
        } else {            
            parent = '';
            addItemCategoryParent(convertString(nameNewcategory), nameNewcategory);
        }
        var newRow = createNewRow(nameNewcategory, parent, newNumber);
        // console.log(newRow);
        
        checkbox.push(...$(newRow).find('input[type="checkbox"]'));
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