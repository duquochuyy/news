
$(document).ready(function () {

    const menuBtn = $("#menu-btn");
    const menu = $("#navbar-menu");
    const subnav = $(".subnav");
    const subnavMenu = $(".subnav-menu");
    // press menu button
    menuBtn.click(function () {
        if (menu.css("display") == "block") {
            menu.css("display", "none");
        }
        else {
            menu.css("display", "block");
        }
    });
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

})