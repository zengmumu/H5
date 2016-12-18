<?php
	session_start(); 
	$action=$_GET["action"];
	if(isset($action)){
		unset($_SESSION);  
	    session_destroy();	
	    echo "ok";
	} 
 	
?>