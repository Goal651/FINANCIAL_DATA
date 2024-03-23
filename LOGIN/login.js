$(document).ready( function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        addStudent();
    });
});


function addStudent() {
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        type: "post",
        url: "/save",
        dataType: "json",
        data: {
            email: email,
            password: password
        },
        success: function (status) {
            if(status=='correct'){
                alert("Hello");
            }
            console.log("Allowed");
        }, error: function(){
            alert("What???");
        }
    })

}