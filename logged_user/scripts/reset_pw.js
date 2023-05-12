$(() => {
    $('#resetPWForm').on('submit', (e) => {
        e.preventDefault();
        const oldPW = $('#inputCurrentPW').val();
        const newPW = $('#inputNewPW').val();
        const confirmNewPW = $('#inputConfirmNewPW').val();
        const pwError = $('#passwordError');
        const confirmPWError = $('#confirmPasswordError');
        
        if (newPW.length < 8) {
            pwError.removeClass('d-none')
            pwError.addClass('d-block')
        }
        else {
            pwError.removeClass('d-block')
            pwError.addClass('d-none')

        }
        if (newPW !== confirmNewPW) {
            confirmPWError.removeClass('d-none')
            confirmPWError.addClass('d-block')
        }
        else {
            confirmPWError.removeClass('d-block')
            confirmPWError.addClass('d-none')
        }
        if (newPW.length >= 8 && newPW === confirmNewPW) {
            this.submit();
        }
    });
});