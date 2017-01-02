<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
header("Content-Type: text/html; charset=utf-8");
//header("Content-type:text/vnd.wap.wml");
require_once(dirname(__FILE__)."/include/wap.inc.php");
//echo $aid+"---------------";
if(empty($action)) $action = 'list';
if(empty($sort)) $sort="desc";
if(empty($aid)) $aid="18";
if(empty($username)) $username="游客";
$cfg_templets_dir = $cfg_basedir.$cfg_templets_dir;
$channellist = '';
$newartlist = '';
$channellistnext = '';
  //保存到主表
 
 
//$inquery = "INSERT INTO `dede_feedback`(`aid`,`typeid`,`username`,`arctitle`,`ip`,`ischeck`,`dtime`, `mid`,`bad`,`good`,`ftype`,`face`,`msg`)
//VALUES ('$aid','$typeid','$username','$arctitle','$ip','$ischeck','$dtime', '$mid','0','0','$feedbacktype','$face','$msg') " ;
//$inquery = "INSERT INTO `dede_feedback`( `aid`,`username`,`msg`) VALUES ($aid,$username,$msg)" ;
//$dsql->SetQuery("INSERT INTO `dede_feedback`( `aid`,`username`,`msg`) VALUES ($aid,$username,$msg)");
//$sql="INSERT INTO `dede_feedback`(`aid`,`username`,`msg`) VALUES (`$aid`,`$username`,`$msg`)";
//$query="INSERT INTO `dede_feedback`(`aid`,`username`,`msg`) VALUES (`19`,`qinglin`,`goddone`)";
//echo $sql;
$result=array();
$dsql->ExecuteNoneQuery("INSERT INTO `dede_feedback` (`aid`,`username`,`msg`) VALUES ($aid,'$username','$msg')");
//echo $msg;
//echo $aid;
//echo $username;
//$dsql->Execute();
//$row=$dsql->GetObject();


    $mid = $dsql->GetLastID();
   
if($mid>0){
	$result["status"]=1;
	$result["msg"]=保存成功;
	echo json_encode($result);

}else{
	$result["status"]=0;
	$result["msg"]=保存失败;
	echo json_encode($result);
	
}
//var_dump($row);
