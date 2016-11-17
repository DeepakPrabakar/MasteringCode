<?php
		
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

$result = mysqli_query($conn, "select * from progress");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
  
 // echo $row[0];
  //echo $row[1];
  
}
//echo
		 print(json_encode($data,JSON_PRETTY_PRINT));

	 

$conn->close();

?>
