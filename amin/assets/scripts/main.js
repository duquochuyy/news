$(document).ready(()=>{
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $("#main");
    const row = $("tbody tr");
    const detete = $(".delete");
    const publishBtn = $(".publish");
    console.log(publishBtn);
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
    // Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});

    // delete
    [...detete].forEach((btn,idx)=>{
        $(btn).click(()=>{
            $("#deleteModal form").submit(()=>{
                $("body").removeClass("modal-open");
                $("#deleteModal").removeClass("show");
                $(".modal-backdrop.fade.show").remove();
                $(row[idx]).remove();
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
            $(row[idx]).addClass("published");
            $(row[idx]).find(".status").html("Đã xuất bản");
        });
    })
   })
})
