<?php
	session_start(); 
	$name=$_POST["name"];
	$pass=$_POST["pass"];
	if($name == "zmm"&&$pass == "123"){
		echo "ok";
		 $_SESSION['userName'] = $name;
	}else{
		echo "用户名或者密码错误";
	}
?>