// JavaScript Document
function Main()
{
	// Natural-Language Processing (NLP)
	var date = new DateTime();
	var browser = new Browser();	
	var target = document.getElementById('target');
	var source = document.getElementById('source');	
	var input = source.value;
	this.getAddr = function() {return browser.getKey("sex") == "m"? "Sir":"Madam";}
	this.issetQuery = function() 
	{
		var strip = input.trim();
		var strlen = strip.length;
		if (strlen > 0) return true;
	}	
	this.getQuery = function() {return input;}
	this.getQueryFlat = function() {return input.toLowerCase();}
	this.clearQuery = function() {source.value = ""; source.focus();}
	this.endQuery = function() {source.disabled = true;}		
	this.setQueryBot = function(args)
	{
		var buffer = '\
		<div class="bubble bot">\
			<span>'+args+'</span>\
		</div>';
		this.displayQuery(buffer);
	}
	this.setQueryUser = function()
	{
		var buffer = '\
		<div class="bubble user">\
			<span>'+input+'</span>\
			<time>'+date.time+'</time>\
		</div>';
		this.displayQuery(buffer);
	}
	this.displayQuery = function(args) {target.innerHTML += args;}
}


