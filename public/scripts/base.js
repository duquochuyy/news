import { Validator } from "./Validator.js";
$(document).ready(function () {

    // LOADING HEADER
    const menuBtn = $("#menu-btn");
    const menu = $("#navbar-menu");
    const subnav = $(".subnav");
    const subnavMenu = $(".subnav-menu");
    const header = document.getElementById("app__header");
    const nav = document.getElementById("header__navbar");
    const breadcrumb = $("#breadcrumb");
    const breadcrumbTop = 50;
    const body = $("#app__body");
    if (menuBtn.css("display") == "block") {
        body.css("marginTop", `${105 + breadcrumb.height()}px`);
    }
    else {
        body.css("marginTop", `${120 + breadcrumb.height()}px`);
    }
   
    $(window).resize(function () {
        if (menuBtn.css("display") == "block") {
            menu.css("display", "none");
            body.css("marginTop", `${105 + breadcrumb.height()}px`);
            breadcrumb.css("top", "90px");
        }
        else {
            menu.css("display", "block");
            body.css("marginTop", `${120 + breadcrumb.height()}px`);
            breadcrumb.css("top", "103px");

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
    $("#search-close").click(() => {
        $("#search-modal").css("display", "none");
    })
    $("#search-btn").click(() => {
        $("#search-modal").css("display", "flex");
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

            breadcrumb.css("top", `${breadcrumbTop + nav.offsetHeight}px`);


        } else {
            nav.style.display = "none";
            nav.style.top = "-30px";
            header.style.boxShadow = "0 0 5px #ccc";
            breadcrumb.css("top", `${breadcrumbTop}px`);
        }
        prevScrollpos = currentScrollPos;
    }

    // GENERATE SIGN UP PAGE
    const loginPage = $("#login-form");
    const signupPage = $("#signup-form");
    const modal = $("#form-modal");
    const signupRole = $("#signup-role");
    let role = 0;
    $("#guest").click(() => modal.css("display", "block"));
    // thêm vào để chạy thử
    $("#app__header-login").click(() => {
        document.title = "Đăng nhập";
        signupRole.css("display", "block");
    })
    $("#form-modal").click((e) => {
        if ([...signupRole].every(f => !f.contains(e.target)) && signupRole.css("display") == "block") {
            $("#form-modal").css("display", "none");
            signupRole.css("display", "none");
        }
    })
    $("#btn-roles .btn-role").each((idx, e) => {
        $(e).click(() => {
            role = idx;
            signupRole.css("display", "none");
            if (role != 0) {
                loginPage.find(".form-direction").css("display", "none");
            }
            // loginPage.css("display", "block");
            window.location.href = `/auth/login?role=${e.value}`;
        })
    })
    $("#app__header-signup").click(() => {
        document.title = "Đăng ký";
        // signupPage.css("display", "block");
        signupRole.css("display", "none");
        window.location.href = "/auth/register";
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


    $(".no-space").keypress((e) => {
        if (String.fromCharCode(e.which) == " ")
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
    loginPage.submit(() => {

        modal.css("display", "none");
        header.classList.add("logged-in");
        if (role == 1) {
            loginPage.attr("action", "./browsingList");
        }
        if (role == 2) {
            loginPage.attr("action", "./ad-userManagement");

        }

    })

    // search
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = searchInput.value;
        const searchUrl = `${window.location.origin}/search?q=${encodeURIComponent(keyword)}`;
        window.location.href = searchUrl;
    })

    //payment
    // const paymentBtn = document.querySelector("#payment-btn");
    // const paymentForm = document.querySelector("#payment-form");

    // paymentForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log('hello1');
    //     const payUrl =  processPayment();
    //     console.log(payUrl);
    //     window.open(payUrl, '_blank');
    // })
})

// const processPayment = () => {
//     //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
//     //parameters
//     var accessKey = 'F8BBA842ECF85';
//     var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
//     var orderInfo = 'pay with MoMo';
//     var partnerCode = 'MOMO';
//     var redirectUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
//     var ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
//     var requestType = "payWithMethod";
//     var amount = '50000';
//     var orderId = partnerCode + new Date().getTime();
//     var requestId = orderId;
//     var extraData = '';
//     var paymentCode = 'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==';
//     var orderGroupId = '';
//     var autoCapture = true;
//     var lang = 'vi';

//     //before sign HMAC SHA256 with format
//     //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
//     var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
//     //puts raw signature
//     console.log("--------------------RAW SIGNATURE----------------")
//     console.log(rawSignature)
//     //signature
//     const crypto = require('crypto');
//     var signature = crypto.createHmac('sha256', secretKey)
//         .update(rawSignature)
//         .digest('hex');
//     console.log("--------------------SIGNATURE----------------")
//     console.log(signature)

//     //json object send to MoMo endpoint
//     const requestBody = JSON.stringify({
//         partnerCode: partnerCode,
//         partnerName: "Test",
//         storeId: "MomoTestStore",
//         requestId: requestId,
//         amount: amount,
//         orderId: orderId,
//         orderInfo: orderInfo,
//         redirectUrl: redirectUrl,
//         ipnUrl: ipnUrl,
//         lang: lang,
//         requestType: requestType,
//         autoCapture: autoCapture,
//         extraData: extraData,
//         orderGroupId: orderGroupId,
//         signature: signature
//     });
//     //Create the HTTPS objects
//     const https = require('https');
//     const options = {
//         hostname: 'test-payment.momo.vn',
//         port: 443,
//         path: '/v2/gateway/api/create',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': Buffer.byteLength(requestBody)
//         }
//     }
//     //Send the request and get the response
//     const req = https.request(options, res => {
//         console.log(`Status: ${res.statusCode}`);
//         console.log(`Headers: ${JSON.stringify(res.headers)}`);
//         res.setEncoding('utf8');
//         res.on('data', (body) => {
//             console.log('Body: ');
//             console.log(body);
//             console.log('resultCode: ');
//             console.log(JSON.parse(body).resultCode);
//             const payUrl = JSON.parse(body).payUrl;
//         });
//         res.on('end', () => {
//             console.log('No more data in response.');
//         });
//     })

//     req.on('error', (e) => {
//         console.log(`problem with request: ${e.message}`);
//     });
//     // write data to request body
//     console.log("Sending....")
//     req.write(requestBody);
//     req.end();

//     return payUrl;
// };
