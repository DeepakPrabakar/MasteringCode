<?php

			
//$obj= '{"task":"abb","description":"212"}';
	
//$data=json_decode($obj);
	
$data=json_decode(file_get_contents("php://input"));

//$name=mysql_real_escape_string($data->name);

//$age=mysql_real_escape_string($data->age);

$task=$data->task;
//$description=$data->description;
//$checked=$data->checked;


//$name='asdas';
//$age=12221;
//echo  $title;


//mysql_connect("localhost","root","system");
//mysql_select_db("masteringcode");
//mysql_query("Insert into test ('name','age') values('".$name."','".$age."')");
$date=date("E Y-m-d H:i:s");

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

//$sql = "INSERT INTO progress5 (task,description,addedOn,completedOn,timetaken,archive)
//VALUES ('".$task."', '".$description."','".$date."',0,0,0)";

//FIX

//$sql = "INSERT INTO progress5 (task,description,addedOn,completedOn,timetaken,archive)
//VALUES ('".$task."', '".$description."',now(),0,0,0)";

$sql = "INSERT INTO progress5 (task,description,addedOn,completedOn,timetaken,archive)
VALUES ('".$task."','',now(),0,0,0)";




if ($conn->query($sql) === TRUE) {
    echo print("New record created successfully");
echo $task;

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

echo $task;
$conn->close();

?>
