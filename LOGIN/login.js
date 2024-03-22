document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form').addEventListener('click', function (event) {
        event.preventDefault();
        addStudent();
    });
});


function addStudent() {
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        type:"post",
        url:"/save",
        dataType
    })
   
}