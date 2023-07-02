$(document).ready(function () {
$(".sidebar ul li").on('click', function() {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('content-1')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-1").removeClass('content-hidden');
        $(".bodyarea div.content-1").addClass('content-active');
    }
    else if ($(this).hasClass('content-2')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-2").removeClass('content-hidden');
        $(".bodyarea div.content-2").addClass('content-active');
    }
    else if ($(this).hasClass('content-3')) {
        $(".bodyarea div.content-active").addClass('content-hidden');
        $(".bodyarea div.content-active").removeClass('content-active');

        $(".bodyarea div.content-3").removeClass('content-hidden');
        $(".bodyarea div.content-3").addClass('content-active');
    }
})


document.getElementById('inputImage').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.querySelector('.form-control').value = fileName;
});

$(function() {
    $('.edit-icon').on('click', function() {
        var infoText = $(this).closest('.inner2').siblings('.inner1').find('.info-text');
        var editIcon = $(this);
        var editInput = $(this).closest('.inner2').siblings('.inner1').find('.edit-input');
        
        infoText.hide();
        editIcon.hide();
        editInput.removeClass('d-none');
        editInput.val(infoText.text()).show().focus();
    });

    $('.edit-input').on('blur', function() {
        var infoText = $(this).siblings('.info-text');
        var editIcon = $(this).closest('.inner1').siblings('.inner2').find('.edit-icon');
        var editInput = $(this);

        infoText.text(editInput.val()).show();
        editIcon.show();
        editInput.hide();
        editInput.addClass('d-none');
    });
});

$('#profile-form').submit(false);
$('#btnSubmit').click(function() {
   const name = $('#name').text() == 'Thêm tên người dùng' ? undefined : $('#name').text();
   const email = $('#email').text();
   const phone = $('#phone').text() == 'Thêm số điện thoại' ? undefined : $('#phone').text();
   const sex = $('input[name="sex"]:checked').val() == '1' ? true : false;
   const birthday = new Date($('#dateInput').val());

   const formData = new FormData();
   formData.append("avatar", document.getElementById("inputImage").files[0]);
   formData.append("name", name);
   formData.append("email", email);
   formData.append("phone", phone);
   formData.append("sex", sex);
   formData.append("birthday", birthday);

   $.ajax({
       type: "POST",
       enctype: 'multipart/form-data',
       url: "/user/setting",
       data: formData,
       processData: false,
       contentType: false,
       cache: false,
       success: function(data) {
           if (data == 'success') {
               window.location.href = '/user/setting';
           } else {
               alert("Có lỗi không thể cập nhật thông tin cá nhân");
           }
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           alert("Có lỗi không thể cập nhật thông tin cá nhân");
       }
   });
});

function previewAvatar(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('avatar-preview').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inputImage").change(function() {
    previewAvatar(this);
});
// var myDateInput = document.getElementById('dateInput');

// myDateInput.addEventListener('blur', function(){
//     var dateValue = myDateInput.value; 

//     var parts = dateValue.split('-');
//     var day = parts[2];
//     var month = parts[1];
//     var year = parts[0];

//     var formattedDate = day + '/' + month + '/' + year;
//     myDateInput.value = formattedDate;
// });
});
