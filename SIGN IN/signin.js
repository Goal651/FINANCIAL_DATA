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
        email,
        password
    ]
    console.log(user1);
    $.ajax({
        type: "POST",
        url: "http://localhost:4000/get_data",
        data: {
            user: user1
        },
        success: () => {
            console.log('user posted OK.');
        },
        error: (error) => {
            console.log('failed to post user: ', error)
        }
    });
}

