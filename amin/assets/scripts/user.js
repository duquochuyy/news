$(document).ready(()=>{
    const edit = $(".edit");
    const editModal = $("#editModal");
    const users = $("tbody tr");
    const dlt = $(".delete");
    const deleteModal = $("#deleteModal");

   edit.each((idx,e)=>{
        $(e).click(()=>{
            editModal.find(".submit").click((e)=>{
                $("body").removeClass("modal-open");
                editModal.removeClass("show");
                $(".modal-backdrop.fade.show").remove();
               $(users[idx]).find(".role").html(editModal.find("#role option:selected").html());
                
            })
        })
    })
     // delete
     dlt.each((idx,btn)=>{
        $(btn).click(()=>{
            deleteModal.find("form").submit(()=>{
                $("body").removeClass("modal-open");
                deleteModal.removeClass("show");
                $(".modal-backdrop.fade.show").remove();
                $(users[idx]).remove();
                
            });
        })
    })
})