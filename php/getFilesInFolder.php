<?php
$files = array();
$result = array();

foreach (new DirectoryIterator('../img/Findings') as $fileInfo) {    
    $files[$fileInfo->getFileName()] = $fileInfo->getCTime();
 	//echo  $fileInfo->getFileName();  
    //echo date ("F d Y H:i:s.",$fileInfo->getCTime());
    //echo "==";
if($fileInfo == "." or $fileInfo == ".."){
            } elSE
{
    	$file=array(
    			"name" =>$fileInfo->getFileName(),
    			"creationTime" => date ("d F Y h:i:s a",$fileInfo->getCTime())
    		);
array_push($result,$file);

}

}
//echo $files;
echo json_encode($result, JSON_PRETTY_PRINT);
//echo json_encode($result);



//arsort($files);
?>