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
			function getId(str){
				return document.getElementById(str)
			}
			var degood=getId("degood");
			var depop=getId("depop");
			var debig=getId("debig");
			console.log(debig);
			var bigp=document.getElementsByClassName("bigp")[0];
			var w=200,h=200;
			var ow=400,oh=400;
			var debigw=800,debigh=800;
			degood.onmouseover=function(){
				depop.style.display="block";
				debig.style.display="block";
			}
			degood.onmouseout=function(){
				depop.style.display="none";
				debig.style.display="none";
			}
			degood.onmousemove=function(evt){
				var e=evt||event;
				if(e.clientX-degood.offsetLeft<w/2){
					l=0;
				}else if(e.clientX-degood.offsetLeft>(ow-w/2)){
					l=ow-w;
				}else{
					l=e.clientX-degood.offsetLeft-w/2;
				}
				if(e.clientY-degood.offsetTop<h/2){
					t=0;
				}else if(e.clientY-degood.offsetTop>(oh-h/2)){
					t=oh-h;
				}else{
					t=e.clientY-degood.offsetTop-h/2
				}
				depop.style.left=l+"px";
				depop.style.top=t+"px";
				bigp.style.left=(-1)*l*(debigw/ow)+"px";
				bigp.style.top=(-1)*t*(debigh/oh)+"px";
			}