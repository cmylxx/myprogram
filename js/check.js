		function getId(str){
				return document.getElementById(str);
			}
		//判断手机号
			
			var yzm=getId("yzm");
			var p1=document.getElementsByClassName("p1")[0];
			var p2=document.getElementsByClassName("p2")[0];
			var p3=document.getElementsByClassName("p3")[0];
			var p4=document.getElementsByClassName("p4")[0];
			var p5=document.getElementsByClassName("p5")[0];
			var p6=document.getElementsByClassName("p6")[0];
			var p8=document.getElementsByClassName("p8")[0];
			var p9=document.getElementsByClassName("p9")[0];
			
			var p7=document.getElementsByClassName("p7")[0];
			var pwd=getId("pwd");
			var pwd1=getId("pwd1");
			var check=getId("check");
			var zhuce=getId("zhuce");
			var  tel=getId("tel");
			var yzm=getId("yzm");
			//var reg=/^[131,135,138,139,147,130,150,155,158,159,153,180,181,182,186,177,189][0-9]{11}$/;
			tel.onfocus=function(){
				p6.innerHTML="请填写真实的手机号，并进行验证";
			}
			tel.onblur=function(){
			   // var phone = document.getElementById('phone').value;
			  	
			  	 let  otel=tel.value;
			  	 let reg=/^1[34578]\d{9}$/;
			    if(tel.value==""){
			    	p6.innerHTML="";
			    }else if(reg.test(otel)){
			       	p6.style.color="green";
			        p6.innerHTML="手机号码可用";
			    }else{
			    	
			    	p6.innerHTML="手机号码有误，请重填!";
			    	p6.style.color="red";
			    	tel.value="";
			    }
			}
			//手机验证码
			yzm.onfocus=function(){
				p7.innerHTML="请输入手机收到的验证码"
			}
			yzm.onblur=function(){
				if(pwd.value==""){
				p7.innerHTML="";
			}
			}
			//密码验证
			pwd.onfocus=function(){
				p8.innerHTML="6-16位字符，可使用数字、字母组合";
				
			}
			pwd.onblur=function(){
				let reg=/^[0-9a-zA-Z_]{6,16}$/;
			let tet=pwd.value;
			if(pwd.value==""){
				p8.innerHTML="";
			}else  if(reg.test(tet)){
				p8.innerHTML="密码可用"
				p8.style.color="green";
			}else{
				p8.innerHTML="密码不可用";				
				p8.style.color="red";
				pwd.value="";
			}
			}
			//第二次输入密码
			pwd1.onfocus=function(){
				p9.innerHTML="请再次输入登录密码，两次必须保持一致";
			}
			pwd1.onblur=function(){
				
			let otet=pwd1.value;
			if(pwd.value==""){
				p9.innerHTML="";
			}else  if(pwd1.value==pwd.value){
				p9.innerHTML="密码正确"
				p9.style.color="green";
			}else{
				p9.innerHTML="两次密码输入不一致";				
				p9.style.color="red";
				pwd1.value="";
			}
			}
//			//复选框
//			$(function(){
//			//var check=getId("check");
//			var IsCheck=$("#check").attr("checked");
//			//var zhuce=getId("zhuce");
//			if(IsCheck==true){
//				console.log(check.checked);
//				 $("#zhuce").attr("disabled",false);
//				//zhuce.disabled=true;
//				$("#zhuce").css({"background":"#b71a21"})
//				//zhuce.style.background="#b71a21";
//			}else{
//				//zhuce.disabled=true;
//				$("#zhuce").attr("disabled",true);
//			}
//	})
		//注册会员
		$(function(){
			$("#zhuce").click(function(){
				//1、
				
				$.post("demo03.php",
						{
							"userName":$("#tel").val(),
							"userPass":$("#pwd").val()
						},
						function(data){
							//alert(data);
							alert("注册成功！");			
						}
				)
			});
			$("#tel").blur(function(){
					$.get("checkUser.php",{"user":$("#tel").val()},function(data){
						console.log(data);
						if(data.indexOf("1")>-1){
							$(".p6").html("亲，该用户名已经存在,请更换手机号");
							$(".p6").css({color:"red"});
							$("#zhuce").attr("disabled",true)
						}else{
							$(".p6").html("亲，该用户名可用");
							$("#zhuce").attr("disabled",false)
						}
					});
				});
		});