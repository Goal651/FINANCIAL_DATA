<?php
$host="localhost";
$user="root";
$pass="";
$db="financial_data";
$conn=new mysqli($host,$user,$pass,$db);
$conn->connect;
if($conn->coonect_error){
    die("Connection failed".$conn->connect_error);
}
else{
    echo json_encode(array("status"=>"success"));
}
$conn->close;
?>