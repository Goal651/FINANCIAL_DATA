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
            type: "get",
            url: "/save"
        });
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