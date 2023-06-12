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
    $("#role").change((event) => {
        const val = $("#role option:selected").html();
        $(roles[currentIdx]).html(val);
    });

    editModal.find(".submit").click(() => editModal.css("display", "none"));

})



    // ĐỂ ĐÂY RÙI MỐT TÌM LỖI SAU :((
//    ; [...edit].forEach((element, idx) => {

//         $(element).click((e) => {
//             editModal.css("display", "flex");
//             currentIdx = idx; //neu khong co cai nay thi se sai???
//             $("#role").change((event) => {
//                 const val = $("#role option:selected").html();
//                 $(roles[currentIdx]).html(val);
//             });

//         });
//     });