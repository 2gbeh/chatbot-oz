// JavaScript Document
function DateTime()
{
	var date = new Date();	
	this.hour = date.getHours();
	this.time = getTimestamp();
	this.salute = getGreeting();
	function getTimestamp()
	{
		// 15:09
		var hour = date.getHours() >= 10? date.getHours():"0"+date.getHours();
		var minute = date.getMinutes() >= 10? date.getMinutes():"0"+date.getMinutes();
		return hour+":"+minute;
	}
	function getGreeting()
	{
		// Good day
		var hour = date.getHours();
		if (hour >= 0 && hour <= 11)
			return "Good morning";	
		else if (hour >= 13 && hour <= 16)
			return "Good afternoon";
		else if (hour >= 17 && hour <= 19)
			return "Good evening";
		else
			return "Good day";
	}	
}