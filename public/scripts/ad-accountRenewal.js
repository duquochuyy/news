$(document).ready(() => {

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

    const formElement = document.getElementById('renew-account');
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        var x = document.getElementById("due-date").value;
        var date = x.split("-");
        var newDate = date[2] + '/' + date[1] + '/' + date[0];

        $(roles[currentIdx]).html(newDate);
    });
})