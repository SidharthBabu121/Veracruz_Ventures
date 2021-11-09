<?php   
    $conn = new mysqli("localhost", "admin", "admin", "search");
    if($conn->connect_error){
        die("Connect to Local Host Server Failed".$conn->connect_error);
    }
?>