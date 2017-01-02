<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
header("Content-Type: text/html; charset=utf-8");
//header("Content-type:text/vnd.wap.wml");
require_once(dirname(__FILE__)."/include/wap.inc.php");
if(empty($action)) $action = 'list';
if(empty($sort)) $sort="desc";
$cfg_templets_dir = $cfg_basedir.$cfg_templets_dir;
$channellist = '';
$newartlist = '';
$channellistnext = '';

	/*//最新文章
	$dsql->SetQuery("Select id,title,pubdate From `#@__archives` where channel=1 And arcrank = 0 order by id $sort limit 0,10");
	$dsql->Execute();
	$arr=array();
	while($row=$dsql->GetObject())
	{
			array_push($arr,$row);
	}
	$result=array(status=>1,data=>$arr,msg=>"处理成功");
	echo json_encode($result);*/
$query = "
	  Select tp.id,tp.typename,tp.ishidden,arc.typeid,arc.title,arc.arcrank,arc.pubdate,arc.writer,arc.click,addon.body From `#@__archives` arc 
	  left join `#@__arctype` tp on tp.id=arc.typeid
	  left join `#@__addonarticle` addon on addon.aid=arc.id
	  where arc.id='$id'
	";
	$row = $dsql->GetOne($query,MYSQL_ASSOC);
//	foreach($row as $k=>$v) $$k = $v;
//	unset($row);
	$result=array();

	
	
	if(empty($row))
    {
    	
       $result=array(status=>0,data=>$row,msg=>"查询失败");
	echo json_encode($result);
        exit();
    }else{
    	
    $row[$pubdate] = strftime("%y-%m-%d %H:%M:%S",$row[$pubdate]);
	$result=array(status=>1,data=>$row,msg=>"处理成功");
	echo json_encode($result);
	}
	
	