<?php
header("Access-Control-Allow-Origin: *");

function check($ip)
{
	$op = "";
	for($i = strlen($ip) - 1; $i >= 0;  $i--) 
	{
		$op .= $ip[$i];
	}
	if($op == $ip) return "true";
	else return "false";

}
$input = $_REQUEST['text'];
echo check($input);

?>