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
            url: "/sign",
            data: {
                email: email,
                username: username,
                password: password
            },
            dataType: "json",

            success: function (status) {
                window.location = "https://goal651.github.io/FINANCIAL_DATA//HOME/home.html";

            },
            error: function (error) {
                window.location = "https://goal651.github.io/FINANCIAL_DATA/index.html";
                console.log("what b this");
            }
        })

    }



})