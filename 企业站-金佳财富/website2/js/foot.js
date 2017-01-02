// JavaScript Document
function foot()
{
	var strTopMenuHtml="";
	
	strTopMenuHtml+="<div id='divFoot'>";
        	strTopMenuHtml+="<div id='divFootCenter'>";
                strTopMenuHtml+="<img class='footLogo' src='../images/footlogo.jpg' alt='底部 logo 图片'>";
                strTopMenuHtml+="<img src='../images/qrcode.png' id='qrcode2' alt='二维码图片'/>";
                strTopMenuHtml+="<div class='foot_row'>";
                	strTopMenuHtml+="<div class='smallRowBlock'><a  class='bold' href='jj11.html'>关于我们</a></div>";
                    strTopMenuHtml+="<div class='smallRowBlock'><a  class='bold' href='jj54.html'>网站声明</a></div>";
                    strTopMenuHtml+="<div class='smallRowBlock'><a  class='bold' href='jj53.html'>联系我们</a></div>";
					strTopMenuHtml+="<div class='smallRowBlock'><p class='bold'>微信公众号<br/><span style='font-size:12px'>&nbsp;&nbsp;金佳财富<span></p> </div>";
                strTopMenuHtml+="</div>";
                strTopMenuHtml+="<div class='row_border'>";
                	strTopMenuHtml+="<p class='copyRight'>版权所有 ©辽宁金佳投资管理有限公司  辽ICP备XXXX</p>";
                strTopMenuHtml+="</div>";
        	strTopMenuHtml+="</div>	";
       		strTopMenuHtml+="</div>	";	
	
	
				
	document.getElementById("divIframe").innerHTML=strTopMenuHtml;
}

