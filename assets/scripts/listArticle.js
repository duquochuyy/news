$(document).ready(() => {
    // Lấy địa chỉ URL hiện tại
    var url = window.location.href;

    // Kiểm tra xem có tham số 'modal=true' trong URL hay không
    if (url.indexOf('modal=true') !== -1) {
        // Kích hoạt modal
        $('#premium-modal').modal('show');
    }

    const formElement = document.getElementById('renew-account');
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        $("payment-modal").modal('show');
    });
})