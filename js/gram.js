//登录页面切换
			function getId(str){
				return document.getElementById(str)
			}
			var otag=document.getElementsByClassName("tag")[0].getElementsByTagName("li");
			var oshows=document.getElementsByClassName("shows")[0].getElementsByTagName("li");
			//console.log(otag);
			//console.log(oshows);
			
			for(i=0;i<otag.length;i++){
				otag[i].index=i;
				//console.log(otag[i]);
				otag[i].onclick=function(){
					//console.log(otag[i]);
					//alert("点击成功");
				for(j=0;j<otag.length;j++){
					otag[j].className="";
					oshows[j].className="";
				}
				//alert("点击成功");
					this.className="act";
					oshows[this.index].className="tive";
				}
			}
			//验证码
			var sjs=getId("sjs");
			var change=getId("change");
			change.onclick=function(){
			arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			var len=arr.length;
			var res="";
			for(i=1;i<=6;i++){
				res+=arr[parseInt(Math.random()*len)];
			}
			 sjs.innerHTML=res;
			}
			
		
			$(function(){
			$(".infont").click(function(){
					$.post("checkUser.php",{"user":$("#uname").val()},
					
					function(data){
						console.log(data);
						if($("#uname").val()==""){
							$(".p1").html("请填写用户名")
							$(".p1").css({color:"red"})
						}else{
							if(data.indexOf("1")>-1){
								$(".p1").html("用户名正确");
								$(".p1").css({color:"green"})							
								$("#upwd").attr("disabled",false)
								$.post(
									 'check.php',{"pwd":$("#upwd").val(),"user":$("#uname").val()},			 
									function(data){
									console.log(data);
									if($("#upwd").val()==""){
									$(".p2").html("请填写密码")
									$(".p2").css({color:"red"})
								}else{
									
									if(data.indexOf("1")>-1){
										$(".p2").html("密码正确");
										$(".p2").css({color:"green"})
										
									}else{
										$(".p2").html("密码错误");
										$(".p2").css({color:"red"})
										
							}
						}
						
					});
							}else{
								$(".p1").html("亲，该用户名不存在");
								$(".p1").css({color:"red"})
								$("#upwd").attr("disabled",true)
						}
						}
						
					})

				
				
				});
		})

			
			
