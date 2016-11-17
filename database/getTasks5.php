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

//$result = mysqli_query($conn, "select *, date(addedon) as adate, DATE_FORMAT(addedon, '%W, %D %M %Y %h:%i:%s %p') as format from progress5");

//previous
//$result = mysqli_query($conn, "select id,task, description, DATE_FORMAT(addedon, '%W, %D %b %Y %h:%i:%s %p') as addedOn, DATE_FORMAT(completedOn, '%W, %D %b %Y %h:%i:%s %p') as completedOn, DATE_FORMAT(timeTaken, '%H hour %i mins %s secs') as timeTaken from progress5 order by addedon DESC");

$result = mysqli_query($conn, "select id,task, description, DATE_FORMAT(addedon, '%W, %D %b %Y %h:%i:%s %p') as addedOn, DATE_FORMAT(completedOn, '%W, %D %b %Y %h:%i:%s %p') as completedOn, DATE_FORMAT(timeTaken, '%H hour %i mins %s secs') as timeTaken from progress5 order by DATE_FORMAT(addedon, '%D %b %Y %H:%i:%s %p') DESC");

// %M September
// %b Sep
//%H	Hour (00-23)
//%h	Hour (01-12)
//$result = mysqli_query($conn, "select * from progress5");


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
