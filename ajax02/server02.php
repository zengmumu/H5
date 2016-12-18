<?php
   header("Content-type: text/html; charset=utf-8");
   $nicName = $_GET["nicName"];
   if($nicName == "zmm"||$nicName == "zql"||$nicName == "admin"){
   	//真正要去数据库查询
   	echo "该昵称被占用";
   }else{
   	echo "昵称可用";
   }
?>