<?php
$server="localhost";// $servername="127.0.0.1";
$username="root";
$password="";
$db="financial_data";

$conn = new mysqli($server, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if($method=='POST' ){
         $email = $_POST['email'];
         $password = $_POST['password'];
         $conn->query("INSERT INTO `login` (`email`, `password`) VALUES ('$email', $password)");
         echo json_encode(array('status' => 'success'));
}     $conn->close();
?>