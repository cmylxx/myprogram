<?php
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//echo($userName.$userPass);


	//建立连接
	$conn = mysql_connect("localhost:3306","root","qianfeng");
	
	if($conn){
		echo("连接成功");
	}else{
		echo("连接失败");
	}
	
	//2、选择数据库
	mysql_select_db("zhuce",$conn);
	
	//3、执行语句（插入数据）
	$sqlStr = "insert into onload(userName,passWord)
 values('".$userName."','".$userPass."')";
 
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);
?>