<?php
   header("Content-type: text/html; charset=utf-8");
   $nicName = $_GET["nicName"];
   $result = array();
   if($nicName == "zmm"||$nicName == "zql"||$nicName == "admin"){
   	//真正要去数据库查询
// 	echo "该昵称被占用";
	$result["code"]=100001;
	$result["msg"]="该用户名已经被占用";
	$result["data"]=null;
	
   }else{
   
   	$result["code"]=100000;
   	$result["msg"]="";
   	$data=array();
   	$data["html"]="";
   	$data["desc"]="";
   	$data["close"]=0;
	$result["data"]=$data;
   	
   }
   echo json_encode($result);
?>