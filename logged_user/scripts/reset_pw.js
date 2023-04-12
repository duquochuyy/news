$(document).ready(function(){
    $('#resetPWForm').on('submit', function(event){
        event.preventDefault();
        var newPW = $('#inputNewPW').val();
        var confirmNewPW = $('#inputConfirmNewPW').val();
        
        if (newPW.length < 8) {
            $('#passwordError').removeClass('d-none')
            $('#passwordError').addClass('d-block')
        }
        else {
            $('#passwordError').removeClass('d-block')
            $('#passwordError').addClass('d-none')

        }
        if (newPW !== confirmNewPW) {
            $('#confirmPasswordError').removeClass('d-none')
            $('#confirmPasswordError').addClass('d-block')
        }
        else {
            $('#confirmPasswordError').removeClass('d-block')
            $('#confirmPasswordError').addClass('d-none')
        }
        if (newPW.length >= 8 && newPW === confirmNewPW) {
            this.submit();
        }
    });
});