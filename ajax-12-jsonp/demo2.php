<?php
	$callback=$_GET["callback"];
	 $name=$_GET["name"];
	 echo "$callback({name:\"$name\",age:18})";
?>