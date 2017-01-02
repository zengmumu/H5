<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
header("Content-Type: text/html; charset=utf-8");
//header("Content-type:text/vnd.wap.wml");
require_once(dirname(__FILE__)."/include/wap.inc.php");
if(empty($action)) $action = 'list';
if(empty($sort)) $sort="desc";
if(empty($typeid)) $typeid="2";
if(empty($title)) $title="新的文章标题";
$cfg_templets_dir = $cfg_basedir.$cfg_templets_dir;
$channellist = '';
$newartlist = '';
$channellistnext = '';
$result=array();
 //最新文章
 	$sql2="SELECT id FROM  `dede_archives` ORDER BY  `id` DESC LIMIT 0 , 1 ";
	$id=$dsql->GetOne($sql2);
	$aid=$id[id]+1;
	$sql1="INSERT INTO `dede_archives` (id,`title`,`writer`,`typeid`,`ismake`) value('$aid','$title','$writer','$typeid','1')";	
	 if(!$dsql->ExecuteNoneQuery($sql1)){
	 	$result["status"]=0;
	 	$result["msg"]="保存主表错误";
	 	echo json_encode($result);
	 	die();
	 }
	
//	$sql2="SELECT id FROM  `dede_archives` ORDER BY  `id` DESC LIMIT 0 , 1 ";
//	$id=$dsql->GetOne($sql2);
	//echo($id[id]);
	$sql3="INSERT INTO `dede_addonarticle` (`aid`,`body`,`typeid`) value($aid,'$body','$typeid')";
	 if(!$dsql->ExecuteNoneQuery($sql3)){
	 	$result["status"]=0;
	 	$result["msg"]="保存附件表错误";
	 	echo json_encode($result);
	 	die();
	 }
	 $result["status"]=1;
	 $result["msg"]="保存成功";
	 echo json_encode($result);





