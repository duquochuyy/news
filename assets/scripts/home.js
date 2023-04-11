$(document).ready(()=>{
    const menuBtn = $("#menu-btn");
    const contentCategories = $("#categories").html();
    // console.log(contentCategories);
    const mostViewed = $("#most-viewed");
    const newArticle = $("#new");
    if(menuBtn.css("display")=="block"){
        $("#categories").remove();
        newArticle.after(`<ul id="categories" class=" col-md-5">${contentCategories}</ul>`);
    }
    else{
        $("#categories").remove();
        mostViewed.after(`<ul id="categories" class=" col-md-5">${contentCategories}</ul>`)
    }
    $(window).resize(()=>{
        if(menuBtn.css("display")=="block"){
            $("#categories").remove();
            newArticle.after(`<ul id="categories" class=" col-md-5">${contentCategories}</ul>`);
        }
        else{
            $("#categories").remove();
            mostViewed.after(`<ul id="categories" class=" col-md-5">${contentCategories}</ul>`)
        }
    })

})