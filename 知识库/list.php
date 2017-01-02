<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
header("Content-Type: text/html; charset=utf-8");
//header("Content-type:text/vnd.wap.wml");
require_once(dirname(__FILE__)."/include/wap.inc.php");
if(empty($action)) $action = 'list';
if(empty($page)) $page = 0;
if(empty($sort)) $sort="desc";
if(empty($pageLen)) $pageLen=10;

$cfg_templets_dir = $cfg_basedir.$cfg_templets_dir;
$channellist = '';
$newartlist = '';
$channellistnext = '';
$start=$page*$pageLen;
	//最新文章
	$dsql->SetQuery("Select id,title,pubdate,typeid From `#@__archives` where channel=1 And arcrank = 0 order by id $sort limit $start,$pageLen");
	if($typeid){
		$dsql->SetQuery("Select id,title,pubdate,typeid From `#@__archives` where channel=1 And arcrank = 0 And typeid = '$typeid' order by id $sort limit $start,$pageLen");	
	}
	if($all){
	$row = $dsql->GetOne("select count(*) as num From `#@__archives` where channel=1 And arcrank = 0 And typeid = '$typeid'");
	echo json_encode($row);
	die();
}
	$dsql->Execute();
	$arr=array();
	while($row=$dsql->GetObject())
	{
			array_push($arr,$row);
	}
	//var_dump($arr);
	if(empty($arr))
    {
       $result=array(status=>0,data=>$arr,msg=>"查询失败");
	echo json_encode($result);
        exit();
    }else{
    	
    
	$result=array(status=>1,data=>$arr,msg=>"处理成功");
	echo json_encode($result);
	}
	
