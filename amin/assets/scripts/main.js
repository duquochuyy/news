 export const checkbox = $();
$(document).ready(()=>{
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $("#main");
    const tmp = $('table tbody input[type="checkbox"]');
    [...tmp].forEach((element)=>checkbox.push(element));
    // SIDE BAR
    sidebarBtn.click(()=>{
        if(sidebar.css("display")=="block"){
            sidebar.css("display","none");
            main.css("padding-left","20px");
        }
        else{
            sidebar.css("display","block");
            main.css("padding-left","270px");
        }
    })
    $(window).resize(()=>{
        if($(window).width()<768){
            sidebar.css("display","none");
            main.css("padding-left","20px");
        }
        else{
            sidebar.css("display","block");
            main.css("padding-left","270px");
        }
    })


    // Select/Deselect checkboxes
  
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });

    // close modal
    const dlt = $(".delete");
    const deleteModal = $("#deleteModal");
    const modal = $(".myModal");
    const closeModal = $(".myModal .close");
    let currentIdx = 0;
    const cancelBtn = $(".cancel-btn"); 

      [...modal].forEach((element, idx) => {
        $(closeModal[idx]).click(() => $(element).css("display", "none"));
        $(cancelBtn[idx]).click(() => $(element).css("display", "none"));

    });


    // delete
    const dltInput = $("#deleteModal textarea.required");
    dlt.each((idx, btn) => {
        $(btn).click((e) => {
            currentIdx = idx;
            dltInput.val("");
            dltInput.removeClass("is-invalid");
            deleteModal.css("display", "flex");
            deleteModal.find(".submit").click(() => {
                if (!dltInput.val()) {
                    dltInput.addClass("is-invalid");
                    return;
                }
                $(...$(e.target).closest("tr")).remove();
                deleteModal.css("display", "none");

            })
        })
    })

    // delete muti
    $("#delete").click(() => {
        deleteModal.css("display", "flex");
        dltInput.val("");
        deleteModal.find(".submit").click(() => {
            [...checkbox].forEach((e, idx) => {
                if (dltInput.val() == "") {
                    dltInput.addClass("is-invalid");
                    return;
                }
                if (e.checked) {
                    console.log(e)
                    $(...$(e).closest("tr")).remove();
                }

                deleteModal.css("display", "none");
            })

        })
    })
})
// export  {checkbox}