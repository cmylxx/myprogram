<?php
	header("content-type","text/html;charset=utf-8");
	//1、接收客户端传来的数据（用户名）
	
	$userName = $_POST['user'];
	$passWord =$_POST['pwd'];
	//2、连接数据库，进行查询
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","qianfeng");
	//2)、选数据库
	mysql_select_db("zhuce",$conn);
	//3)、执行SQL语句
	$sqlstr = "select * from onload where userName='".$userName."' and passWord='".$passWord."'";
	$result = mysql_query($sqlstr,$conn);
	$result = mysql_query($sqlstr,$conn);
	$rows = mysql_num_rows($result);
	
	//echo($rows);
	//4)、拆桥（关闭数据库）
	mysql_close($conn);
	
	//3、根据查询结果返回（1或 0）
	echo($rows);
?>