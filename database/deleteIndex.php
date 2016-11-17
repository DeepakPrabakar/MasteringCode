<?php

header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents("php://input"));

@$id = $data->id;

//echo $id;
//$id=4;
$servername = "localhost";
$username = "root";
$password = "system"; //Your User Password
$dbname = "masteringcode"; //Your Database Name
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$result = mysqli_query($conn, "delete from index_list where id='".$id."'");

echo $id ." deleted-". $result."-done"; 

//$conn->close();

?>
