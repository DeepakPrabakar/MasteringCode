<?php
$dir = "../img/Findings";

$return_array = array();
if(is_dir($dir)){
    if($dh = opendir($dir)){
        while(($file = readdir($dh)) != false){
            if($file == "." or $file == ".."){
            } else {
                $return_array[] = $file;
                echo "$filename was last modified: " . date ("F d Y H:i:s.", filectime($file));

            }
        }
    }
    echo json_encode($return_array);
}
?>