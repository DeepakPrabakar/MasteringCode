<?php
//$obj= '{"id":5,"file_name":"212"}';
	
//$data=json_decode($obj);
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
  include 'connection.php';
try{
    // Create a new connection.
    // You'll probably want to replace hostname with localhost in the first parameter.
    // Note how we declare the charset to be utf8mb4.  This alerts the connection that we'll be passing UTF-8 data.  This may not be required depending on your configuration, but it'll save you headaches down the road if you're trying to store Unicode strings in your database.  See "Gotchas".
    // The PDO options we pass do the following:
    // \PDO::ATTR_ERRMODE enables exceptions for errors.  This is optional but can be handy.
    // \PDO::ATTR_PERSISTENT disables persistent connections, which can cause concurrency issues in certain cases.  See "Gotchas".
   
 

    
 $link->beginTransaction();
    $handle = $link->prepare('delete from index_list where id=?');
 
    // PHP bug: if you don't specify PDO::PARAM_INT, PDO may enclose the argument in quotes.  This can mess up some MySQL queries that don't expect integers to be quoted.
    // See: https://bugs.php.net/bug.php?id=44639
    // If you're not sure whether the value you're passing is an integer, use the is_int() function.
		
    $handle->bindValue(1, $id);
    
	$result = $handle->execute();
	echo "reesult".$result;
    $workerid = $link->lastInsertId();
	echo "weorkis".$workerid;
//	echo "afff:	 ".$result->affected_rows();
	//echo "hhhhafff:	 ".$handle->affected_rows();
	//echo "aaaaa ".mysql_affected_rows();
	
    
    
//$handle = $link->prepare("SELECT LAST_INSERT_ID()");

//$results=$handle->fetchAll(PDO::FETCH_ASSOC);
    // Using the fetchAll() method might be too resource-heavy if you're selecting a truly massive amount of rows.
    // If that's the case, you can use the fetch() method and loop through each result row one by one.
    // You can also return arrays and other things instead of objects.  See the PDO documentation for details.
    //$result = $handle->fetchAll(\PDO::FETCH_OBJ);
    
 if(($result!= 0))
 {
     $errresult['Resultcode'] = 0;
     $errresult['Data'] = "".$result;
     $errresult['Message'] = "Worker deleted sucessfully";
     $link->commit();
 }
 else 
 {
     $errresult['Resultcode'] = 1;
     $errresult['Data'] = null;
     $errresult['Message'] = "Invalid Parameter";
     $link->rollBack();
 }
 $link = null;
     print(json_encode($errresult));
     
    //foreach($result as $row){
      //  print($row->Username);
    //}
    
}
catch(Exception $ex){
    $errresult['Resultcode'] = -1;
    $errresult['Data'] = null;
    $errresult['Message'] = $ex->getMessage();
    $link->rollBack();
    print(json_encode($errresult,JSON_PRETTY_PRINT));
    $link = null;
}
?>
