$(document).ready(() => {

    VirtualSelect.init({
        ele: '#multipleSelect'
    });

    const edit = $(".edit");
    const editModal = $("#editModal");
    const roles = $("tbody tr td.role");
    let currentIdx = 0;

    // HANDLE edit
    [...edit].forEach((element, idx) => {
        $(element).click((e) => {
            editModal.css("display", "flex");
            currentIdx = idx;
        });
    });

    let inputElement = document.getElementById("category-assigned");

    let selectContent = document.getElementById('multipleSelect');
    selectContent.addEventListener('change', function () {
        inputElement.value = selectContent.value;
    });

    const formElement = document.getElementById('change-category');
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        const newCategory = inputElement.value.replace(/,/g, ", ");
        $(roles[currentIdx]).html(newCategory);
    });
})