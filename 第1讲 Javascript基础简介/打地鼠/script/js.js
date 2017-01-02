// JavaScript Document
var gameTime,remainderTime,stayTime,gameStartTime;
var clear_gt_id,clear_ms_id,clear_hit_id,clear_miss_id;
var flag=1;
var hit_count=0,miss_count=0,sumScore=0,score=0;
function startGame(){
	initGame();
	checkTime();
	mouse_show();
}

function initGame(){
	document.form1.txt_gameTime.disabled=true;
	document.form1.txt_remainedTime.disabled=true;
	document.form1.txt_stayTime.disabled=true;
	document.form1.btn_start.disabled=true;
	document.form1.btn_end.disabled=false;
	gameTime=parseInt(document.form1.txt_gameTime.value);
	remainderTime=parseFloat(document.form1.txt_remainedTime.value);
	stayTime=parseFloat(document.form1.txt_stayTime.value);
	gameStartTime=new Date();
}

function checkTime(){
	var currentTime=new Date();
	var leastTime=gameTime*60-parseInt((currentTime-gameStartTime)/1000)
	document.getElementById("timeOut").innerHTML=leastTime;
	clear_gt_id=setTimeout("checkTime()",1000);
	if(leastTime<1)
		{
			
			stopGame();
			flag=0;
		}	
}

function stopGame(){
	document.form1.txt_gameTime.disabled=false;
	document.form1.txt_remainedTime.disabled=false;
	document.form1.txt_stayTime.disabled=false;
	document.form1.btn_start.disabled=false;
	document.form1.btn_end.disabled=true;
	flag=1;
	hit_count=0;miss_count=0;score=0;
	for(i=0;i<25;i++)
	{
		document.images[i].src="images/00.jpg"
	}
	clearTimeout(clear_gt_id);
	clearTimeout(clear_ms_id);
	clearTimeout(clear_hit_id);
	clearTimeout(clear_miss_id);
}
function mouse_show(){
	if(flag)
	{	var i=Math.floor(Math.random()*25)
		document.images[i].src="images/01.jpg";		
		clear_ms_id=setTimeout("mouse_show();",remainderTime*1000);
		clear_miss_id=setTimeout("hidden("+i+")",stayTime*1000);	
		
	}
	else
		{
			stopGame();
		}
}

function hidden(i){
	var fileName=document.images[i].src.substr(document.images[i].src.length-6,2);
	if(fileName=="01")
	{
		document.images[i].src="images/00.jpg";
		++miss_count;
		score-=100;
		sumScore+=100;
		document.getElementById("score").innerHTML="打中："+hit_count+"只 漏掉:"+miss_count+"只<br>总分:"+sumScore+"分"+"得分:"+score;
	}
}

function mouse_hidden(obj){
	if(obj.src.substr(obj.src.length-6,2)=="01")
	{
		obj.src="images/02.jpg";
		++hit_count;
		score+=100;	
		sumScore+=100;
		xx=obj;
		clear_hit_id=setTimeout("hit_hidden(xx)",500);
		document.getElementById("score").innerHTML="打中："+hit_count+"只 漏掉:"+miss_count+"只<br>总分:"+sumScore+"分"+"得分:"+score;		
	}
}
function hit_hidden(obj){
	obj.src="images/00.jpg";
}