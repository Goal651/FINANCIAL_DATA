<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'financial_data';
$conn = new mysqli( $host, $user, $pass, $db );
$conn->connect;
if ( $conn->coonect_error ) {
    die( 'Connection failed'.$conn->connect_error );
} else {
    $email = $_POST[ 'email' ];
    $username = $_POST[ 'username' ];
    $password = $_POST[ 'password' ];

    $method = $_SERVER[ 'method' ];
    if ( $method == 'post' ) {
        $conn->query( "insert into users (username,email,password) values(`$username`,`$email`,`$password`) " );
        echo json_encode( array( 'status'=>'success' ) );

    }
}

$conn->close;
?>