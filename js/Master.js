// JavaScript Document
function logger (args) {console.log(args);}
function setter (key, value) {document.getElementById(key).innerHTML = value;}
function getter (key) {return document.getElementById(key).innerHTML;}
function scanner (directory, callback) 
{
	var xhttp;
	if (window.XMLHttpRequest) 
		xhttp = new XMLHttpRequest();
	else
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");		
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200)
			callback(this.responseText);
	};
	xhttp.open("GET",directory,true);
	xhttp.send();
}
function catcher (eventTrigger, callbackFunction)
{
	var eventAction = eventTrigger.which || eventTrigger.keyCode;
	return eventAction == 13? callbackFunction():false;
}
function shell ()
{
	var title = " (osazee.bot)";
	var caption = "Hi, i'm Osazee";	
	var external = '\
		<link href="css/Master.css" type="text/css" rel="stylesheet" />\
		<link href="css/Loader.css" type="text/css" rel="stylesheet" />\
		<link href="css/Template.css" type="text/css" rel="stylesheet" />\
		<link href="css/Animation.css" type="text/css" rel="stylesheet" />\
		<link href="css/Theme.css" type="text/css" rel="stylesheet" />';
	var header ='\
		<a href="index.html">Home</a>/\
		<a href="gender.html">Gender</a>/\
		<a href="chatroom.html">Chat</a>';
	var footer = '<a href="index.html" title="End Simulation">Exit</a>';
	document.title += title;	
	document.getElementsByTagName('head')[0].innerHTML += external;
	document.getElementsByTagName('header')[0].innerHTML = header;
	document.getElementsByTagName('footer')[0].innerHTML = footer;
	try
	{
		document.getElementById('caption').innerHTML = caption;
		document.getElementById('source').value = "";
	} catch(e){/*Do Nothing*/}
}





