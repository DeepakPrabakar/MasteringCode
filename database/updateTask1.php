<?php

			
//$obj= '{"title":"aaaa","description":"212"}';
//$obj= '{"id":3,"completed":"0"}';
//$obj= '{"id":6}';


	
//$data=json_decode($obj);
	
$data=json_decode(file_get_contents("php://input"));

//$name=mysql_real_escape_string($data->name);

//$age=mysql_real_escape_string($data->age);

//$title=$data->title;
//$description=$data->description;
$id=$data->id;
//$completed=$data->completed;
//$checked=true;


//$name='asdas';
//$age=12221;
//echo  $title;


//mysql_connect("localhost","root","system");
//mysql_select_db("masteringcode");
//mysql_query("Insert into test ('name','age') values('".$name."','".$age."')");


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

//$sql = "UPDATE progress5 SET completedOn=now(), timetaken = (now()-addedon) where id=$id";
$sql = "UPDATE progress5 SET completedOn=now() ,timeTaken= TIMEDIFF(completedOn,addedOn)where id=$id";

if ($conn->query($sql) === TRUE) {
    echo print("updatedcreated successfully");
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
