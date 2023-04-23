import { Validator } from "../../assets/scripts/Validator.js";
$(document).ready(function () {

    // LOADING HEADER
    const menuBtn = $("#menu-btn");
    const menu = $("#navbar-menu");
    const subnav = $(".subnav");
    const subnavMenu = $(".subnav-menu");
    const header = document.getElementById("app__header");
    const nav = document.getElementById("header__navbar");
    const breadcrumb = $("#breadcrumb");
    const breadcrumbTop= 50;
    const body = $("#app__body");
    if (menuBtn.css("display") == "block") {
        body.css("marginTop",`${105 + breadcrumb.height()}px`);
    }
    else {
        body.css("marginTop",`${120 + breadcrumb.height()}px`);
    }
    console.log(breadcrumb.css("top"));
    $(window).resize(function () {
        console.log(breadcrumb.css("top"));
        if (menuBtn.css("display") == "block") {
            menu.css("display", "none");
            body.css("marginTop",`${105 + breadcrumb.height()}px`);
            breadcrumb.css("top","90px");
        }
        else {
            menu.css("display", "block");
            body.css("marginTop",`${120 + breadcrumb.height()}px`);
            breadcrumb.css("top","103px");

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
    $("#app").click(() => {
        if (menuBtn.css("display") != "block")
            return;
        menu.css("display", "none")
    });
    $("#header__navbar").click((event) => event.stopPropagation())

    // close search
    $("#search-close").click(()=>{
        $("#search-modal").css("display","none");
    })
    $("#search-btn").click(()=>{
        $("#search-modal").css("display","flex");
    })
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
            nav.style.display = "flex";
            nav.style.top = "0px";
            header.style.boxShadow = "none";
            
            breadcrumb.css("top",`${breadcrumbTop + nav.offsetHeight}px`);
            

        } else {
            nav.style.display = "none";
            nav.style.top = "-30px";
            header.style.boxShadow = "0 0 5px #ccc";
            breadcrumb.css("top",`${breadcrumbTop}px`);
        }
        prevScrollpos = currentScrollPos;
    }

    // GENERATE SIGN UP PAGE
    const loginPage = $("#login-form");
    const signupPage = $("#signup-form");
    const modal = $("#form-modal");
    let role = 0;
    $("#guest").click(() => modal.css("display", "block"));
    // thêm vào để chạy thử
    $("#app__header-login").click(() => {
        document.title = "Đăng nhập";
        $("#signup-role").css("display", "block");
    })
    $("#btn-roles .btn-role").each((idx,e)=>{
        $(e).click(()=>{
            role = idx;
            $("#signup-role").css("display", "none");
            if(role!=0){
                loginPage.find(".form-direction").css("display","none");
            }
            loginPage.css("display", "block");
        })
    })
    // $("#app__header-login").click(() => {
    //     document.title = "Đăng nhập";
    //     loginPage.css("display", "block");
    // })
    
    $("#app__header-signup").click(() => {
        document.title = "Đăng ký";
        signupPage.css("display", "block");
    });
    $("#form-link__signup").click(() => {
        document.title = "Đăng ký";
        loginPage.css("display", "none");
        signupPage.css("display", "block");
    })
    $("#form-link__login").click(() => {
        document.title = "Đăng nhập";
        signupPage.css("display", "none");
        loginPage.css("display", "block");
    })
    $(".close-btn").click((e) => {

        document.title = "Trang chủ";
        modal.css("display", "none");
        loginPage.css("display", "none");
        signupPage.css("display", "none");
        $(".form-control").each((index, element) => $(element).removeClass("is-invalid"));
    });


    $("input").keypress((e)=>{
       if(String.fromCharCode(e.which)==" ")
          e.preventDefault();
    })
    // Validation for sign up and login form

    const registerForm = new Validator("#signup-form");

    registerForm.check(
        [registerForm.isRequired(".username"),
        registerForm.isPassword(".password"),
        registerForm.isEmail(".email"),
        registerForm.isConfirmPassword(".re-password")
        ]
    );
    registerForm.submit(".form-control");

    // // LOGIN FORM
    // const loginForm = new Validator("#login-form form");
    // loginForm.submit(".form-control");

    // LOGIN
    loginPage.submit(()=>{
       
        modal.css("display","none");
        header.classList.add("logged-in");
        if(role==1){
            loginPage.attr("action","./editor/listpage.html");
        }
        if(role==2){
            console.log(role)
            loginPage.attr("action","./amin/categoryManagement.html");
            
        }
      
    })
   


})