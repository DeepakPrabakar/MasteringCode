<?php
// outputs e.g.  somefile.txt was last modified: December 29 2002 22:16:23.

echo "hi";
$filename = 'C:/xampp/htdocs/My PHP Projects/MasteringCode/img/Findings/document.querySelector All.PNG';
//if (file_exists($filename)) {
    echo "$filename was last modified: " . date ("F d Y h:i:s.", filemtime($filename));
//}
?>