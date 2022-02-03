// JavaScript Document
function Cookies()
{
	this.setCookie = function(key,value) {document.cookie = key+"="+value;}
	this.getCookie = function(key)
	{
		var each;	
		var csv = document.cookie;
		var array = csv.split("; ");	
		for (var i = 0; i < array.length; i++)
		{
			each = array[i].split("=");
			if (each[0] == key) return each[1];
		}
	}
	this.delCookie = function(key)
	{
		var backdate = "Tue, 15 Sep 1992 00:00:00 UTC";
		return document.cookie = key+"=; expires="+backdate;
	}
	this.clearCookie = function(key)
	{
		var each;	
		var csv = document.cookie;
		var array = csv.split("; ");	
		for (var i = 0; i < array.length; i++)
		{
			each = array[i].split("=");
			delCookie(each[0]);
		}		
	}
}




