// JavaScript Document
function Browser ()
{
	this.query = function()
	{
		var url = window.location.href;
		var arr = url.split('?');	
		return arr[1];
	}	
	this.clear = function()
	{
		var url = window.location.href;
		var arr = url.split('#') && url.split('?');	
		return arr[0];
	}
	this.goto = function(url)
	{
		if (url[0] == "?") {window.location.assign(this.clear()+url);}
		else window.location.assign(url);	
	}
	this.append = function(request) {window.location.href += request;}
	this.top = function()
	{
		var url = window.location.href;
		var clear = url.split('#');
		window.location.assign(clear[0]+'#');
	}
	this.bottom = function()
	{
		var url = window.location.href;
		var clear = url.split('#');
		window.location.assign(clear[0]+'#bottom');
	}
	this.pager = function(url) {this.goto("?pager="+url);}
}