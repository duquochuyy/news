$(document).ready(()=>{
    const sidebarBtn = $("#sidebar-btn");
    const sidebar = $("#sidebar");
    const main = $("#main");
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
<<<<<<< HEAD
    // Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	
    
	$("#selectAll").click(function(){
        var checkbox = $('table tbody input[type="checkbox"]');
		// console.log(checkbox);
        if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
        checkbox.click(function(){
            if(!this.checked){
                $("#selectAll").prop("checked", false);
            }
        });
	});

    // var checkbox = $('table tbody input[type="checkbox"]');
	// checkbox.click(function(){
	// 	if(!this.checked){
	// 		$("#selectAll").prop("checked", false);
	// 	}
	// });

    $('#deleteModal').on('shown.bs.modal', function () {
        $('#deleteModal input').val('');
        $('#deleteModal input').focus();
    })

    // delete muti
    $("#delete").click(()=>{
        $("#deleteModal form").submit(()=>{
            //[...checkbox].forEach((e,idx)=>{
                var checkbox = $('table tbody input[type="checkbox"]')
                console.log(checkbox);
                checkbox.each(function(idx, e) {
                if(e.checked){
                    $("body").removeClass("modal-open");
                    $("#deleteModal").removeClass("show");
                    $(".modal-backdrop.fade.show").remove();
                    $('#deleteModal').hide();
                    // $(rows[idx]).remove();
                    e.closest('tr').remove();
                    $('#selectAll').prop('checked', false);
=======
    


    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
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
    const rows = $("tbody tr");
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
        $(btn).click(() => {
            currentIdx = idx;
            dltInput.val("");
            dltInput.removeClass("is-invalid");
            deleteModal.css("display", "flex");
            deleteModal.find(".submit").click(() => {
                if (!dltInput.val()) {
                    dltInput.addClass("is-invalid");
                    return;
>>>>>>> 077cddfddfe43cad2f1bf3bb38d17c705f0e0a05
                }

                rows[currentIdx].remove();
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
                    $(rows[idx]).remove();
                }

                deleteModal.css("display", "none");
            })

        })
    })
    
})
