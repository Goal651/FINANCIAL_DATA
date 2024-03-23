$(document).ready(() => {
    $.ajax({
        type: "get",
        url: "/save"
    });
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
            url: "sign.php",
            data: {
                email: email,
                username: username,
                password: password
            },
            dataType: "json",

            success: function (status) {
                window.location = "/HOME/home.html";

            },
            error:function(error){
                window.location="INDEX.html";
                console.log("what b this");
            }
        })

    }



})