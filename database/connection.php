<?php

$dbhost = "localhost";
$dbname = "masteringcode";
$dbusername = "root";
$dbpassword = "system";



//$link = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4",$dbusername,$dbpassword);
try
{
$link = new \PDO( "mysql:host=$dbhost;
						dbname=$dbname;
						charset=utf8mb4",
                        $dbusername,
                        $dbpassword,
                        array(
                            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                            \PDO::ATTR_PERSISTENT => false,
                            \PDO::ATTR_AUTOCOMMIT => 0
                        )
                    );
					
}
catch(PDOException $e)
    {
	$errresult['Resultcode'] = -1;
    $errresult['Connected'] = "Fail";
    $errresult['Message'] = $e->getMessage();
    print(json_encode($errresult));
    //echo $e->getMessage();
    }
					
?>