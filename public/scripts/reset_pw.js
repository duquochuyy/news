$(() => {
    $('#resetPWForm').on('submit', (e) => {
        const oldPW = $('#inputCurrentPW').val();
        const newPW = $('#inputNewPW').val();
        const confirmNewPW = $('#inputConfirmNewPW').val();
        const pwError = $('#passwordError');
        const confirmPWError = $('#confirmPasswordError');
        
        if (newPW.length < 8) {
            pwError.removeClass('d-none')
            pwError.addClass('d-block')
            e.preventDefault();

        }
        else {
            pwError.removeClass('d-block')
            pwError.addClass('d-none')


        }
        if (newPW !== confirmNewPW) {
            confirmPWError.removeClass('d-none')
            confirmPWError.addClass('d-block')
            e.preventDefault();
        }
        else {
            confirmPWError.removeClass('d-block')
            confirmPWError.addClass('d-none')
        }
        if (newPW.length < 8 || newPW !== confirmNewPW) {
            e.preventDefault();
        }
    });
});
