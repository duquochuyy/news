
    // Register form
    export class Validator {
        constructor(form) {
            this.formElement = $(form);
            this.setPrevent = true;
            this.setPreventArray = [];
        }
        set setPrevent(val) {
            this.prevent = val;
        }
        set setPreventArray(array) {
            this.preventArray = array;
        }
        check(rules) {
            this.rules = [...rules];
            this.setPreventArray = new Array(this.rules.length);
            this.rules.forEach((element, index) => {
                const input = this.formElement.find(element.selector);
                input.blur((e) => {
                    this.preventArray[index] = element.test(input);
                    if (!this.preventArray[index])
                        input.addClass("is-invalid");
                });
                input.focus(() => {
                    input.removeClass("is-invalid");
                })
            });

        }
        isRequired(selector) {
            return {
                selector: selector,
                test: function (element) {
                    const message = element.next();
                    let username = element.val().toString();
                    username = username.replace(/\s*$/, "");
                    if (username === "") {
                        message.html(`Vui lòng nhập tên đăng nhập!`);
                        return false;
                    }
                    if (username.match(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)) {

                        message.html('Tên đăng nhập không được có ký tự đặc biệt!');
                        return false;
                    }
                    if (!username.match(/\s/g)) {
                        return true;
                    }
                    message.html('Tên đăng nhập không được có khoảng trắng');
                    return false;
                }
            }
        }
        isEmail(selector) {
            return {
                selector: selector,
                test: function (element) {
                    const message = element.next();
                    const email = element.val().replace(/\s*$/, "");
                    if (email === "") {
                        message.html(`Vui lòng nhập email!`);
                        return false;
                    }
                    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
                        return true;
                    message.html("Email của bạn không hợp lệ!");
                    return false;

                }
            }
        }
        isPassword(selector) {
            return {
                selector: selector,
                test: function (element) {
                    const message = element.next();
                    const pw = element.val();
                    let check = true;
                    if (pw === "") {
                        message.html("Vui lòng nhập mật khẩu!");
                        return false;
                    }
                    message.html("Mật khẩu không hợp lệ!");
                    if (pw.match(/(?=.)/))
                        if (pw.length < 6) {
                            message.html("Mật khẩu phải chứa ít nhất 6 ký tự");
                            return false;
                        }
                    if (pw.match(/\s/)) {
                        message.html("Mật khẩu không được có khoảng trắng");
                        return false;
                    }
                    if (!pw.match(/[0-9]/)) {
                        message.html("Mật khẩu phải gồm ít nhất một chữ số ");
                        return false;
                    }
                    if (!pw.match(/[a-z]/)) {
                        message.html("Mật khẩu phải chứa ít nhất một chữ in thường");
                        return false;
                    }
                    if (!pw.match(/[A-Z]/)) {
                        message.html("Mật khẩu phải chứa ít nhất một chữ in hoa");
                        return false;
                    }
                    return true;
                }
            }

        }
        isConfirmPassword(selector) {

            // const pw = this.rules.find(element => console.log(element));
            // console.log(pw);
            return {
                selector: selector,
                test: function (element) {

                    const message = element.next();
                    const confirm = element.val();
                    if (confirm === "") {
                        message.html("Vui lòng nhập mật khẩu!")
                        return false;
                    }
                    const parent = element.parent()
                    const pw = parent.prev().find("input");
                    if (confirm === pw.val())
                        return true;
                    message.html("Mật khẩu không khớp!");
                    return false;
                }
            }
        }
        submit(input) {
            this.formElement.submit((e) => {
                e.stopPropagation();
                console.log("submit");
                const inputs = [...$(input)];
                inputs.forEach((element, index) => {
                    if ($(element).val() == "") {
                        $(element).addClass("is-invalid");
                        console.log($(element))
                        $(element).next().html(`Vui lòng nhập thông tin!`);
                        this.setPrevent = false;
                    }
                    else {
                        if (typeof this.preventArray[index] == "undefined")
                            $(element).removeClass("is-invalid");
                        this.preventArray[index] = true;
                    }
                })

                this.setPrevent = this.prevent && !this.preventArray.includes(false);
                if (!this.prevent){
                    e.preventDefault();
                }
            });


        }

    }
    
    
