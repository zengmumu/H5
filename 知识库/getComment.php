<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
header("Content-Type: text/html; charset=utf-8");
//header("Content-type:text/vnd.wap.wml");
require_once(dirname(__FILE__)."/include/wap.inc.php");
if(empty($action)) $action = 'list';
if(empty($sort)) $sort="desc";
if(empty($aid)) $aid="19";
if(empty($pageLen)) $pageLen=10;
$cfg_templets_dir = $cfg_basedir.$cfg_templets_dir;
$channellist = '';
$newartlist = '';
$channellistnext = '';
if(empty($page)) $page = 0;
$start=$page*$pageLen;
  //保存到主表
 
$dsql->SetQuery("Select id,aid,username,msg From `dede_feedback` where aid=$aid  order by id $sort limit $start,$pageLen");
if($all){
	
	$row = $dsql->GetOne("select count(*) as num From `dede_feedback` where aid = $aid");
	// echo "select count(*) as num From `dede_feedback` where aid = $aid";
	echo json_encode($row);
	die();
}
	$dsql->Execute();
	$arr=array();
	while($row=$dsql->GetObject())
	{
			array_push($arr,$row);
	}
	$result=array(status=>1,data=>$arr,msg=>"处理成功");
	echo json_encode($result);