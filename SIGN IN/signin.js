$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        add();

    })

    function add() {
        let username = $("#username").val();
        let email = $("#password").val();
        let password = $("#password");
        $.ajax({
            type: "post",
            url: "/save",
            data: {
                password: password,
                username: username,
                password: password
            },
            dataType: "json",

            success: function (status) {
                window.location = "/HOME/home.html";

            },
            error:function(error){
                window.location="INDEX.html";
            }
        })

    }



})