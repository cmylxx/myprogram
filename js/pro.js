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
			var oList = getId("list");
			var _Li = oList.getElementsByTagName("li");
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
					for(var i=0;i<oLen;i++){
						_Li[i].className = "";
					}
					_Li[m].className = "active";
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
				for(var i=0;i<oLen;i++){
					_Li[i].className = "";
				}
				_Li[m].className = "active";
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
				for(var i=0;i<oLen;i++){
					_Li[i].className = "";
				}
				_Li[m].className = "active";
			}
			//鼠标事件
			banner.onmouseover = function(){
				clearInterval(timer);
			}
			banner.onmouseout = function(){
				autoPlay();
			}
			
			//
			for(var i=0;i<oLen;i++){
				_Li[i].index = i;
				_Li[i].onmouseover = function(){
					for(var j=0;j<oLen;j++){
						_Li[j].className = "";
						oLi[j].style.display = "none";
					}
					this.className = "active";
					m = this.index;
					oLi[m].style.display = "block";
					oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
					move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
					
				}
			}