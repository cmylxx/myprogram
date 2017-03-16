//轮播图
		function getId(str){
				return document.getElementById(str)
			}
			function getStyle(obj,attr){
				if(obj.currtentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,null)[attr];
				}
			}
			var side = getId("side");
			var banner = getId("banner");
			var oLi = side.getElementsByTagName("li");
			
			var prev = getId("prev");
			var next = getId("next");
			
			var timer=null;
			var m = 0;
			var oLen = oLi.length;
			//动态添加原点数
//			for(var i=0;i<oLen;i++){
//				var  _Li =  document.createElement("li");
//				if(i==0){
//					_Li.className = "active";
//				}
//				oList.appendChild(_Li);
//			}
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
//					oLi[m].style.opacity = "0";
					for(var i=0;i<oLen;i++){
						oLi[i].style.display = "none";
					}
					m++;
					if(m==oLen){
						m=0;
					}
					oLi[m].style.display = "block";
					oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
					move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
					
				},2500)
			}
			autoPlay();
			//按钮的点击
			//	next
			next.onclick = function(){
//				oLi[m].style.opacity = "0";
				for(var i=0;i<oLen;i++){
						oLi[i].style.display = "none";
					}
				m++;
				if(m==oLen){
					m = 0;
				}
				oLi[m].style.display = "block";
				oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
				move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
				
			}
			// prev
			prev.onclick = function(){
//				oLi[m].style.opacity = "0";
				for(var i=0;i<oLen;i++){
					oLi[i].style.display = "none";
				}
				m--;
				if(m==-1){
					m = oLen - 1;
				}
				oLi[m].style.display = "block";
				oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
				move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
				
			}
			//鼠标事件
			banner.onmouseover = function(){
				clearInterval(timer);
			}
			banner.onmouseout = function(){
				autoPlay();
			}
			
			
			//返回顶部
			var subreturnTop=getId("subreturnTop");
			subreturnTop.onclick=function(){
				var scroll=document.body.scrollTop||document.documentElement.scrollTop;
				scroll=0;
				document.body.scrollTop=scroll;
			}
			//二级导航
			
				var navbar = document.getElementsByClassName("nav")[0];
				var hashover = navbar.getElementsByClassName("hashover");
				for(var i=0;i<hashover.length;i++){
					hashover[i].onmouseover = function(){
						this.getElementsByTagName("ul")[0].style.display = "block";
						
					}
					hashover[i].onmouseout = function(){
					this.getElementsByTagName("ul")[0].style.display = "none";
						}
				}
			
			//楼层索引
			$(window).scroll(function () {
		       if($(window).scrollTop()>=700){		       		
		       		$("#subnav:eq(0)").css({position:"fixed",top:-40,left:-17,"z-index":9999});
		       }else{
		       		$("#subnav:eq(0)").css({position:"relative",top:0,left:0});
		       }
			});
			
			var Li=getId("sublist").getElementsByTagName("li");
			var oDiv=getId("sub_con").getElementsByTagName("div");
			
			window.onload = window.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				for (var i = 0; i < Li.length; i++) {
					Li[i].onclick = function(){
						
						for (var j = 0; j < Li.length; j++) {
							if (this == Li[j]) {
								console.log(this)
								document.documentElement.scrollTop = oDiv[j].offsetTop;
								document.body.scrollTop = oDiv[j].offsetTop;
							}
						}
					}
				}
			}
			//获取页面元素
			
			
				$(function(){
					$.get("getGoodsList.php",
					function(data){
						
						let odata=eval(data);
					//	console.log(data);
						for(let i=0;i<odata.length;i++){
							console.log(odata[i]);
							var htmlStr="<dl>";
								htmlStr+="<dt><img src='"+odata[i].goodsImg+"'><span>特惠<br>￥"+odata[i].goodsPrice+"</span></dt><dd><a href='###'>凡客西服  男款 黑色</a><br><span>售价599</span></dd>";
								htmlStr+="</dl>";
							$(".xf").append(htmlStr);	
						}
					}
				)
			})
				
			
			
			
	