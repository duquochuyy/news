$(document).ready(()=>{
   
    const articles = $("tbody tr");
    const publishBtn = $(".publish");
    const publishModal = $("#publishModal");
    
    // publish
   publishBtn.each((idx,btn)=>{
    $(btn).click(()=>{
        publishModal.css("display","flex");
        $("#publish-btn").click(()=>{
            $(articles[idx]).addClass("published");
            $(articles[idx]).find(".status").html("Đã xuất bản");
            publishModal.css("display","none");
        });
    })
   })
     //publish muti
     const checkbox = $('table tbody input[type="checkbox"]');
     $("#publish").click(()=>{
        publishModal.css("display","flex");
        $("#publish-btn").click(()=>{
            [...checkbox].forEach((e,idx)=>{
                if(e.checked){
                    publishModal.css("display","none");
                    $(articles[idx]).addClass("published");
                    $(articles[idx]).find(".status").html("Đã xuất bản");
                }
            })
            
        })
     })
     

})
