// JavaScript Document
//function menuExpand(obj)
//{	
	//$(obj).toggleClass("menugroupactive");
//}		
function sideMenu(pagestr)
{
	var activeIndex;
	
	// 设置左侧导航标题链接
	var aArray1=[{"titlePageName":"#","titleClassName":"menutitle","titleText":"关于我们"},{"titlePageName":"#","titleClassName":"menutitle","titleText":"公司动态"},{"titlePageName":"jj31.html","titleClassName":"menutitle","titleText":"产品中心"},{"titlePageName":"#","titleClassName":"menutitle","titleText":"借款服务"},{"titlePageName":"#","titleClassName":"menutitle","titleText":"服务中心"},{"titlePageName":"#","titleClassName":"menutitle","titleText":"招聘英才"}];			 			 
	// 设置左侧导航子链接		 
	var aArray2=[[{"pageName":"jj11.html","aClassName":"subtitle","text":"公司简介"},{"pageName":"jj12.html","aClassName":"subtitle","text":"领导寄语"},{"pageName":"jj13.html","aClassName":"subtitle","text":"企业文化"},{"pageName":"jj14.html","aClassName":"subtitle","text":"发展历程"},{"pageName":"jj15.html","aClassName":"subtitle","text":"企业战略"},{"pageName":"jj16.html","aClassName":"subtitle","text":"管理团队"},{"pageName":"jj17.html","aClassName":"subtitle","text":"成功案例"}],[{"pageName":"jj21.html","aClassName":"subtitle","text":"金佳视点"},{"pageName":"jj22.html","aClassName":"subtitle","text":"行业资讯"},{"pageName":"jj23.html","aClassName":"subtitle","text":"公司活动"}],[{"pageName":"jj32.html","aClassName":"subtitle","text":"信用贷款"},{"pageName":"jj33.html","aClassName":"subtitle","text":"房屋抵押贷款"},{"pageName":"jj34.html","aClassName":"subtitle","text":"车辆抵押贷款"}],[{"pageName":"jj41.html","aClassName":"subtitle","text":"常见问题"},{"pageName":"jj42.html","aClassName":"subtitle","text":"借款流程"},{"pageName":"jj43.html","aClassName":"subtitle","text":"借款材料"},{"pageName":"jj44.html","aClassName":"subtitle","text":"还款方式"}],[{"pageName":"jj51.html","aClassName":"subtitle","text":"分支机构"},{"pageName":"jj52.html","aClassName":"subtitle","text":"合作伙伴"},{"pageName":"jj53.html","aClassName":"subtitle","text":"联系我们"},{"pageName":"jj54.html","aClassName":"subtitle","text":"网站声明"}],[{"pageName":"jj61.html","aClassName":"subtitle","text":"招聘职位"},{"pageName":"jj62.html","aClassName":"subtitle","text":"职业发展"}]];
    
	//三级页面激活二级父页面
	var aArray3=[{"pageName":"jj211.html","pageParent":"jj21.html"},{"pageName":"jj212.html","pageParent":"jj21.html"},{"pageName":"jj213.html","pageParent":"jj21.html"},{"pageName":"jj221.html","pageParent":"jj22.html"},{"pageName":"jj222.html","pageParent":"jj22.html"},{"pageName":"jj223.html","pageParent":"jj22.html"},{"pageName":"jj224.html","pageParent":"jj22.html"},{"pageName":"jj321.html","pageParent":"jj32.html"},{"pageName":"jj322.html","pageParent":"jj32.html"},{"pageName":"jj323.html","pageParent":"jj32.html"},{"pageName":"jj331.html","pageParent":"jj33.html"},{"pageName":"jj332.html","pageParent":"jj33.html"},{"pageName":"jj341.html","pageParent":"jj34.html"},{"pageName":"jj342.html","pageParent":"jj34.html"}];

				//测试用代码********************************************************
				for(var i=0;i<aArray1.length;i++)
				{
					//console.log("标题："+aArray1[i].pageName);
					for(var j=0;j<aArray2[i].length;j++)
					{
						//console.log("子项目："+aArray2[i][j].pageName+",文字内容:"+aArray2[i][j].text);
					}
				}	
				
				//设置当前页激活***************************************************
				// 如果是主链接的
				//for(var i=0;i<aArray1.length;i++)
				//{
					//if(aArray1[i].pageName==pagestr)
					//{
						//aArray1[i].aClassName="menutitleActive";
					//}	
				//}
				
				//如果是一级子链接的
				for(var i=0;i<aArray1.length;i++)
				{
						if(aArray1[i].titlePageName==pagestr)
						{
							aArray1[i].titleClassName="menutitleActive";
						}
				}
				
				//如果是二级子链接的
				for(var i=0;i<aArray1.length;i++)
				{
					for(var j=0;j<aArray2[i].length;j++)
					{
						if(aArray2[i][j].pageName==pagestr)
						{
							aArray2[i][j].aClassName="subtitleActive";
						}
					}
				}
				
				//如果是三级子链接的	
				//首先查找其父元素
				var fatherMenu;
				for(var i=0;i<aArray3.length;i++)
				{
					if(aArray3[i].pageName==pagestr)
					{
						fatherMenu=aArray3[i].pageParent;
						//console.log("父链接为："+fatherMenu);
					}
				}
				
				// 如果有父元素链接, 激活父元素链接
				if(fatherMenu!=undefined)
				{
					for(var i=0;i<aArray1.length;i++)
					{
						for(var j=0;j<aArray2[i].length;j++)
						{
							if(aArray2[i][j].pageName==fatherMenu)
							{
								aArray2[i][j].aClassName="subtitleActive";
							}
						}
					}
				}
				
				//输出导航 html
				var sideMenuHtml="";
				for(var i=0;i<aArray1.length;i++)
				{
					//sideMenuHtml+="<div class='menugroup menugroupactive' onclick='menuExpand(this)'>";
					sideMenuHtml+="<div class='menugroup menugroupactive'>";
						sideMenuHtml+="<a href='"+aArray1[i].titlePageName+"' class='"+aArray1[i].titleClassName+"'>"+aArray1[i].titleText+"</a>";
						for(var j=0;j<aArray2[i].length;j++)
						{
							if(aArray2[i][j].pageName!="txt")
							{
								sideMenuHtml+="<a href='"+aArray2[i][j].pageName+"' class='"+aArray2[i][j].aClassName+"'>"+aArray2[i][j].text+"</a>";
							}
						}
					sideMenuHtml+="</div>";
				}	
				
				document.getElementById("divCenterLeftMenu").innerHTML=	sideMenuHtml;
}


