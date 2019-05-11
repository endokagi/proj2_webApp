$(function(){

    // validation
    $('#mainform').submit(function (event) {
        var form = $('#mainform')[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        $(this).addClass('was-validated');
    });

    // login
    $('#logbtn').click(function(){
        var user = $('#email').val();
        var pass = $('#password').val();
        if(user =="" || pass==""){
            alert("Please Fill Info");
            return false;
        }else if(!(user =="admin@nw.com" && pass=="12345**")){
            alert("Something went wrong"+"\nTry to use again");
            window.location.replace();
        }else {
            window.location.href="../../dashboard.html";
            return true;
        }
    });
});