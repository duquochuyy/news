
$(document).ready(function () {

    const menuBtn = $("#menu-btn");
    const menu = $("#navbar-menu");
    const subnav = $(".subnav");
    const subnavMenu = $(".subnav-menu");
    const header = document.getElementById("app__header");
    const nav = document.getElementById("header__navbar");
    
    $(window).resize(function(){
        if(menuBtn.css("display")=="block"){
            menu.css("display","none");
        }
        else{
            menu.css("display","block");
        }
    })
    // press menu button
    
    menuBtn.click(function () {
        
        if (menu.css("display") == "block") {
            menu.css("display", "none");
        }
        else {
            menu.css("display", "block");
        }
    });
    // close navbar
    $("#app").click(()=>{
        if(menuBtn.css("display")!="block")
            return;
        menu.css("display","none")
    });
    $("#header__navbar").click((event)=>event.stopPropagation())
    // expand sub menu
    $.each(subnav, (idx, element) => {
        $(element).mouseover(function () {
            $(subnavMenu[idx]).css("display", "flex");

        })
        $(element).mouseout(function () {

            $(subnavMenu[idx]).css("display", "none");

        })
    }
    )
    // Hide and show header base on scroll 
    window.onscroll = function () {
        scroll();
    };
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            nav.style.display="flex";
            nav.style.top = "0px";
            header.style.boxShadow ="none";
            
        } else {
            nav.style.display="none";
            nav.style.top = "-30px";
            header.style.boxShadow ="0 0 5px #ccc";
        }
        prevScrollpos = currentScrollPos;
    }

})