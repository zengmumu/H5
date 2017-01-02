<?php
if(isset($_GET["round"])){
$rnd=$_GET["round"];	
}else{
$rnd=30;	
}

 $conn=file_get_contents("http://platform.sina.com.cn/sports_all/client_api?_sport_t_=livecast&_sport_a_=matchesByType&app_key=3571367214&type=213&rnd=".$rnd);
 echo $conn;
?>