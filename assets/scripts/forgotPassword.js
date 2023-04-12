$(document).ready(() => {
    const forgotFields = $(".forgot-field")
    const inputs = $(".forgot-control");
    const newPassword = $("#forgot-pw");
    const confirmPw = $("#forgot-repw");
    const submits = $(".submit-btn");
    const maxPage = 2;
    const otp = $("#otp-code");
    inputs.each((idx, element) => {
        $(element).blur((e) => {
            if ($(element).val() != "") {
                return;
            }
            $(element).next().html("Vui lòng nhập thông tin!");
            $(element).addClass("is-invalid");
        })
        $(element).focus(() => $(element).removeClass("is-invalid"))

    })
    newPassword.blur(() => {
        newPassword.removeClass("is-invalid");
        if (!isPassword(newPassword))
            newPassword.addClass("is-invalid");
    })
    confirmPw.blur(() => {
        confirmPw.removeClass("is-invalid");
        if (!isConfirmPassWord(newPassword, confirmPw))
            confirmPw.addClass("is-invalid");
    });

    otp.keypress((e) => {
        let keyNum = String.fromCharCode(e.which);
        if (keyNum < '0' || keyNum > '9')
            e.preventDefault();
    });
    function isPassword(element) {
        const message = element.next();
        const pw = element.val();
        if (pw.length < 6) {
            message.html("Mật khẩu phải chứa ít nhất 6 ký tự!");
            return false;
        }
        if (pw.match(/\s/)) {
            message.html("Mật khẩu không được có khoảng trắng!");
            return false;
        }
        if (!pw.match(/[0-9]/) || !pw.match(/[a-z]/) || !pw.match(/[A-Z]/)) {
            message.html("Mật khẩu phải gồm ít nhất một chữ số, một chữ in hoa và một chữ in thường!");
            return false;
        }
        return true;
    }
    function isConfirmPassWord(pw, confirmPw) {
        if (pw.val() === confirmPw.val())
            return true;
        confirmPw.next().html("Mật khẩu không khớp");
        return false;
    }
  

    // handle on submit
    submits.each((idx) => {
        $(submits[idx]).click(() => {
            const inputs = $(forgotFields[idx]).find(".forgot-control");
            if ([...inputs].find((input) => $(input).val() === "") || [...inputs].find((input) => $(input).hasClass("is-invalid")))
                return;
            if (idx < maxPage) {
                $(forgotFields[idx]).css("display","none");
                $(forgotFields[idx+1]).css("display","block");
            }
        })

    })


})