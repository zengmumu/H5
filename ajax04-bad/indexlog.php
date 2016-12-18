<?php
	session_start(); 
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			body{ 
				margin: 0;
				padding: 0;
				
			}
			body,html{ height: 100%; width: 100%;}
			.mask{ 
				position: absolute;
				left:0;
				top:0;
				height: 100%; 
				width: 100%; 
				background-color: rgba(0,0,0,.4);
				display: none;
				}
			.login{
				width: 350px;
				height: 300px;
				position: fixed;
				left:50%;
				top:50%;
				background-color: #fff;
				transform:translate(-50%,-50%);
				display: none;
			}
			/*#myname{ display: none;}*/
		</style>
	</head>
	<body>
		<div class="nav"><p>
			<?php 
			if(isset($_SESSION["userName"])){
			?>
			<span id="myname">
				<?php
					echo $_SESSION["userName"]
				?>
				<span onclick="logOut()">退出</span>
			</span>
			
			<?php 
			}else{		
			?>
			<span onclick="showModel()" id="log">登陆</span>
			<?php }
			?> </div>
		<div class="mask"></div>
		<div class="module login">
			<h3>登陆  <span onclick="hideModel()">&times;</span></h3>
			<p>用户名: <input type="text" id="uname"/></p>
			<p>密码：<input type="password" id="upass"/></p>
			<button onclick="checkLog()">登陆</button>
			<p id="tip"></p>
		</div>
		<script>
			function showModel(){
				document.querySelector(".mask").style.display="block";
				document.querySelector(".login").style.display="block";
			}
			function hideModel(){
				document.querySelector(".mask").style.display="none";
				document.querySelector(".login").style.display="none";
			}
			function checkLog(){
				var uname=document.getElementById("uname").value;
				var upass=document.getElementById("upass").value;
				var xhr=new XMLHttpRequest();
				
				xhr.open("post","server03.php",true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send("name="+uname+"&pass="+upass);
			
				xhr.onreadystatechange=function(){
					if(xhr.status==200&&xhr.readyState==4){
						if(xhr.responseText=="ok"){
							
//							log.style.display="none";
//							myname.innerHTML=uname;
//							myname.style.display="block";
							hideModel();
							
						}else{
							tip.innerHTML=xhr.responseText;
						}
					}
				}
			}
			function logOut(){
				var xhr=new XMLHttpRequest();
				xhr.open("get","serverout.php?action=logout",true);				
				xhr.send();
				xhr.onreadystatechange=function(){
					if(xhr.status==200&&xhr.readyState==4){
						if(xhr.responseText=="ok"){
						myname.style.display="none";
						log.style.display="block";	
							
						}
					}
				}
			}
		</script>
	</body>
</html>
