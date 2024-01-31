document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('form').addEventListener('click', function (event) {
        event.preventDefault();
        addStudent();
    });
});


function addStudent() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                
            } else {
                console.error('Failed to add student.');
            }
        }
    };
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('email=' + email + '&password=' + password );
}