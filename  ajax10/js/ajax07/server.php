<?php
session_start(); 

$result=array();

if(isset($_POST["action"])&&$_POST["action"]=="getUser"){
	if(isset($_SESSION["user"])){
		$result["status"]=1;
		$data=array();
		$data["user"]=$_SESSION["user"];
		$result["data"]=$data;
		$result["msg"]="";
	}else{
		$result["status"]=0;
		$result["data"]=null;
		$result["msg"]="";
		
	}
	echo json_encode($result);
}
if(isset($_POST["action"])&&$_POST["action"]=="login"){

		$name=$_POST["name"];
		$password=$_POST["password"];	
	
	
	if(isset($name)&&$name=="zql"&&isset($password)&$password=="123"){
			$result["status"]=1;
			$_SESSION["user"]="zql";
			$data=array();
			$data["user"]=$_SESSION["user"];
			$result["data"]=$data;
			$result["msg"]="";	
			echo json_encode($result);
	}else{
			$result["status"]=0;
			$result["data"]=null;
			$result["msg"]="用户名或者密码错误";
			echo json_encode($result);
	}
}

if(isset($_POST["action"])&&$_POST["action"]=="logout"){
	unset($_SESSION);  
	session_destroy();		
	$result["status"]=0;
	$result["data"]=null;
	$result["msg"]="";
	echo json_encode($result);	
}
?>