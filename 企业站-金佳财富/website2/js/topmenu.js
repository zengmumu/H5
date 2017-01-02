// JavaScript Document
function topMenu(pagestr)
{
	var activeIndex;

	/*********IE 8 是个坑货，声明数组对像的时候，不能换行，不然会出问题的*********/
	var pageArray=[{"pageName":"index.html","activeMenuIndex":"1"},{"pageName":"jj11.html","activeMenuIndex":"2"},{"pageName":"jj12.html","activeMenuIndex":"2"},{"pageName":"jj13.html","activeMenuIndex":"2"},{"pageName":"jj14.html","activeMenuIndex":"2"},{"pageName":"jj15.html","activeMenuIndex":"2"},{"pageName":"jj16.html","activeMenuIndex":"2"},{"pageName":"jj17.html","activeMenuIndex":"2"},{"pageName":"jj21.html","activeMenuIndex":"3"},{"pageName":"jj211.html","activeMenuIndex":"3"},{"pageName":"jj212.html","activeMenuIndex":"3"},{"pageName":"jj213.html","activeMenuIndex":"3"},{"pageName":"jj214.html","activeMenuIndex":"3"},{"pageName":"jj22.html","activeMenuIndex":"3"},{"pageName":"jj23.html","activeMenuIndex":"3"},{"pageName":"jj31.html","activeMenuIndex":"4"},{"pageName":"jj32.html","activeMenuIndex":"4"},{"pageName":"jj321.html","activeMenuIndex":"4"},{"pageName":"jj322.html","activeMenuIndex":"4"},{"pageName":"jj323.html","activeMenuIndex":"4"},{"pageName":"jj324.html","activeMenuIndex":"4"},{"pageName":"jj33.html","activeMenuIndex":"4"},{"pageName":"jj331.html","activeMenuIndex":"4"},{"pageName":"jj332.html","activeMenuIndex":"4"},{"pageName":"jj333.html","activeMenuIndex":"4"},{"pageName":"jj334.html","activeMenuIndex":"4"},{"pageName":"jj34.html","activeMenuIndex":"4"},{"pageName":"jj341.html","activeMenuIndex":"4"},{"pageName":"jj342.html","activeMenuIndex":"4"},{"pageName":"jj41.html","activeMenuIndex":"5"},{"pageName":"jj42.html","activeMenuIndex":"5"},{"pageName":"jj43.html","activeMenuIndex":"5"},{"pageName":"jj44.html","activeMenuIndex":"5"},{"pageName":"jj51.html","activeMenuIndex":"6"},{"pageName":"jj52.html","activeMenuIndex":"6"},{"pageName":"jj53.html","activeMenuIndex":"6"},{"pageName":"jj54.html","activeMenuIndex":"6"},{"pageName":"jj61.html","activeMenuIndex":"7"},{"pageName":"jj62.html","activeMenuIndex":"7"}];
				   
	//console.log(pageArray[0].pageName);
	/*document.getElementById("test").innerHTML="hello";	*/
	
	
	for(var i=0;i<pageArray.length;i++)
	{
		if(pageArray[i].pageName==pagestr)
		{
			activeIndex=pageArray[i].activeMenuIndex;
		}
	}
	
	/*	alert(activeIndex);*/
	var strTopMenuHtml="";
				strTopMenuHtml+="<img src='../images/logo.gif' class='logo' alt='logo 和电话图片'/>";
                strTopMenuHtml+="<ul class='level1'>";
				if(activeIndex==1)
				{
                	strTopMenuHtml+="<li class='level1'><a class='level1_active' href='index.html'>首页</a></li>";
				}
				else
				{
					strTopMenuHtml+="<li class='level1'><a class='level1' href='index.html'>首页</a></li>";
				}
				
				if(activeIndex==2)
				{	
                	strTopMenuHtml+="<li class='level1'><a  class='level1_active' href='jj11.html'>关于我们</a>";
				}
				else
				{
					strTopMenuHtml+="<li class='level1'><a  class='level1' href='jj11.html'>关于我们</a>";
				}
				
                    	strTopMenuHtml+="<ul class='level2'>";
							strTopMenuHtml+="<li class='level2'><a class='level2' href='jj11.html'>公司简介</a></li>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj12.html'>领导寄语</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj13.html'>企业文化</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj14.html'>发展历程</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj15.html'>企业战略</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj16.html'>管理团队</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj17.html'>成功案例</a></li>";
                        strTopMenuHtml+="</ul>";
					strTopMenuHtml+="</li>";	
						
				if(activeIndex==3)
				{		
                   strTopMenuHtml+="<li class='level1'><a class='level1_active' href='jj21.html'>公司动态</a>";
				} 
				else
				{
					strTopMenuHtml+="<li class='level1'><a class='level1' href='jj21.html'>公司动态</a>";
				}
						strTopMenuHtml+="<ul class='level2'>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj21.html'>金佳视点</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj22.html'>行业资讯</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj23.html'>公司活动</a></li>";
                        strTopMenuHtml+="</ul>";
					strTopMenuHtml+="</li>";	
				
				
				
				if(activeIndex==4)
				{	
                    strTopMenuHtml+="<li class='level1'><a class='level1_active' href='jj31.html'>产品中心</a>";
				}
				else
				{
					 strTopMenuHtml+="<li class='level1'><a class='level1' href='jj31.html'>产品中心</a>";
				}
                    	strTopMenuHtml+="<ul class='level2'>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj32.html'>信用贷款</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj33.html'>房屋抵押贷款</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj34.html'>车辆抵押贷款</a></li>";
                        strTopMenuHtml+="</ul>";
                    strTopMenuHtml+="</li>";
				
				if(activeIndex==5)
				{	
                   	strTopMenuHtml+="<li class='level1'><a class='level1_active' href='jj41.html'>借款服务</a>";
				}
				else
				{
					strTopMenuHtml+="<li class='level1'><a class='level1' href='jj41.html'>借款服务</a>";
				}
						strTopMenuHtml+="<ul class='level2'>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj41.html'>常见问题</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj42.html'>借款流程</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj43.html'>借款材料</a></li>";
							strTopMenuHtml+="<li class='level2'><a class='level2' href='jj44.html'>还款方式</a></li>";
                        strTopMenuHtml+="</ul>";
                    strTopMenuHtml+="</li>";
				
					
                if(activeIndex==6)
				{	
                   	strTopMenuHtml+="<li class='level1'><a class='level1_active' href='jj51.html'>服务中心</a>";
				}    
                else
				{
					strTopMenuHtml+="<li class='level1'><a class='level1' href='jj51.html'>服务中心</a>";
				}  
				 		strTopMenuHtml+="<ul class='level2'>";
							strTopMenuHtml+="<li class='level2'><a class='level2' href='jj51.html'>分支机构</a></li>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj52.html'>合作伙伴</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj53.html'>联系我们</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj54.html'>网站声明</a></li>";
                        strTopMenuHtml+="</ul>";
                    strTopMenuHtml+="</li>";
				    
				if(activeIndex==7)
				{	
                   	strTopMenuHtml+="<li class='level1'><a class='level1_active' href='jj61.html'>招聘英才</a>";
				} 
				else
				{
					strTopMenuHtml+="<li class='level1'><a class='level1' href='jj61.html'>招聘英才</a>";
				}
                    
                    	strTopMenuHtml+="<ul class='level2'>";
                        	strTopMenuHtml+="<li class='level2'><a class='level2' href='jj61.html'>招聘职位</a></li>";
                            strTopMenuHtml+="<li class='level2'><a class='level2' href='jj62.html'>职业发展</a></li>";
                        strTopMenuHtml+="</ul>";
                    strTopMenuHtml+="</li>";
					
                strTopMenuHtml+="</ul>";
		document.getElementById("divHeadCenter").innerHTML=strTopMenuHtml;
}

