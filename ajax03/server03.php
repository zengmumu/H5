<?php
	$name=$_POST["name"];
	$pass=$_POST["pass"];
	if($name == "zmm"&&$pass == "123"){
		echo "ok";
	}else{
		echo "用户名或者密码错误";
	}
?>