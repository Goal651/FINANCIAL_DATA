$(document).ready(() => {
    $('form').submit((event) => {
        event.preventDefault();
        add();
    });
});


function add() {
    let username = $('#username').val();
    let email = $('#email').val();
    let password = $('#password').val();

    var user1 = [
        username,
        email,
        password
    ]
    console.log(user1);
    $.ajax({
        type: "POST",
        url: "http://localhost:6510/sign",
        data: {
            user: user1
        },
        success: () => {
            console.log('user posted OK.');
            const $message = $('<p id="message">Incorrect Email!</p>').hide();
            $('.message').append($message);

            $message.slideDown(500, function () {
                $(this).delay(2000).slideUp(500, function () {
                    $(this).remove();
                });
            });
        },
        error: (error) => {
            console.log('failed to post user: ', error)
        }
    });
}

