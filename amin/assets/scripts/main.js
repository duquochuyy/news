$(document).ready(()=>{
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const rows = $("tbody tr");
    const main = $("#main");
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
    // delete muti
    $("#delete").click(()=>{
        $("#deleteModal form").submit(()=>{
            [...checkbox].forEach((e,idx)=>{
                if(e.checked){
                    $("body").removeClass("modal-open");
                    $("#deleteModal").removeClass("show");
                    $(".modal-backdrop.fade.show").remove();
                    $(rows[idx]).remove();
                }
            })
            
        })
    })

})
