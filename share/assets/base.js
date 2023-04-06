// press menu button
$(document).ready(function(){
    let menuBtn = $("#menu-btn");
    const menu = $("#navbar-menu");
    console.log(menu);
    function showMenu(){
        if(menu.css("display")=="block"){
            menu.css("display","none");
        }
        else{
            menu.css("display","block");
        }

    }
    menuBtn.click(function(){
        if(menu.css("display")=="block"){
            menu.css("display","none");
        }
        else{
            menu.css("display","block");
        } 
    });
    
})