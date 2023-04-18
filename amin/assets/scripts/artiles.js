$(document).ready(()=>{
   
    const articles = $("tbody tr");
    const detete = $(".delete");
    const publishBtn = $(".publish");
    
    

    // delete
    [...detete].forEach((btn,idx)=>{
        $(btn).click(()=>{
            $("#deleteModal form").submit(()=>{
                $("body").removeClass("modal-open");
                $("#deleteModal").removeClass("show");
                $(".modal-backdrop.fade.show").remove();
                $(articles[idx]).remove();
                
            });
        })
    })
    // publish
   publishBtn.each((idx,btn)=>{
    $(btn).click(()=>{
        $("#publish-btn").click(()=>{
            $("body").removeClass("modal-open");
            $("#publishModal").removeClass("show");
            $(".modal-backdrop.fade.show").remove();
            $(articles[idx]).addClass("published");
            $(articles[idx]).find(".status").html("Đã xuất bản");
        });
    })
   })
     //publish muti
     const checkbox = $('table tbody input[type="checkbox"]');
     $("#publish").click(()=>{
        $("#publish-btn").click(()=>{
            [...checkbox].forEach((e,idx)=>{
                if(e.checked){
                    $("body").removeClass("modal-open");
                    $("#publishModal").removeClass("show");
                    $(".modal-backdrop.fade.show").remove();
                    $(articles[idx]).addClass("published");
                    $(articles[idx]).find(".status").html("Đã xuất bản");
                }
            })
            
        })
     })
     

})
